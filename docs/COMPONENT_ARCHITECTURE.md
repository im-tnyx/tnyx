# TNYX Component Architecture

This document defines component boundaries, ownership rules, composition strategy, and reusable UI architecture for TNYX mobile applications.

Current phase:

- Android-first UI only
- mock data only
- no backend logic
- no API integration

## 1) Architecture Goals

The component system must support:

- scalability
- reuse
- predictable composition
- maintainability
- design consistency
- fast UI iteration

The system should prevent:

- duplicated UI
- giant screen files
- inconsistent component APIs
- tightly coupled feature layouts

## 2) Component Layering Strategy

Use layered UI architecture:

```txt
Tokens
-> Primitives
-> Composite Components
-> Feature Components
-> Layouts
-> Screens
```

Rules:

- lower layers must not depend on higher layers
- screens should compose reusable blocks, not rebuild raw UI repeatedly
- reusable behavior belongs below screen level

## 3) Folder Boundaries

```txt
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
```

Ownership:

- `components/ui`: global primitives
- `components/composite`: cross-feature reusable assemblies
- `components/layouts`: shared structural shells
- `features/*`: domain-scoped reusable components

## 4) UI Primitives

Location:

- `components/ui`

Purpose:

- foundational reusable building blocks

Examples:

- Button
- Input
- Text
- Icon
- Card
- Avatar
- Badge
- Divider
- Spinner
- Skeleton

Rules:

- no feature-specific logic or domain naming
- token-driven styling only
- minimal dependencies
- variant + size support required where applicable

Bad names:

- WorkoutButton
- NutritionInput

Good names:

- Button
- Input

## 5) Composite Components

Location:

- `components/composite`

Purpose:

- reusable combinations of primitives for repeated patterns

Examples:

- MetricCard
- ProgressRingCard
- AIInsightCard
- DashboardSection
- WorkoutCard
- SleepCard
- NutritionSummaryCard

Rules:

- reusable across multiple modules
- limited domain assumptions
- expose clean, explicit props
- should not own navigation

## 6) Layout Components

Location:

- `components/layouts`

Purpose:

- shared screen shells and structural wrappers

Examples:

- AuthLayout
- DashboardLayout
- DetailLayout
- ListLayout
- ModalLayout

Rules:

- own spacing rhythm
- own safe-area behavior
- own scroll behavior
- enforce consistent section structure

Layouts must not:

- fetch data
- own business logic
- embed feature-specific assumptions

## 7) Feature Components

Location:

- `features/*`

Purpose:

- domain-specific reusable UI for one feature area

Examples:

- `features/workout/WorkoutSetTracker`
- `features/nutrition/MacroBreakdown`
- `features/ai/AIChatComposer`
- `features/recovery/RecoveryScoreCard`

Rules:

- domain language is allowed
- reuse expected inside same domain first
- can compose composite components + primitives
- should not leak implementation details outside feature boundary

## 8) Screen Composition Rules

Screens should:

- orchestrate layout
- compose reusable blocks
- remain lightweight and readable

Screens should not:

- contain deeply nested JSX
- duplicate card implementations
- manually repeat spacing patterns

Preferred composition pattern:

```txt
Screen
 -> Layout
   -> Sections
     -> Composite Components
       -> UI Primitives
```

## 9) State Ownership Rules (v0.1)

Current scope:

- mock data only
- local temporary state only
- no backend persistence
- no API orchestration

Rules:

- UI interaction state stays close to component
- feature-level UI state stays in feature boundary
- avoid long prop-drilling chains

## 10) Props & API Conventions

Rules:

- use explicit prop names, avoid ambiguous booleans
- prefer union variants over multiple overlapping flags
- keep default props predictable
- events should be named with intent (`onPressStartWorkout`, `onRetry`)
- never pass raw theme values; pass semantic variant props

## 11) Component Naming Rules

Use:

- PascalCase
- explicit intent-based names
- domain clarity for feature components

Good:

- WorkoutCard
- NutritionSummaryCard
- AIRecommendationCard

Bad:

- Card2
- NewCard
- MainWidget

## 12) File Size Guidelines

Recommended limits:

- Primitive: under 150 lines
- Composite: under 250 lines
- Screen: under 300 lines

If exceeded:

- split into section components or behavior wrappers

## 13) Styling Rules

Use:

- NativeWind
- token-driven styling
- shared spacing scale
- shared typography tokens

Avoid:

- inline hardcoded colors
- arbitrary spacing values
- inconsistent radius/shadow usage

## 14) Animation Ownership Rules

Animations should live:

- inside reusable components
- inside shared interaction wrappers
- in feature components when motion is domain-specific

Avoid:

- copy-pasted animation logic across screens

Good:

- AnimatedButton
- AnimatedCardPressable

## 15) Reusability Gate

Before creating any new component, check:

1. does an equivalent already exist?
2. can an existing component be safely extended?
3. is this truly reusable or screen-specific?
4. does it fit the correct layer?

Avoid:

- near-duplicate components
- one-off wrappers without reuse case
- feature leakage into primitives

## 16) Accessibility Rules

All reusable components must support:

- accessibility labels (where applicable)
- minimum touch target sizing
- readable contrast
- scalable typography behavior

## 17) Quality Bar

Every component should feel:

- reusable
- predictable
- lightweight
- composable
- production-grade

No component should feel:

- tightly coupled
- oversized
- visually inconsistent
- difficult to reuse

## 18) Execution Rules

Before adding a new component:

1. determine component layer
2. define ownership boundary
3. verify reuse opportunity
4. verify token compliance
5. verify accessibility support

Hard rule:

- no screen-specific component may be added to `components/ui`.
