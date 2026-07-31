# Sitemap

## Structure decision

**One scrolling homepage (hub) + one standalone detail page per project (leaf).**
Not a traditional multi-page site (no separate About / Contact / Blog pages, no
multi-item primary nav) and not a pure single-page site either, because the
brief asks for peer-level technical depth per project that a homepage card
cannot hold without turning the scroll into a wall of text.

Justification (see `research.md` §2 for sourcing):
- Small, curated project count → single scrolling index is the lowest-friction
  way to see everything, especially on mobile where nav chrome is a cost.
- Peer/technical audience wants depth on individual projects (architecture,
  constraints, what a "systems"-flavored project vs. a "field"-flavored project
  actually involved) → that depth belongs on its own page, not compressed into
  a card.
- No About/Contact/Blog per explicit user instruction → nothing else justifies
  multi-page nav complexity.
- All project detail pages share one template/content model, so this stays
  cheap to build and maintain even though it's technically "multiple pages."

Every project card on the homepage links to `/projects/{slug}.html`. There is no
separate index page for projects — the homepage grid *is* the index.

**Current state** (see `homepage-mockup.html`): two real `FIELD`-tagged
entries populate the grid so far —
`/projects/teacher-training-kavango-west.html` (teacher training programme,
Kavango West, Namibia) and `/projects/don-bosco-preincubation.html` (business
pre-incubation programme, Don Bosco Youth Centre). Neither detail page has
been written yet. IT/systems-tagged entries will be added once that project
content is ready; nothing about the structure above needs to change to
accommodate them.

## Homepage (`index.html`) — top to bottom

1. **Header (wayfinding, not a section)** — persistent, minimal. Name/short
   identifier on the left, single email/contact link (and optionally one or two
   profile links — e.g. GitHub, LinkedIn) on the right. No nav menu needed since
   there's only one page to jump to; header may include a single "Work" anchor
   link back to the project index for use from a scrolled position.
2. **Intro strip** — 2–3 sentences max. Not an "About" section — just enough
   framing (who this is, the two threads of work in one sentence) so the project
   grid that follows makes sense to a stranger. No headshot required; text only,
   consistent with typography-led minimal direction.
3. **Work index** — the core of the page. A single unified grid/list of project
   entries, chronological or otherwise curated (not visually split into two
   tracks — see `research.md` §1). Each entry: title, one-line description, a
   small domain tag (e.g. "Systems" / "Field" / "Data" — exact taxonomy is the
   implementer's/user's call, kept small and consistent), a location+year
   metadata line, and a link through to the project's detail page. See
   `layout.md` for card composition.
4. **Footer (wayfinding, not a section)** — email link repeated, optional
   secondary profile links, copyright/year. Deliberately terse — one or two
   lines, not a mini-sitemap.

## Project detail page (`projects/{slug}.html`) — top to bottom, per project

1. **Back-to-work link** — small, top-left, returns to `index.html#work`.
2. **Project header** — title, domain tag, location/year/role metadata.
3. **Body** — free-form technical write-up: problem, constraints, what was
   built, decisions/trade-offs, outcome. Length and structure vary by project;
   no rigid sub-section requirement beyond "problem → approach → outcome" as a
   loose default, since forcing an identical rigid template onto both an IT
   systems project and a Peace Corps field project is where a two-track feeling
   would creep back in.
4. **Media/artifacts** (optional, per project) — screenshots, diagrams,
   photos — only where the project actually has them; not a mandatory slot.
5. **Footer** — same minimal footer as homepage, for consistency and so a
   visitor who lands on a project page via search/share still has a way to
   reach the person.

## Explicitly out of scope

No About page, no Contact page, no Blog/Writing section, no testimonials
section, no separate "Peace Corps" or "Tech" landing pages. If the user wants
any of these later, they are additive — this structure doesn't need to change
to accommodate them.
