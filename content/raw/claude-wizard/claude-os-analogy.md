# Claude Code as an Operating System

A mental model for understanding how Claude Code's primitives relate to each other.

## The Mapping

```
Context window     = RAM (pre-swap, bounded, manually managed)
CLAUDE.md / rules  = /etc/config + .bashrc (loaded at boot, resident)
Skills             = shared libraries (.so / .dll, lazy-loaded by symbol)
Subagents          = forked processes (own address space, IPC to return results)
Hooks              = eBPF / seccomp / ptrace (kernel-level, outside the process)
/compact           = manual overlay swap (write compressed state to disk, free RAM)
/clear             = process restart (full memory reset, all state lost)
```

## Context Window as Pre-Swap RAM

Before virtual memory with automatic swap, programmers used **overlays** — manually
partitioning a program into segments, deciding which to keep resident and which to
load from disk on demand. This maps precisely onto how you should manage Claude's context:

| Manual overlay technique | Claude equivalent |
|---|---|
| Keep kernel structures small, resident | Keep CLAUDE.md under 200 lines |
| Lazy-load code segments on demand | Path-scoped `.claude/rules/` (load only when matching files open) |
| Symbol table without loading full lib | Skill descriptions in context; full skill loads on invocation |
| Fork a child process for expensive work | Subagent for research/verbose ops — parent's memory stays clean |
| Write working set to disk, reload later | `/compact` — summarize tail to disk, keep head intact |

The **"agent dumb zone"** at 80%+ context fills is thrashing — the model is context-bound,
coherence degrades, adherence drops. Same as a process running out of RAM and spending
all its time on memory management instead of actual work.

**Invented swap** would be automatic fine-grained context management — the system deciding
what to evict and reload without your intervention. Auto-compaction at 95% is a coarse
version of this. True swap hasn't been invented yet for LLMs; you're still writing
overlays by hand.

## Skills as Shared Libraries

Skill descriptions = the symbol table. You know `libprettier.so` exists and what it
exports without loading it into memory. Full skill content only loads on invocation,
just as `dlopen()` loads the library when first called.

- `context: fork` = `fork()` — child process gets the skill content as its entire address
  space; the parent never sees intermediate allocations; result returned via IPC
- Skills not surviving `/compact` = dynamic linker's symbol table wiped on GC; you have
  to re-link if you need them again
- `disable-model-invocation: true` = a private symbol — visible to you, not exported

## Subagents as Forked Processes

Each subagent gets its own context window (address space). The parent process never
shares memory directly — results come back via IPC (the summary returned to the main
conversation).

- `maxTurns` = `ulimit` on process execution
- `permissionMode: acceptEdits` = process running with elevated but scoped privileges
- `memory: project` = a process that writes to a shared filesystem between runs
- `background: true` = `fork()` + `disown` — fire and forget
- `isolation: worktree` = process gets its own copy-on-write filesystem view

## Hooks as eBPF / seccomp

Hooks run **outside the process** being observed. They cannot be bypassed by the model
regardless of what it reasons or decides. This is the only truly deterministic layer
in Claude Code — everything else (CLAUDE.md, skills, subagents) shapes probabilistic
behavior; hooks enforce it at the harness level.

The four roles:

| Role | Hook event | OS equivalent |
|---|---|---|
| **Enforcer** | `PreToolUse` deny | seccomp filter — syscall blocked before execution |
| **Preprocessor** | `PreToolUse` updatedInput | eBPF rewrite — modify syscall args before kernel sees them |
| **Observer** | `PostToolUse` async | eBPF probe on return — audit log, no control |
| **Watchdog** | `Stop` | hardware watchdog timer — fires when CPU tries to halt |
| **Interceptor** | `PermissionRequest` | ptrace — parent process intercepts child's syscall for approval |

Scoped hooks in skills/agents = mounting an eBPF program for the lifetime of a
container, automatically detached when the container exits.

The `Stop` hook infinite loop guard (`stop_hook_active` check) is your watchdog ISR
re-entrancy guard — without it, the watchdog fires, triggers another turn, which
completes, fires the watchdog again, infinitely.

## Hook Ordering Implication

Two independent `PostToolUse` hooks (e.g. prettier + eslint) are two separate eBPF
probes on the same syscall return: don't assume scheduling order. Collapse them into
one hook script that runs prettier then eslint sequentially — deterministic order,
eslint sees the already-formatted file.
