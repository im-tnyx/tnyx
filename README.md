# TNYX

AI-powered health, fitness, nutrition, recovery, and coaching ecosystem.

## Overview

TNYX is an AI-first platform focused on:

- Workout tracking and progression
- AI-generated workout programming
- Nutrition and micronutrient logging
- Recovery intelligence and readiness signals
- Water and sleep tracking
- Wearable and health data sync
- Coaching workflows and recommendations

This repository is currently in foundation mode: architecture, conventions, and UI prototyping first.

## Platforms

- Android app
- iOS app
- Wear OS companion app
- Web dashboard
- Admin panel

## High-Level Tech Direction

- Monorepo with clear platform ownership
- Shared contracts for DTOs/events/schemas
- Backend-orchestrated business logic
- Strict security and privacy boundaries
- Deterministic health logic before probabilistic AI behavior

## Current Phase (v0.1)

Scope for initial milestone:

- Design system foundations
- Navigation architecture
- 20-30 premium mobile screens
- Mock data flows
- Motion and interaction patterns
- Dark theme-first UX

Backend integration is intentionally deferred until UI and contracts stabilize.

## Execution Plan

Primary delivery sequence and milestone gates are defined in:

- [`MASTER_EXECUTION_PLAN.md`](C:/Users/SANTOSH/OneDrive/Tnyx/MASTER_EXECUTION_PLAN.md)

## Repository Conventions (Initial)

- TypeScript-first where applicable
- Reusable components over one-off implementations
- Feature-oriented folder boundaries
- No secrets in repository
- Additive changes preferred over destructive rewrites

## Documentation Map

Primary docs for current phase:

- [`MASTER_EXECUTION_PLAN.md`](C:/Users/SANTOSH/OneDrive/Tnyx/MASTER_EXECUTION_PLAN.md)
- [`docs/DOC_INDEX.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/DOC_INDEX.md)
- [`docs/MONOREPO_STRUCTURE.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/MONOREPO_STRUCTURE.md)
- [`docs/FEATURE_ROADMAP.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/FEATURE_ROADMAP.md)
- [`docs/PROMPTS/mobile-ui.prompt.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/PROMPTS/mobile-ui.prompt.md)
- [`docs/DESIGN_SYSTEM.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/DESIGN_SYSTEM.md)
- [`docs/DESIGN_TOKENS.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/DESIGN_TOKENS.md)
- [`docs/NAVIGATION_STRUCTURE.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/NAVIGATION_STRUCTURE.md)
- [`docs/COMPONENT_ARCHITECTURE.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/COMPONENT_ARCHITECTURE.md)
- [`docs/SCREEN_INVENTORY.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/SCREEN_INVENTORY.md)
- [`docs/ANIMATION_GUIDELINES.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/ANIMATION_GUIDELINES.md)
- [`docs/EXPO_SETUP.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/EXPO_SETUP.md)
- [`docs/UI_GENERATION_WORKFLOW.md`](C:/Users/SANTOSH/OneDrive/Tnyx/docs/UI_GENERATION_WORKFLOW.md)

Execution priority on conflict:

`MASTER_EXECUTION_PLAN -> FEATURE_ROADMAP -> MONOREPO_STRUCTURE -> feature-specific docs`
