# TNYX UI Generation Workflow

This document standardizes how UI is generated for TNYX during v0.1.

Scope:

- Android mobile UI only
- mock data only
- no backend/API/auth implementation

## 1) Workflow Goal

Ensure every generated screen is:

- tokenized
- reusable
- state-complete
- navigation-mapped
- production-grade in structure

## 2) Source-of-Truth Order

Before generating any UI, follow documents in this order:

1. `SCREEN_INVENTORY.md`
2. `NAVIGATION_STRUCTURE.md`
3. `DESIGN_TOKENS.md`
4. `DESIGN_SYSTEM.md`
5. `COMPONENT_ARCHITECTURE.md`
6. `ANIMATION_GUIDELINES.md`
7. `FIGMA_STRUCTURE.md` (if design-first flow used)

If conflict appears, priority is:

`SCREEN_INVENTORY > NAVIGATION_STRUCTURE > DESIGN_TOKENS > DESIGN_SYSTEM`

## 3) Generation Pipeline

Use this sequence for each screen:

1. Select screen from priority bucket (P1 to P7)
2. Validate route + state requirements
3. Identify reusable components from tags
4. Build missing primitives/composites first
5. Compose screen using layout shell
6. Add mock data bindings
7. Implement loading/empty/error/success states
8. Add motion/haptic behavior from guidelines
9. Run structure and token compliance check

## 4) Screen Implementation Contract

Each generated screen must include:

- correct route file path
- layout shell usage
- reusable component composition
- state coverage as defined in inventory
- token-only styling
- accessibility labels and touch-friendly targets

## 5) Strict Do/Do Not

Do:

- generate small reusable components first
- keep screens lightweight
- keep feature boundaries clean

Do not:

- implement backend/API calls
- implement real auth flows
- create one-off visual systems
- hardcode color/spacing/radius/typography values

## 6) Component-First Build Order

Per feature module, follow:

1. UI primitives (if missing)
2. Composite cards/sections
3. Shared layout wrappers
4. Feature components
5. Final screen assembly

## 7) State Coverage Gate

No screen is complete without required states:

- Loading
- Empty
- Success
- Error

If a state is intentionally not applicable, add explicit note in file header comment.

## 8) File Quality Limits

Recommended:

- Primitive < 150 lines
- Composite < 250 lines
- Screen < 300 lines

If exceeded, split by section responsibility.

## 9) Mock Data Strategy

Use centralized mock modules:

- `mock/workout/*`
- `mock/nutrition/*`
- `mock/recovery/*`
- `mock/ai/*`

Rules:

- mock shape should resemble expected future contract
- avoid random per-screen data shape

## 10) Motion Integration Rules

Use only shared motion presets:

- `motion.fast|normal|slow`
- `spring.snappy|smooth|gentle`

No arbitrary timing or spring values in screen files.

## 11) Figma-to-Code Workflow

When using Figma:

1. Confirm frame naming convention
2. Confirm token-compliant styles
3. Extract reusable sections before coding full screen
4. Map frame -> route name -> component tree
5. Implement states not fully shown in Figma

## 12) Review Checklist (Per Screen)

Before marking done:

1. route and filename match navigation contract
2. state matrix complete
3. token usage validated
4. reusable tags mapped to existing components
5. animation behavior within guidelines
6. accessibility baseline met
7. no backend/persistence code introduced

## 13) Delivery Cadence

Recommended cadence:

- Batch A: P1 core entry
- Batch B: P2 navigation shell
- Batch C: P3 workout core
- Batch D: P4 nutrition core
- Batch E: P5 AI surfaces
- Batch F: P6 recovery/analytics
- Batch G: P7 profile/settings

## 14) Definition of Done (v0.1 UI)

A screen/module is done when:

- visuals match design system
- tokens are fully respected
- components are reusable and layered correctly
- navigation path works
- required states are implemented
- interactions are smooth and non-distracting
- implementation remains backend-free
