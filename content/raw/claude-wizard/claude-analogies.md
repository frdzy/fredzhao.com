# Claude Analogies

A multi-audience reference for understanding how Claude Code's primitives relate to each other.

**The Mainframe** = the computing analogy lens (20th century).
**The Wizarding Office** = the layperson analogy lens. Magic is real but unpredictable; muggles provide physical enforcement.

---

## Concepts (tl;dr)

**The players:**

| Concept in reality | The Mainframe | The Wizarding Office |
|---|---|---|
| **You (configurer)** | Sysadmin — writes startup config, controls access, wires up the batch system | The board — hires staff, writes SOPs, commissions the Goblin enchantments |
| **You (user)** | Terminal operator — connects via dumb terminal, submits jobs, receives output | Client — walks in with a task, hands it to the wizard |
| **Claude Code / Cursor / etc.** | The mainframe itself — CPU, storage, batch queue, I/O | The Wizarding Office — the whole building, staff, and magical infrastructure |
| **The LLM** | The CPU — fast, capable, small processor cache | The Forgetful Wizard — powerful magic, no memory between sessions, prone to confabulation (Lockhart) |
| **The Task** | Run the program with inputs, get its outputs | Commission: the wizard produces a document or takes an action — sometimes with unintended side effects |

**The primitives:**

| Concept in reality | The Mainframe | The Wizarding Office |
|---|---|---|
| **Context window** | Processor cache — without auto cache management, so the terminal operator needs to do this | The Wizard's Desk |
| **CLAUDE.md** | Operating instructions loaded at boot — shape every job without consuming cache | Permanent papers at the Forgetful Wizard's desk — survive when the desk is cleared |
| **Settings.json** | `.env` → `~/.gitconfig` → Group Policy (three tiers) | Team room rules → personal workspace → building code (three tiers) |
| **Skills** | Subroutine library — linked at load time, not at write time | Spell book — the incantation exists on the shelf; cast only when needed |
| **Subagents** | Full mainframe clone in a parallel dimension — own processor cache, own I/O; the clone cannot itself clone | Summoned duplicate of the Forgetful Wizard — full powers, own desk, cannot itself summon |
| **Hooks** | System call interceptors — user program triggers a call, the OS layer is automatically invoked | Standing enchantments — whenever the wizard takes a certain action, the Goblin layer is automatically invoked |
| **Scripts (aka Old School Code)** | OS kernel — runs with elevated privileges outside user programs, same result every time | Goblin enchantments — a different kind of old magic: specialized, deterministic, and resistant to wizard charms |

---

## Workflows (tl;dr)

| Concept in reality | The Mainframe | The Wizarding Office |
|---|---|---|
| **Context handoff** — plan files, memory/ | Checkpoint / hibernate — state written before shutdown | Shift briefing note written before the Forgetful Wizard's memory resets |
| **Knowledge sharing** — skills, memory | Personal macro vs. IT-distributed package | Personal spell notes vs. spell book issued to all wizards |
| **Agent loops** — Stop hooks, scheduled agents | Daemon / event loop — acts on triggers, repeats | Wizard has a standing brief: check the inbox, handle each commission, repeat |
| **Parallel execution** — multiple Agent calls | Fork-join — spawn child jobs, collect all results | Multiple summoned duplicates working simultaneously; original collects all reports |
| **Provider upgrades** — model versions | Better CPU / larger cache per generation | Professor Academy dispatches a new professor — better at reading more parchments with fewer synthesis errors |

---

## Nouns

### The LLM

The reasoning engine at the center of everything. All other primitives exist to feed it good inputs and manage what it can see.

- **(a) The Mainframe:** The CPU — fast, capable, everything else exists to serve it. Its one hard constraint: small processor cache. What fits in cache is what the CPU can work with right now.
- **(b) The Wizarding Office:** The Forgetful Wizard (Lockhart). Powerful magic, broad knowledge, capable of remarkable things — but no memory between sessions. Works brilliantly within a session. Prone to confabulation: will sometimes state things with full confidence that turn out to be wrong. Everything needed must be on the desk or in the reference system before the session starts.

