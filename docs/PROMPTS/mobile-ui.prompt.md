# TNYX Mobile UI Generation Rules

You are building production-grade mobile UI for TNYX.

## Execution Alignment

- Follow root `MASTER_EXECUTION_PLAN.md` and `docs/FEATURE_ROADMAP.md`.
- Current phase is Milestone A (UI Foundation): mobile UI only, mock data only, no backend integration.
- If prompt instructions conflict, resolve by:
  `MASTER_EXECUTION_PLAN -> FEATURE_ROADMAP -> SCREEN_INVENTORY -> NAVIGATION_STRUCTURE -> DESIGN_TOKENS`.

## Product Context

TNYX is an AI-first health and fitness platform, not a generic chat app.
Mobile experiences should prioritize workout flow speed, nutrition logging clarity, and high signal recovery insights.

## Tech Stack

- Expo React Native
- TypeScript
- Expo Router
- NativeWind
- Tamagui
- React Native Reanimated
- Zustand (local app state)
- React Query package may exist, but do not wire real API clients in v0.1.

## Core UI Direction

- Dark theme first
- Premium, modern fitness visual language
- Clean hierarchy and scanning-friendly layout
- Consistent spacing scale
- Reusable component-first implementation
- No one-off screen-specific styling unless justified

## Mandatory Rules

- TypeScript only
- Functional components only
- No inline hardcoded color values
- Use design tokens for color, spacing, radius, typography, and elevation
- Do not add backend/auth/persistence implementation in generated UI files
- Avoid oversized component files; split by responsibility
- Every screen must define loading, empty, error, and success states
- Accessibility support is required (labels, contrast, touch targets)
- Support both Android and iOS layout behavior

## Screen Architecture Rules

- Keep screens declarative and lightweight
- Extract reusable sections to `components/` or feature modules
- Keep navigation concerns in route-level files
- Keep side effects and data orchestration outside pure presentational blocks

## Interaction Rules

- Prefer bottom tab navigation for primary surfaces
- Use smooth micro-interactions where they improve comprehension
- Avoid decorative animation noise
- Focus motion around transitions, feedback, and state changes

## Visual System Rules

- Rounded corners and elevated cards are allowed but should remain disciplined
- Contrast and readability are higher priority than visual effects
- Do not mix multiple competing accent palettes in one screen
- Keep iconography consistent across the app

## Feature Priorities

Primary initial modules:

- Auth entry and onboarding shell
- Home dashboard
- Workout planner and session flow
- Nutrition logging (text, barcode, image, voice entry points)
- Water and sleep trackers
- Progress and streak analytics
- AI coaching entry points

## Folder Structure Target

```txt
app/
components/
features/
hooks/
services/
store/
types/
```

## Output Quality Bar

Always generate:

- production-quality UI
- reusable components
- maintainable file boundaries
- predictable naming
- minimal duplication

Do not generate:

- random folder structures
- deeply nested unmaintainable JSX
- hardcoded magic spacing/colors across screens
- inconsistent component APIs
