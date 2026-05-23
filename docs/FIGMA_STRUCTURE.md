# TNYX Figma Structure

This document defines the design production workflow and file structure for TNYX.

Current scope:

- Android-first mobile UI only
- mock data only
- no backend integration
- no watch app design system in this phase

## 1) Figma Goal

Figma must produce implementation-ready mobile screens that map directly to:

- `DESIGN_SYSTEM.md`
- `DESIGN_TOKENS.md`
- `NAVIGATION_STRUCTURE.md`
- `SCREEN_INVENTORY.md`
- `COMPONENT_ARCHITECTURE.md`

## 2) File Strategy

Use a single primary design file during v0.1:

- `TNYX Mobile UI v0.1`

Do not split into many files in early phase.

## 3) Page Structure

Required pages:

1. `00_Cover`
2. `01_Foundations`
3. `02_Components_Primitives`
4. `03_Components_Composite`
5. `04_Layouts`
6. `05_Flows_Auth_Onboarding`
7. `06_Flows_MainTabs`
8. `07_Flows_Workout`
9. `08_Flows_Nutrition`
10. `09_Flows_AI`
11. `10_Flows_Recovery_Analytics`
12. `11_Flows_Profile_Settings`
13. `12_Modals_Overlays`
14. `13_States_Loading_Empty_Error`
15. `14_Handoff_Specs`

## 4) Frame Naming Convention

Use this exact format:

`[Priority]-[Feature]-[Screen]-[State]-[Version]`

Examples:

- `P2-Home-Dashboard-Success-v1`
- `P3-Workout-Active-Success-v1`
- `P4-Nutrition-ImageScan-Loading-v1`

Rules:

- no generic names (`Frame 123`, `New Screen`)
- state suffix is mandatory (`Loading`, `Empty`, `Success`, `Error`)

## 5) Auto Layout Rules

Mandatory:

- all production frames must use Auto Layout
- use token-based spacing rhythm only
- avoid manual pixel nudging for production sections

Rules:

- primary direction: vertical
- use consistent section gap system
- avoid mixed, arbitrary spacing stacks

## 6) Grid & Sizing Rules

Android-first base frame:

- 360 x 800 (baseline)

Support checks:

- compact Android
- large Android

Rules:

- design for thumb reach and one-hand workflows
- avoid top-heavy interaction clusters

## 7) Token Mapping in Figma

Foundations page must define and bind:

- color styles/variables
- typography styles
- spacing tokens
- radius values
- elevation styles

Rules:

- no ad-hoc colors inside feature screens
- all component styles must map to token names

## 8) Component Naming Rules

Use slash-based naming:

- `ui/Button/Primary`
- `ui/Input/Default`
- `composite/WorkoutCard/Default`
- `layout/DashboardLayout/Base`

Rules:

- components must reflect architecture layers
- no duplicate names with slight typos

## 9) Variants & States

Every reusable component should define variants for:

- state (`default`, `pressed`, `disabled`, `loading`, `error` where needed)
- size (`sm`, `md`, `lg` where applicable)
- theme (`dark` now, light-ready naming)

## 10) Reusable Sections

Create reusable sections for:

- dashboard quick actions
- metric rows
- workout summary blocks
- nutrition macro summary
- AI recommendation rail
- settings list group

Sections must be assembled from existing component layers.

## 11) Modal & Overlay Rules

Use dedicated page `12_Modals_Overlays`.

Required modal templates:

- bottom sheet modal
- confirmation modal
- quick action modal

Rules:

- no deep multi-step flow inside modals
- dim/background overlay must be token-based

## 12) State Coverage Rules

For each priority screen, create state frames for:

- Loading
- Empty
- Success
- Error

No screen is handoff-ready without state coverage.

## 13) Prototype Flow Rules

Connect flows for:

- auth -> onboarding -> main tabs
- workout critical path
- nutrition quick logging path
- AI contextual entry path

Rules:

- use realistic transition speeds
- avoid decorative prototype motion

## 14) Export Rules

Export only when needed:

- PNG for review snapshots
- SVG only for custom vector assets

Do not export whole screens for implementation when components are available in Figma inspect.

## 15) Dev Handoff Rules

Before handoff, every frame must include:

- route reference
- priority level
- state label
- component dependencies
- notes for motion (if non-default)

Use `14_Handoff_Specs` page for implementation notes and QA checklist.

## 16) Quality Gate

A screen is approved for Expo implementation only if:

1. token-compliant
2. auto-layout compliant
3. state-complete
4. named per convention
5. mapped to navigation route
6. built from approved component layers