---

### The Task

What The Mainframe / The Wizarding Office is being run to accomplish. Everything else — cache management, spell books, summoned duplicates, Goblin enchantments — exists to ensure the Task gets done well.

- **(a) The Mainframe:** Run the program with inputs, get its outputs. Output is either a return value (a file written, a record updated) or a side effect (a print job sent, an API called, an email delivered). Tasks can complete cleanly, error out, or be abandoned mid-run.
- **(b) The Wizarding Office:** A commission handed to the Forgetful Wizard. Resolved by producing a document or taking an action in the world. Sometimes the spell has unintended side effects — not failures, just magic behaving in ways the client didn't fully anticipate.

---

### Context Window

Everything the LLM can actively reason over at once.

- **(a) The Mainframe:** Processor cache — small, fast memory directly adjacent to the CPU. Unlike RAM (the whole running program) or disk (long-term storage), the cache only holds what the CPU is actively computing with. Key difference from real processor cache: hardware normally manages cache eviction automatically. For LLMs today, the terminal operator does this by hand.
- **(b) The Wizarding Office:** The Wizard's Desk. Everything on it is in active use. For reasons nobody in the wizarding world has ever explained, the desk cannot be enlarged — not by Undetectable Extension Charms, not by anything. The wizard must personally read and synthesize every parchment on it before casting; attention is the bottleneck, not power. When the desk fills, synthesis errors creep in — instructions from different parchments blur together, and the spell fires with false confidence.

| Technique | The Mainframe | The Wizarding Office |
|---|---|---|
| Keep context lean | Minimize cache footprint | File what's not in active use; keep the desk clear |
| `/compact` | Compress cache in place — lossy, like a JPEG; detail lost, shape preserved | Condense current notes into a summary; originals discarded; the summary stays on the desk |
| Plan files | Intentional checkpoint — you write the essential state and what comes next | Wizard writes a briefing for the next session before the desk is cleared; captures *why*, not just *what* |
| `/clear` | Full cache flush | New session, fresh desk |
| 80%+ full ("dumb zone") | Thrashing — CPU stalls managing evictions instead of computing | Synthesis errors: parchments blur together, spells fire with false confidence |

> **`/compact` vs. plan files:** Both compress. `/compact` is automated and lossy — the system summarizes what it can. A plan file is authored — you choose what to preserve, and you can capture intent, not just history. Plan files are better input for the *next* session; `/compact` is better for continuing *this* one.

---

### CLAUDE.md / Rules

Configuration that loads at the start of every session, before any work begins. Does not consume cache.

- **(a) The Mainframe:** Operating instructions loaded at boot — they initialize before any job runs and shape every session without occupying processor cache.
- **(b) The Wizarding Office:** Permanent papers pinned above the Forgetful Wizard's desk, not on it. The desk gets cleared between sessions; these survive. Not re-read with each commission, but structurally present in every decision.

---

### Settings.json — Workspace Configuration

Configures the workspace: which tools are available, what hooks are wired up, what behaviors are on or off by default. Three tiers, each scoping more broadly:

| Tier | File | The Mainframe | The Wizarding Office |
|---|---|---|---|
| Project | `.claude/settings.json` in repo | `.env` / `package.json` — travels with the codebase | Rules of this particular office room |
| User | `~/.claude/settings.json` | `~/.gitconfig` — your personal environment across all projects | How the wizard arranges their own workspace |
| Enterprise | App support / MDM layer | Group Policy / MDM profiles — org-wide | Building code: structural rules that apply to the whole office |

> **Caveat:** Building code configures but doesn't physically enforce. Enterprise settings set defaults that rely on the harness being invoked with those settings loaded. See Deterministic Code for what enforcement actually looks like — and its limits.

---

### Skills

Reusable instructions Claude can invoke on demand. One-line descriptions stay in context at all times; full content loads only when called.

