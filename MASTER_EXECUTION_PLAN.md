# TNYX Master Execution Plan

This document is the single execution reference for TNYX.

It translates product vision into build order, architecture boundaries, and release gates.

## 1) Product Definition

TNYX is an AI-first adaptive health platform, not a basic tracker.

Long-term system scope:

- nutrition intelligence
- workout intelligence
- recovery and stress intelligence
- wearable-aware adaptation
- multimodal AI coaching
- memory-driven personalization

## 2) Current Reality (As-Is)

Current repository status:

- docs foundation created
- Expo mobile UI shell running
- theme/language/font foundation in place
- custom tab + top bar prototypes in progress
- mock-data-first approach active

Current deliberate constraints:

- no backend integration
- no production auth implementation
- no DB integration
- no AI orchestration wiring
- no realtime/wearable sync

## 3) Target Architecture (To-Be)

Execution model:

- Turborepo monorepo
- modular monolith first
- event-driven domain integration
- selective service extraction later

Planned topology:

```txt
apps/
  mobile
  web
  admin
  watch
  backend

packages/
  contracts
  api-client
  ui
  config
  utils
  analytics

services/ (when required)
  ai-orchestrator
  nutrition-engine
  recovery-engine
  wearable-service
  realtime-service
```

## 4) Domain Model (Build in This Order)

1. User and Goal domain
2. Nutrition logging domain
3. Workout session domain
4. Recovery and sleep domain
5. AI orchestration domain
6. Wearable ingestion domain
7. Prediction and adaptation domain

## 5) Milestone Plan

### Milestone A - UI Foundation (v0.1) [Now]

Deliver:

- polished Android-first UI
- tokenized design system
- reusable component architecture
- stable tab and stack navigation
- state-complete mock screens

Exit criteria:

- 25-40 quality screens
- no backend dependencies
- docs-to-UI compliance validated

### Milestone B - Backend Core (v0.2)

Deliver:

- backend app bootstrap
- shared contracts baseline
- DB schema v1 (core tables only)
- auth/session contract wiring
- logging, validation, error envelope standards

Exit criteria:

- mobile consumes typed mock-compatible contracts
- no direct privileged client DB access

### Milestone C - Domain Engines (v0.3)

Deliver:

- nutrition engine v1
- workout progression engine v1
- recovery score pipeline v1

Exit criteria:

- deterministic recommendations available
- per-domain versioned contracts published

### Milestone D - AI Layer (v0.4)

Deliver:

- AI orchestrator service
- memory policy (short + long context)
- recommendation explanation format
- safety and escalation logic

Exit criteria:

- explainable coaching outputs
- confidence-aware responses
- unsafe recommendation blocking

### Milestone E - Wearables + Realtime (v0.5)

Deliver:

- Health Connect / provider ingestion adapters
- realtime session channel for workout coaching
- readiness and adaptation updates

Exit criteria:

- low-latency workout state updates
- recovery-aware workout recommendations

### Milestone F - Adaptive Health OS (v1.0)

Deliver:

- dynamic calorie adaptation
- refeed and deload intelligence
- periodized nutrition and recovery planning
- behavior-based adherence prediction

Exit criteria:

- measurable adaptation outcomes
- stable production release posture

## 6) Non-Negotiable Guardrails

- backend-owned critical mutations only
- additive schema evolution only
- shared contracts as single source of truth
- health-safety filter before AI suggestions
- no medical diagnosis claims
- strict secret/privacy handling

## 7) Data and AI Governance

- user-sensitive health data must be encrypted at rest and in transit
- explicit consent for media and wearable ingestion
- delete/export controls must be designed early
- AI memory should store structured, auditable facts

## 8) Execution Rhythm

For each milestone:

1. architecture note freeze
2. contract draft
3. implementation slices
4. validation and QA gates
5. documentation and handoff update

## 9) Immediate Next Actions (Current Sprint)

1. stabilize remaining top bar and tab bar UI details
2. close P1/P2 screen placeholders to documented state coverage
3. finalize docs index and source-of-truth links
4. prepare backend bootstrap plan without integrating it yet

## 10) Source-of-Truth Document Order

1. `MASTER_EXECUTION_PLAN.md`
2. `README.md`
3. `docs/FEATURE_ROADMAP.md`
4. `docs/MONOREPO_STRUCTURE.md`
5. design/navigation/component/token docs under `docs/`

If conflicts appear, this file governs execution sequencing.
