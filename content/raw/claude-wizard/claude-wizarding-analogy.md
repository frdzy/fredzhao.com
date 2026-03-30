# Claude Code as a Wizarding Office

A mental model for understanding how Claude Code's primitives relate to each other — told entirely through the lens of a magical institution.

---

## The Setting

Somewhere in the wizarding world there is an office. It handles commissions: clients walk in with tasks, the office produces documents or takes actions in the world. The office has staff, infrastructure, spell books, and a layer of Goblin enchantments that enforce certain rules regardless of what anyone else decides.

At the center of the office is the **Forgetful Wizard** — a figure of remarkable power and broad knowledge, capable of extraordinary things within a session. The catch: no memory between sessions. The desk gets cleared, and the wizard starts fresh. Prone to confabulation: will sometimes state things with full confidence that turn out to be wrong. Everything needed must be on the desk or in the reference system before the session starts.

---

## The Players

| Role | The Wizarding Office |
|---|---|
| **You (configurer)** | The board — hires staff, writes SOPs, commissions the Goblin enchantments |
| **You (user)** | Client — walks in with a task, hands it to the wizard |
| **Claude Code / Cursor / etc.** | The Wizarding Office — the whole building, staff, and magical infrastructure |
| **The LLM** | The Forgetful Wizard — powerful magic, no memory between sessions, prone to confabulation |
| **The Task** | A commission: the wizard produces a document or takes an action — sometimes with unintended side effects |

---

## The Primitives

### The Forgetful Wizard

Powerful magic, broad knowledge, capable of remarkable things — but no memory between sessions. Works brilliantly within a session. Prone to confabulation: will sometimes state things with full confidence that turn out to be wrong. Everything needed must be on the desk or in the reference system before the session starts.

---

### The Wizard's Desk

Everything on the desk is in active use. The wizard must personally read and synthesize every parchment on it before casting; **attention is the bottleneck, not power**.

For reasons nobody in the wizarding world has ever explained, the desk cannot be enlarged — not by Undetectable Extension Charms, not by anything. When the desk fills, synthesis errors creep in: instructions from different parchments blur together, and the spell fires with false confidence. The danger isn't that the wizard stops working. It's that they keep working, wrongly, and can't tell.

| Technique | The Wizarding Office |
|---|---|
| Keep context lean | File what's not in active use; keep the desk clear |
| `/compact` | Condense current parchments into a summary; originals discarded; the summary stays on the desk |
| Plan files | Wizard writes a briefing for the next session before the desk is cleared; captures *why*, not just *what* |
| `/clear` | New session, fresh desk |
| 80%+ full ("dumb zone") | Synthesis errors: parchments blur together, spells fire with false confidence |

> **`/compact` vs. plan files:** Both compress. `/compact` is automated and lossy — the system summarizes what it can. A plan file is authored — you choose what to preserve, and you can capture intent, not just history. Plan files are better input for the *next* session; `/compact` is better for continuing *this* one.

---

### Permanent Papers (CLAUDE.md / Rules)

Permanent papers pinned above the Forgetful Wizard's desk, not on it. The desk gets cleared between sessions; these survive. Not re-read with each commission, but structurally present in every decision.

---

### Office Rules (Settings.json)

| Tier | The Wizarding Office |
|---|---|
| Project | Rules of this particular office room |
| User | How the wizard arranges their own workspace |
| Enterprise | Building code: structural rules that apply to the whole office |

> Building code configures but doesn't physically enforce. See Goblin Enchantments for what enforcement actually looks like — and its limits.

---

### The Spell Book (Skills)

A spell book on the shelf. The Forgetful Wizard doesn't hold every incantation in memory — the book exists and is pulled down only when casting that type of spell. The title on the spine is always visible; the pages load only on use.

> **The spine vs. the pages:** The one-line skill description stays in the wizard's awareness at all times — like reading the spine without opening the book. Full content loads only on invocation. This is how you keep the desk clear without losing access to the spells.

---

### Summoned Duplicates (Subagents)

The Forgetful Wizard summons a duplicate of themselves — full powers, own desk, own spell books. The duplicate works the commission independently. The original receives the written report at the end. Neither wizard's desk is cluttered by the other's work. The duplicate cannot itself summon — no recursive conjuring.

