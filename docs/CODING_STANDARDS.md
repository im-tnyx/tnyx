# TNYX Coding Standards

This document defines implementation standards for TNYX v0.1.

Current scope:

- Android-first Expo UI
- mock data only
- no backend integration

## Execution Alignment

- Follow milestone sequencing in `MASTER_EXECUTION_PLAN.md`.
- In v0.1, do not introduce backend or persistence behavior in UI modules.
- Conflict priority:
  `MASTER_EXECUTION_PLAN -> FEATURE_ROADMAP -> MONOREPO_STRUCTURE -> this document`.

## 1) Core Principles

Code should be:

- readable
- composable
- predictable
- typed
- reusable
- scalable

Avoid:

- shortcuts
- hidden side effects
- oversized files
- duplicated logic

## 2) Language Rules

Mandatory:

- TypeScript only
- strict typing enabled
- no `any`
- avoid implicit types in exported APIs

Use:

- explicit interfaces/types
- discriminated unions where useful
- typed component props and return values

## 3) Naming Rules

### 3.1 File Naming

Use:

- PascalCase for components
- camelCase for hooks/utilities
- kebab-case for folders

Examples:

Good:

- `WorkoutCard.tsx`
- `useWorkoutTimer.ts`
- `workout-summary/`

Bad:

- `workoutCard.tsx`
- `NewFile.tsx`
- `miscStuff/`

### 3.2 Symbol Naming

- use intent-based names
- avoid vague names like `data`, `item2`, `helper`

## 4) Import Rules

Import order:

1. external packages
2. shared internal modules
3. feature modules
4. local relative imports

Rules:

- avoid deep relative import chains
- prefer path aliases
- keep imports sorted and stable

Bad:

```ts
import Button from "../../../../components/ui/Button";
```

Good:

```ts
import { Button } from "@/components/ui/Button";
```

## 5) Component Rules

Components must:

- stay focused on one UI responsibility
- accept explicit typed props
- avoid hidden global dependencies

Avoid:

- giant JSX blocks
- duplicate layout implementations
- mixed concerns (render + heavy orchestration)

## 6) Hook Rules

Hooks should:

- encapsulate reusable behavior
- remain feature-scoped where possible
- keep side effects isolated and explicit

Rules:

- hook names must start with `use`
- do not mutate external module state implicitly
- expose small, predictable hook APIs

## 7) State Rules (v0.1)

During v0.1:

- local UI state only
- no production persistence
- no backend orchestration

Rules:

- keep state close to where it is used
- avoid unnecessary global state
- global stores only for truly shared UI concerns

## 8) Styling Rules

Mandatory:

- token-based styling only
- NativeWind-first utility styling
- use shared spacing/radius/typography tokens

Avoid:

- inline hardcoded colors
- arbitrary spacing values
- one-off style systems per screen

## 9) Animation Rules

Use only:

- shared motion presets
- approved animation wrappers/utilities

Avoid:

- inline duplicated animation logic
- arbitrary duration/spring values

Must align with:

- `docs/ANIMATION_GUIDELINES.md`
- `docs/DESIGN_TOKENS.md`

## 10) Accessibility Rules

Mandatory:

- labels for interactive controls
- readable contrast
- touch-friendly sizing
- scalable text support
- predictable focus/interaction order

## 11) File Size Guidelines

Recommended limits:

- Hooks < 150 lines
- Primitive components < 150 lines
- Composite components < 250 lines
- Screens < 300 lines

If exceeded:

- split by responsibility

## 12) Folder Ownership Rules

Do not place:

- feature components in `components/ui`
- screen-specific logic in shared components
- mock payloads inside screen files

Follow:

- `docs/COMPONENT_ARCHITECTURE.md`
- `docs/SCREEN_INVENTORY.md`

## 13) Mock Data Rules

Mock data must:

- live under `mock/`
- resemble future contract shapes
- support loading/empty/success/error states

Avoid:

- random inline arrays and objects inside screens

## 14) Error & State Coverage Rules

Even in mock phase:

- loading state required
- empty state required
- error state required
- retry action surface required where meaningful

## 15) Comment Rules

Avoid:

- obvious narration comments
- dead commented code

Use comments only for:

- architectural clarification
- temporary TODO markers with context
- complex interaction explanation

## 16) Testing & QA Baseline (UI Phase)

At minimum for new screens/components:

- visual state sanity checks (loading/empty/error/success)
- interaction sanity checks (press/scroll/modal behaviors)
- token compliance check

## 17) Git Rules

Preferred:

- small commits
- feature-scoped commits
- meaningful commit messages

Good:

- `feat(workout): add active workout timer UI`

Bad:

- `update`
- `changes`

## 18) Enforcement Checklist

Before merging any UI work:

1. types are strict, no `any`
2. route/screen matches inventory
3. tokens used, no hardcoded visual values
4. component layer placement is correct
5. required states are implemented
6. no backend/persistence code introduced

## 19) Quality Bar

Every implementation should feel:

- maintainable
- scalable
- production-grade
- token-consistent
- architecturally aligned

No generated code should:

- bypass docs
- ignore tokens
- break layering rules
- introduce backend concerns in v0.1
