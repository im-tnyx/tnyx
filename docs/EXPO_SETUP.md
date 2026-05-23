# TNYX Expo Setup (v0.1 UI Foundation)

This document defines the Expo project setup contract for TNYX v0.1.

Scope:

- Android-first UI shell
- mock data only
- no backend integration
- no API wiring
- no auth implementation
- no persistence layer

## Execution Alignment

- This setup contract applies to Milestone A (UI Foundation) in `MASTER_EXECUTION_PLAN.md`.
- Keep `apps/mobile` as the active implementation surface in this phase.
- Conflict priority:
  `MASTER_EXECUTION_PLAN -> FEATURE_ROADMAP -> this document`.

## 1) Setup Goals

The setup must ensure:

- fast UI iteration
- predictable folder boundaries
- tokenized styling
- reusable component workflows
- smooth animation baseline

## 2) Required Stack

- Expo (React Native)
- TypeScript
- Expo Router
- NativeWind
- Tamagui
- React Native Reanimated
- Zustand (UI-local temporary state only)
- React Query package may exist but do not wire real API clients in v0.1

## 3) Phase Constraints (Hard Rules)

During v0.1:

- do not add backend clients
- do not add Supabase/Firebase integration
- do not implement authentication services
- do not add production persistence (MMKV/WatermelonDB/etc.)
- do not add watch app runtime in this phase

## 4) Initial App Scope

Create only:

- app shell
- navigation structure
- core reusable components
- mock data modules
- first priority screens

## 5) Folder Structure (Current Phase)

```txt
apps/mobile/
  app/
  components/
    ui/
    composite/
    layouts/
  features/
    auth/
    onboarding/
    workout/
    nutrition/
    ai/
    analytics/
    recovery/
    profile/
  theme/
    tokens/
    presets/
  mock/
  hooks/
  store/
  types/
  constants/
```

## 6) Navigation Setup Rules

- implement route groups exactly per `NAVIGATION_STRUCTURE.md`
- keep tab count at maximum 5
- wire route names to screen inventory identifiers
- no hidden duplicate routes

## 7) Theme & Token Integration Rules

Must map from `DESIGN_TOKENS.md`:

- colors
- spacing
- typography
- radius
- elevation
- motion presets

Rules:

- no hardcoded hex in screen files
- no arbitrary spacing values
- no component-level token duplication

## 8) Component Setup Rules

Follow `COMPONENT_ARCHITECTURE.md` strictly:

- build primitives first
- then composites
- then layouts
- then feature sections
- screens compose only from approved layers

## 9) Mock Data Rules

Mock data must:

- reflect realistic athlete patterns
- include edge states for loading/empty/error
- stay isolated in `mock/`

Rules:

- do not embed large mock payloads directly inside screen files

## 10) Animation Setup Rules

Motion behavior must follow `ANIMATION_GUIDELINES.md`:

- tokenized durations and spring presets
- immediate interaction feedback
- 60fps target

## 11) Quality Checklist Before Screen Build

Before implementing any screen:

1. route exists in navigation doc
2. screen exists in screen inventory
3. required states are defined
4. component dependencies are available
5. token usage path is clear

## 12) Out of Scope (Until v0.2+)

- backend orchestration
- API contracts wiring
- remote auth
- push notifications
- payment flows
- wearable sync
- analytics SDK wiring

## 13) Deliverable Target

v0.1 should produce:

- Android-first Expo shell
- stable tab and stack navigation
- tokenized UI system
- 25-40 polished mock-driven screens
- reusable component-first codebase