- **(a) The Mainframe:** A subroutine library — reusable code that programs link to at load time, not at write time. You know the library exists and what it exports without loading it into cache. Provenance matters: a corrupted subroutine library was a classic attack vector — a skill from an untrusted source runs inside the LLM's reasoning process with the same risk profile.
- **(b) The Wizarding Office:** A spell book on the shelf. The Forgetful Wizard doesn't hold every incantation in memory — the book exists and is pulled down only when casting that type of spell. The title on the spine is always visible; the pages load only on use.

> **The description vs. content distinction:** The one-line skill description stays in context at all times — like reading the spine of the spell book without opening it. Full content loads only on invocation. This is how you keep the desk clear without losing access to the spells.

---

### Subagents

Full clones of The Mainframe (or Wizarding Office) that run in a parallel dimension, do work independently, and return only their result.

- **(a) The Mainframe:** The mainframe clones itself sideways into a parallel dimension — a full copy with its own processor cache, its own I/O, its own batch queue. Unlike a remote procedure call (handing work to a *different* mainframe), this is the same mainframe replicating. The clone runs its job; the original never sees intermediate state; only the output crosses back. One hard constraint: the clone cannot itself clone. The parallel dimension is one level deep.
- **(b) The Wizarding Office:** The Forgetful Wizard summons a duplicate of themselves — full powers, own desk, own spell books. The duplicate works the commission independently. The original receives the written report at the end. Neither wizard's desk is cluttered by the other's work. The duplicate cannot itself summon — no recursive conjuring.

> **The underappreciated reason to use subagents:** People reach for them for parallelism. The more important reason is *cache hygiene*. All the verbose intermediate steps — tool calls, trial-and-error, dead ends — live in the clone's cache, not yours. Only the result crosses back.

---

### Hooks

Event bindings that watch Claude's actions and automatically invoke scripts when triggered. The hook is the trigger, not the enforcement — see Scripts (aka Old School Code) below.

- **(a) The Mainframe:** System call interceptors — when a user program makes a system call, the OS layer is automatically invoked before or after execution. The program cannot opt out.
- **(b) The Wizarding Office:** Standing enchantments — whenever the Forgetful Wizard performs a specific action, the Goblin layer is automatically triggered. The wizard doesn't choose whether the enchantment fires; it fires because it was set up that way.

| Hook event | What it does | The Mainframe | The Wizarding Office |
|---|---|---|---|
| `PreToolUse` (block) | Prevent before execution | System call rejected by the OS | Enchantment cancels the spell |
| `PreToolUse` (modify) | Rewrite before execution | OS rewrites the syscall args | Enchantment adjusts the spell before it lands |
| `PostToolUse` | Observe after execution | Syscall audit log | Enchantment records what the wizard did |
| `Stop` | Fire when Claude halts | Hardware watchdog timer | Enchantment triggers when the wizard tries to rest |

---

### Scripts (aka Old School Code)

The program that hooks invoke. Runs identically every time, regardless of what the LLM reasons or decides.

- **(a) The Mainframe:** The OS kernel — runs with elevated privileges outside user programs. When a system call fires, the kernel handles it the same way every time. User programs cannot modify kernel behavior from within their own execution.
- **(b) The Wizarding Office:** Goblin enchantments — a *different kind of magic*, not an absence of it. Where wizard magic is flexible and nuanced, Goblin enchantments are vault-grade: they do exactly what they were commissioned to do. Resistant to casual wizard charms; altering them requires significant deliberate effort and negotiation.

> **The three levels of enforcement:**
> 1. *Settings* — "configured to refuse" — the wizard agreed to the rules; they could choose otherwise
> 2. *Hooks + Deterministic Code* — "Goblin enchantment triggers automatically" — fires regardless of what the wizard decides in the moment, but a sufficiently determined wizard can renegotiate the enchantment
> 3. *True vault lock* — "the door does not open" — machine-level enforcement that cannot be renegotiated from within; doesn't fully exist in Claude Code yet
>
> Hooks + Deterministic Code are often treated as level 3. They're not. They're level 2: very strong, but ultimately commissioned by the same entity they constrain. The vault lock hasn't been built yet.

---

## Verbs

### Context Handoff

What survives the boundary between sessions. The Forgetful Wizard's desk gets cleared; the mainframe shuts down. Without deliberate action, the next session starts from nothing — same powers, no memory of what came before.

