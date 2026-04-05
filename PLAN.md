# LLM Knowledge Base - Implementation Plan

## Context
Build a personal LLM knowledge base system as a Claude Code companion. Starting with a Zotero-exported BibTeX library (76 entries, 62 PDFs) about engineering/geothermal topics. The system ingests raw sources into structured markdown, maintains navigable indices, and exposes everything via MCP so any Claude Code session can query the knowledge base.

## Decisions Made
- **Primary use**: Claude Code companion (quick lookups, domain context while coding)
- **Scope**: Multi-domain, single instance (Eavor engineering first, other domains later)
- **Viewing**: Markdown-first (not Obsidian-specific)
- **PDF extraction**: LLM-powered via background agents (Phase 2)
- **Chunking**: By paper sections, chunks inherit parent tags + can add section-specific tags
- **Tag assignment**: Rough heuristic auto-tags in Phase 1; LLM propose/approve in Phase 2
- **Tag namespacing**: Domain prefixes from day 1 (e.g., `engineering/beam-theory`)
- **MCP server**: Always registered (global settings.json), many granular tools, only called when needed
- **Tag review**: Interactive in Claude (Claude proposes, you approve in chat)
- **Wiki compilation**: Phase 2
- **Search**: Tag + keyword matching (no vectors/embeddings)
- **Language**: TypeScript MCP server + Python processing tools
- **Phase 1 scope**: Minimal viable — BibTeX ingest + metadata source records + indices + MCP

## Architecture

```
knowledge-base/
  package.json
  tsconfig.json
  src/                          # TypeScript MCP server + core logic
    index.ts                    # MCP server entry point
    cli.ts                      # CLI entry point (ingest, index commands)
    ingest/
      types.ts                  # SourceRecord, Ingester interfaces
      bibtex.ts                 # BibTeX parser + PDF linker
      registry.ts               # Ingester registry (extensible)
      heuristic-tagger.ts       # Keyword-based tag assignment
    index-gen/
      index-generator.ts        # Reads sources, writes all index files
    tools/                      # MCP tool definitions
      search.ts                 # kb_search — tag + keyword matching
      read.ts                   # kb_read_source, kb_read_index
      ingest.ts                 # kb_ingest — trigger ingestion
      extract.ts                # kb_extract — PDF extraction (Phase 2)
      compile.ts                # kb_compile — wiki compilation (Phase 2)
      lint.ts                   # kb_lint — health checks (Phase 3)
    util/
      frontmatter.ts            # YAML frontmatter parse/serialize
      slug.ts                   # Filename slugification
  scripts/                      # Python processing tools (Phase 2)
    extract_pdf.py              # LLM-powered PDF extraction
  kb/                           # The knowledge base (markdown files)
    raw/
      sources/                  # One .md per source (frontmatter + abstract)
      pdfs/                     # Copied PDFs with normalized names
    content/                    # Extracted full text (Phase 2)
      {source-id}/
        section-1.md
        section-2.md
    wiki/                       # LLM-compiled concept articles (Phase 2)
    index/
      README.md                 # Master index (entry point for LLMs)
      by-tag.md                 # Sources grouped by tag
      by-author.md              # Sources grouped by author
      by-year.md                # Sources grouped by year
```

## Source Record Schema

Each source in `kb/raw/sources/` has this frontmatter:

```yaml
---
id: "ahmed-euler-bernoulli-nodate"
type: "article"                         # article | book | inproceedings | thesis | misc
title: "Euler-Bernoulli and Timoshenko Beam Theories..."
authors:
  - family: "Ahmed"
    given: "Abdarrhim M"
year: null
date: null
journal: null
doi: "10.xxxx/yyyy"
url: "https://..."
tags:
  - "engineering/beam-theory"
  - "engineering/finite-element-method"
domain: "engineering"
abstract: "..."
has_pdf: true
pdf_path: "raw/pdfs/ahmed-nodate-euler-bernoulli.pdf"
cite_key: "ahmed_euler-bernoulli_nodate"
source_format: "bibtex"
ingested_at: "2026-04-04T12:00:00Z"
---

## Summary
(Abstract or brief description)

## Related Sources
(Wikilinks to related sources, populated during indexing)
```