> **The underappreciated reason to summon:** People reach for duplicates for speed. The more important reason is *desk hygiene*. All the verbose intermediate work — false starts, dead ends, parchments consulted and discarded — lives on the duplicate's desk, not yours. Only the result crosses back.

---

### Standing Enchantments (Hooks)

Whenever the Forgetful Wizard performs a specific action, the Goblin layer is automatically triggered. The wizard doesn't choose whether the enchantment fires; it fires because it was set up that way.

| Hook event | The Wizarding Office |
|---|---|
| `PreToolUse` (block) | Enchantment cancels the spell before it lands |
| `PreToolUse` (modify) | Enchantment adjusts the spell before it lands |
| `PostToolUse` | Enchantment records what the wizard did |
| `Stop` | Enchantment triggers when the wizard tries to rest |

---

### Goblin Enchantments (Scripts / Deterministic Code)

A *different kind of magic*, not an absence of it. Where wizard magic is flexible and nuanced, Goblin enchantments are vault-grade: they do exactly what they were commissioned to do. Resistant to casual wizard charms; altering them requires significant deliberate effort and negotiation.

> **The three levels of enforcement:**
> 1. *Office rules* — "configured to refuse" — the wizard agreed to the rules; they could choose otherwise
> 2. *Standing enchantments + Goblin layer* — fires regardless of what the wizard decides in the moment, but a sufficiently determined wizard can renegotiate the enchantment
> 3. *True vault lock* — "the door does not open" — enforcement that cannot be renegotiated from within; doesn't fully exist in Claude Code yet
>
> Standing enchantments are often treated as level 3. They're not. They're level 2: very strong, but ultimately commissioned by the same entity they constrain. The vault lock hasn't been built yet.

---

## Workflows

### Context Handoff

What survives the boundary between sessions. The Forgetful Wizard's desk gets cleared. Without deliberate action, the next session starts from nothing — same powers, no memory of what came before.

A shift briefing note written before the desk is cleared. Not a transcript of everything that happened — a note capturing *why* things are in the state they're in, what the incoming wizard needs to know to pick up the commission without losing the thread.

> **Plan files vs. memory/:** A plan file is forward-looking and authored — you choose what to preserve, including intent and rationale. The memory/ system is backward-looking and accumulated — facts, preferences, and context that build up over time. Plan files are for *this task*; memory/ is for *this working relationship*. The shift briefing note is a plan file. The wizard's knowledge of how the client likes their reports formatted is memory/.

---

### Knowledge Sharing

The difference between knowledge that belongs to one wizard and knowledge that belongs to the whole office. Both are real skills — the question is whether they've been institutionalized.

Personal spell notes scribbled in your own notebook vs. a spell in the standard-issue spell book. Sectumsempra was a real spell — powerful, effective, invented by one wizard and never distributed. The Half-Blood Prince's copy of *Advanced Potion-Making* was the only place it existed. Had he never shared the book, the spell dies with him. A spell in the standard-issue book is available to every wizard from day one, tested, and understood by all.

---

### Agent Loops

Running not for a single commission but on a standing brief. The wizard doesn't complete a task and leave — they complete a task, and something prevents them from leaving, handing them the next one.

The Forgetful Wizard is given a standing brief: check the inbox, handle each commission in turn, repeat. Each time they finish and move toward the door, the enchantment at the threshold stops them, presses the next envelope into their hands, and sends them back to the desk. The loop ends only when the inbox is empty and no new commissions arrive before the enchantment times out.

---

### Provider Upgrades

The periodic arrival of a better wizard. The Professor Academy trains and dispatches professors of the Forgetful Wizard type — each generation more capable than the last. Each new professor can hold more of what's on the desk in active attention at once, and makes fewer errors when synthesizing conflicting parchments.

The desk is still inexplicably fixed in size. But the Academy is gaining. The commissions keep growing longer, the reference parchments keep multiplying, and the memory files keep accumulating. It is a race, and it does not end.

---

### Parallel Execution

Splitting a commission across multiple simultaneous duplicates and collecting the results. The speed benefit is real but secondary — the more important reason is that each duplicate's intermediate mess stays on their own desk, not yours.

The Forgetful Wizard summons three duplicates simultaneously and hands each a separate commission. Each works at their own desk — their own pile of notes, their own false starts, their own desk covered in intermediate parchment. The original wizard waits. Three written reports arrive. The original synthesizes them into a single answer, having never seen the intermediate chaos. The desk stays clear.