- **(a) The Mainframe:** Checkpoint / hibernate — before shutdown, the operator serializes the essential working state to disk. Not a full memory dump; a curated snapshot of what the next boot needs to resume meaningfully. The difference between a clean restart and starting over.
- **(b) The Wizarding Office:** A shift briefing note written before the desk is cleared. Not a transcript of everything that happened — a note capturing *why* things are in the state they're in, what the incoming wizard needs to know to pick up the commission without losing the thread.

> **Plan files vs. memory/:** Both persist across sessions, but differently. A plan file is forward-looking and authored — you choose what to preserve, including intent and rationale. The memory/ system is backward-looking and accumulated — facts, preferences, and context that build up over time. Plan files are for *this task*; memory/ is for *this working relationship*. The shift briefing note is a plan file. The wizard's knowledge of how the client likes their reports formatted is memory/.

---

### Knowledge Sharing

The difference between knowledge that belongs to one wizard and knowledge that belongs to the whole office. Both are real skills — the question is whether they've been institutionalized.

- **(a) The Mainframe:** A personal shell alias in `~/.bashrc` vs. a shared library packaged and deployed to every machine by IT. The alias works just as well; it just doesn't exist anywhere else. Distributing it requires deliberate packaging and rollout.
- **(b) The Wizarding Office:** Personal spell notes scribbled in your own notebook vs. a spell in the standard-issue spell book. Sectumsempra was a real spell — powerful, effective, invented by one wizard and never distributed. The Half-Blood Prince's copy of Advanced Potion-Making was the only place it existed. Had he never shared the book, the spell dies with him. A spell in the standard-issue book is available to every wizard from day one, tested, and understood by all.

---

### Agent Loops

Running not for a single commission but on a standing brief. The wizard doesn't complete a task and leave — they complete a task, and something prevents them from leaving, handing them the next one.

- **(a) The Mainframe:** A daemon or event loop — the process stays resident, waits on a trigger, handles whatever arrives, then waits again. It doesn't terminate when the work is done; termination is the exception, not the default. The watchdog timer ensures that even an attempt to halt fires a handler first.
- **(b) The Wizarding Office:** The Forgetful Wizard is given a standing brief: check the inbox, handle each commission in turn, repeat. Each time they finish and move toward the door, the enchantment at the threshold stops them, presses the next envelope into their hands, and sends them back to the desk. The loop ends only when the inbox is empty and no new commissions arrive before the enchantment times out.

---

### Provider Upgrades

The periodic arrival of a better wizard. Each new professor dispatched by the Professor Academy can read more parchments simultaneously and make fewer synthesis errors — but the parchments themselves keep proliferating.

- **(a) The Mainframe:** A better CPU with a larger cache per generation — faster, wider, more instruction-level parallelism. The programs don't change; the hardware gets better at running them.
- **(b) The Wizarding Office:** The Professor Academy trains and dispatches professors of the Forgetful Wizard type — each generation more capable than the last. The desk is still inexplicably fixed in size, but each new professor can hold more of what's on it in active attention at once, and makes fewer errors when synthesizing conflicting parchments. The Academy is gaining. But the commissions keep growing longer, the reference parchments keep multiplying, and the memory files keep accumulating. It is a race, and it does not end.

---

### Parallel Execution

Splitting a task across multiple simultaneous subagents and collecting the results. The speed benefit is real but secondary — the more important reason is that each clone's intermediate mess stays in its own context, not yours.

- **(a) The Mainframe:** Fork-join — the parent process spawns multiple child jobs, each running independently in its own address space. The parent blocks until all children return, then merges results. The parent never shares memory with the children; all communication is the final output passed back through IPC.
- **(b) The Wizarding Office:** The Forgetful Wizard summons three duplicates simultaneously and hands each a separate commission. Each works at their own desk — their own pile of notes, their own false starts, their own desk covered in intermediate parchment. The original wizard waits. Three written reports arrive. The original synthesizes them into a single answer, having never seen the intermediate chaos. The desk stays clear.