## MCP Tools (Phase 1)

| Tool | Input | Behavior |
|------|-------|----------|
| `kb_search` | `{ query, tags?, author?, year?, limit? }` | Tag + keyword match across source metadata. Returns matching source summaries. |
| `kb_read_source` | `{ id }` | Returns full markdown of a source record. |
| `kb_read_index` | `{ index: "master" \| "by-tag" \| "by-author" \| "by-year" }` | Returns content of an index file. |
| `kb_list_tags` | `{}` | Returns all tags with source counts. |
| `kb_ingest` | `{ sourcePath, format: "bibtex" }` | Runs ingestion pipeline, rebuilds indices. |

## Heuristic Tagger (Phase 1)

Keyword mapping from title + abstract to domain-prefixed tags. Approximate categories based on the Eavor library:

- `engineering/beam-theory` — Euler-Bernoulli, Timoshenko, Reissner, beam, vibration
- `engineering/finite-element-method` — FEA, finite element, mesh, shape function
- `engineering/coiled-tubing` — coiled tubing, CT, spooling, extended reach
- `engineering/composite-materials` — composite, laminate, filament, fiber, epoxy
- `engineering/drilling` — drilling, torque, drag, wellbore, drill string, BHA
- `engineering/geothermal` — geothermal, Eavor, closed-loop, LCOE, heat
- `engineering/fluid-mechanics` — flow, CFD, heat transfer, turbulence, pipe flow, Navier-Stokes
- `engineering/numerical-methods` — numerical, interpolation, data assimilation, IMU

Multiple tags per source. A source about "composite coiled tubing FEA" gets all three relevant tags.

## Phase 1 Implementation Steps

1. **Project scaffold** — `package.json`, `tsconfig.json`, directory structure
   - Deps: `@retorquere/bibtex-parser`, `@modelcontextprotocol/sdk`, `yaml`, `commander`
2. **Core types** — `src/ingest/types.ts` with readonly interfaces
3. **Frontmatter utilities** — `src/util/frontmatter.ts` parse/serialize
4. **Slug utility** — `src/util/slug.ts` for normalized filenames
5. **Heuristic tagger** — `src/ingest/heuristic-tagger.ts` keyword → tag mapping
6. **BibTeX ingester** — `src/ingest/bibtex.ts` parse .bib, extract metadata, copy PDFs, write source .md files
7. **Ingester registry** — `src/ingest/registry.ts` extensible registry pattern
8. **Index generator** — `src/index-gen/index-generator.ts` read sources, write index files
9. **MCP tools** — `src/tools/search.ts`, `read.ts`, `ingest.ts`
10. **MCP server** — `src/index.ts` wire tools together
11. **CLI** — `src/cli.ts` with `ingest` and `index` commands
12. **Register MCP** — Add to global `~/.claude/settings.json`
13. **Run initial ingest** — Process the Eavor library
14. **Verify** — Search via MCP, check indices, spot-check source records

## Phase 2 (later)
- PDF extraction via background agents (LLM reads PDFs, writes chunked markdown to `kb/content/`)
- LLM-powered tag assignment with interactive approve workflow
- Wiki concept article compilation
- `kb_extract`, `kb_compile`, `kb_read_wiki` MCP tools

## Phase 3 (later)
- Linter (broken links, orphan tags, missing PDFs, duplicates)
- Cross-reference mapping between sources
- Per-tag detail files

## Phase 4 (later)
- Additional ingesters (ArXiv, GitHub, plain PDF, web clipper)
- Output formats (Marp slides, visualizations)
- Full-text search upgrade (minisearch)

## Verification (Phase 1)
1. `npm run build` compiles without errors
2. `npm run ingest -- <path-to-bib>` produces ~74 source .md files in `kb/raw/sources/`
3. `kb/raw/pdfs/` contains ~62 PDFs with normalized names
4. `kb/index/README.md` shows correct source count and domain breakdown
5. `kb/index/by-tag.md` has all tags with linked sources
6. MCP server starts and `kb_search` returns results for query "beam theory"
7. `kb_read_source` returns a well-formed source record
8. `kb_read_index` returns each index file
