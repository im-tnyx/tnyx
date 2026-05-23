# MONOREPO_STRUCTURE

This document defines the initial scalable folder strategy for TNYX.

## Goals

- Keep platform code isolated by ownership
- Maximize shared logic through stable packages
- Prevent contract drift across mobile, backend, web, and admin
- Support long-term maintainability and team parallelism

## Top-Level Structure

```txt
apps/
  mobile/                 # React Native (Expo) user app
  watch/                  # Wear OS companion experiences
  web/                    # Next.js user dashboard and public pages
  admin/                  # Next.js admin and operations surface
  backend/                # API and orchestration layer

packages/
  contracts/              # DTOs, route contracts, envelopes, zod schemas, shared events
  ui/                     # Shared React UI primitives for web/admin
  api-client/             # Typed client built from shared contracts
  config/                 # Non-secret shared configuration
  utils/                  # Platform-neutral utility functions
  analytics/              # Shared analytics abstractions/events
  health-sync/            # Health platform sync contracts/adapters
  nutrition-engine/       # Nutrition domain modeling and helpers
  workout-engine/         # Workout programming domain helpers

docs/
  PROMPTS/                # AI agent prompt guardrails
  *.md                    # Architecture, standards, strategy docs

infra/
  docker/                 # Container definitions and local infra support
  ci/                     # CI/CD templates and pipeline assets

database/
  migrations/             # Reproducible PostgreSQL/Supabase migrations
  rls/                    # RLS policies and supporting SQL
  rpc/                    # Hardened RPC functions
  seeds/                  # Non-sensitive seed/reference data
  scripts/                # Database-focused automation only

scripts/
  repo/                   # Repository automation (validation, checks, helpers)
```

## Ownership Rules (Short Form)

- `apps/backend`:
  - `routes/` path registration only
  - `controllers/` HTTP translation only
  - business logic in `services/` and use-cases
  - DB access only in `repositories/`
- `apps/mobile` and `apps/watch`:
  - UI should remain presentation-focused
  - domain/business logic should stay outside screen layer
- `packages/contracts`:
  - single source of truth for cross-platform payloads
- `database/`:
  - all schema/RLS/RPC work must be migration-driven

## Contract Strategy

All cross-platform APIs and events must originate in `packages/contracts`.

Required principles:

- version-safe schema evolution
- additive changes first
- runtime validation via `zod`
- no platform-specific payload forks unless documented and approved

## Mobile & Watch Architecture Alignment

For mobile and watch UI flows, follow:

`Route -> Screen -> ViewModel -> UiState + Action -> UseCase -> Repository -> Data Source`

Practical implications:

- Screens are dumb and stateless by design
- Typed actions for all interactions
- No business logic or side effects inside composables/screens

## Backend Layering

Mandatory separation for maintainable API growth:

`Route -> Controller -> Service/UseCase -> Repository -> Database/RPC`

Additional rules:

- service-role credentials remain server-only
- idempotent mutation handling where retries are possible
- thin controllers, rich domain services

## Folder Naming Conventions

- Use `kebab-case` for folders
- Use explicit domain names (`nutrition`, `workout`, `recovery`, `auth`)
- Avoid generic folders like `common2`, `new`, `temp`, or `misc`

## File Naming Conventions

- Prefer `feature.action.ts` or `feature.entity.ts` in backend domain code
- Prefer `FeatureScreen.tsx`, `FeatureViewModel.ts`, `FeatureUiState.ts` in UI stacks
- Tests should co-locate with domain/module responsibility where practical

## Non-Goals (Current Phase)

- No early over-fragmentation into microservices
- No direct client mutation into privileged tables
- No bypass of shared contract layer for speed

## Initial Setup Sequence

1. Finalize docs and prompt guardrails
2. Scaffold `apps/` and `packages/`
3. Define `packages/contracts` baseline envelopes
4. Build mobile design system and navigation shell
5. Add mock-driven feature slices before backend wiring
