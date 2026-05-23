# TNYX Screen Inventory

This document defines the complete mobile screen inventory for the current Android-first UI phase.

Current scope:

- UI only
- mock data only
- no backend logic
- no API integration
- no production persistence

This document is the master reference for:

- screen planning
- UI implementation sequencing
- navigation mapping
- reusable component identification
- state coverage requirements

## 1) Screen State Requirements

Every production screen must define support for:

- loading
- empty
- success
- error

Exception policy:

- Utility/system transition screens (for example splash) may support only loading/success where empty state is not meaningful.

## 2) Complexity Labels

Use one of:

- Simple
- Medium
- Advanced

Definitions:

- Simple: mostly static, low interaction density
- Medium: multiple sections, reusable blocks, moderate interaction
- Advanced: charts, AI surfaces, live workout flows, animated state transitions, high interaction density

## 3) Reusability Tags

Approved reusable tags:

- `uses-dashboard-card`
- `uses-workout-card`
- `uses-progress-ring`
- `uses-metric-row`
- `uses-chart-container`
- `uses-ai-summary`
- `uses-recommendation-card`
- `uses-bottom-sheet`
- `uses-primary-button`
- `uses-auth-input`
- `uses-otp-input`
- `uses-loading-button`
- `uses-week-calendar`
- `uses-rest-timer`
- `uses-set-tracker`
- `uses-progress-indicator`
- `uses-macro-ring`
- `uses-micronutrient-card`
- `uses-camera-preview`
- `uses-chat-bubble`
- `uses-voice-input`
- `uses-attachment-preview`
- `uses-readiness-score`
- `uses-sleep-card`
- `uses-profile-header`
- `uses-settings-list`
- `uses-quick-actions`
- `uses-action-grid`
- `uses-brand-animation`

## 4) Priority Mapping (P1 -> P7)

- P1: Core Entry
- P2: Main Navigation
- P3: Workout Module
- P4: Nutrition Module
- P5: AI Module
- P6: Recovery & Analytics
- P7: Profile & Settings

## 5) Master Screen Registry

| Priority | Screen | Route | Purpose | Complexity | Required States | Reusability Tags |
|---|---|---|---|---|---|---|
| P1 | Splash | `/system/splash` | App entry transition | Simple | loading | `uses-brand-animation` |
| P1 | Welcome | `/(auth)/welcome` | Auth gateway and onboarding entry | Medium | success | `uses-primary-button` |
| P1 | Login | `/(auth)/login` | Mobile login UI | Medium | success, error | `uses-auth-input`, `uses-primary-button` |
| P1 | OTP Verify | `/(auth)/otp-verify` | OTP verification | Medium | loading, success, error | `uses-otp-input`, `uses-loading-button` |
| P1 | Onboarding Intro | `/(onboarding)/intro` | Onboarding entry | Medium | success | `uses-primary-button` |
| P1 | Goal Selection | `/(onboarding)/goal-selection` | Goal personalization | Medium | success, error | `uses-primary-button` |
| P1 | Body Metrics | `/(onboarding)/body-metrics` | Height/weight input UI | Medium | success, error | `uses-auth-input`, `uses-primary-button` |
| P1 | Activity Level | `/(onboarding)/activity-level` | Activity calibration | Simple | success | `uses-primary-button` |
| P1 | Nutrition Preferences | `/(onboarding)/nutrition-preferences` | Diet preference setup | Medium | success, error | `uses-primary-button` |
| P1 | Permissions | `/(auth)/permissions` | Device permission onboarding | Simple | success, error | `uses-primary-button` |
| P2 | Home Dashboard | `/(tabs)/home` | Athlete summary dashboard | Advanced | loading, empty, success, error | `uses-dashboard-card`, `uses-progress-ring`, `uses-ai-summary`, `uses-metric-row`, `uses-quick-actions` |
| P2 | Workout Tab Hub | `/(tabs)/workout` | Workout tab landing | Medium | loading, empty, success, error | `uses-workout-card`, `uses-quick-actions` |
| P2 | Nutrition Tab Hub | `/(tabs)/nutrition` | Nutrition tab landing | Medium | loading, empty, success, error | `uses-macro-ring`, `uses-metric-row` |
| P2 | Analytics Tab Hub | `/(tabs)/analytics` | Analytics tab landing | Medium | loading, empty, success, error | `uses-chart-container`, `uses-metric-row` |
| P2 | Profile Tab Hub | `/(tabs)/profile` | Profile tab landing | Medium | loading, success, error | `uses-profile-header`, `uses-settings-list` |
| P3 | Workout Planner | `/workout/planner` | Plan and select workouts | Advanced | loading, empty, success, error | `uses-workout-card`, `uses-week-calendar`, `uses-ai-summary` |
| P3 | Workout Session Setup | `/workout/session` | Pre-session setup | Medium | loading, success, error | `uses-workout-card`, `uses-primary-button` |
| P3 | Active Workout | `/workout/active` | Live workout execution | Advanced | success, error | `uses-rest-timer`, `uses-set-tracker`, `uses-progress-indicator` |
| P3 | Workout Summary | `/workout/summary` | Post-session recap | Advanced | loading, success, error | `uses-metric-row`, `uses-chart-container`, `uses-ai-summary` |
| P3 | Workout History | `/workout/history` | Past sessions list | Medium | loading, empty, success, error | `uses-workout-card`, `uses-metric-row` |
| P3 | Exercise Details | `/workout/exercise` | Exercise metadata and tips | Medium | loading, success, error | `uses-metric-row`, `uses-primary-button` |
| P4 | Nutrition Dashboard | `/nutrition/dashboard` | Macro/micro overview | Advanced | loading, empty, success, error | `uses-macro-ring`, `uses-micronutrient-card`, `uses-chart-container` |
| P4 | Food Log Entry | `/nutrition/log` | Manual food logging | Medium | loading, empty, success, error | `uses-auth-input`, `uses-primary-button` |
| P4 | Barcode Entry | `/nutrition/barcode` | Barcode scan log flow | Medium | loading, success, error | `uses-primary-button`, `uses-bottom-sheet` |
| P4 | Food Camera Entry | `/nutrition/image-scan` | Image-based food log | Advanced | loading, success, error | `uses-camera-preview`, `uses-ai-summary`, `uses-bottom-sheet` |
| P4 | Voice Food Entry | `/nutrition/voice-log` | Voice-based food log | Medium | loading, success, error | `uses-voice-input`, `uses-bottom-sheet` |
| P4 | Meal Details | `/nutrition/meal-details` | Parsed meal details | Medium | loading, success, error | `uses-metric-row`, `uses-primary-button` |
| P4 | Micronutrients | `/nutrition/micronutrients` | Micronutrient breakdown | Advanced | loading, empty, success, error | `uses-micronutrient-card`, `uses-chart-container` |
| P5 | AI Coach | `/ai/coach` | Centralized AI guidance | Advanced | loading, success, error | `uses-ai-summary`, `uses-recommendation-card`, `uses-chat-bubble` |
| P5 | AI Chat | `/ai/chat` | Conversational assistant UI | Advanced | loading, success, error | `uses-chat-bubble`, `uses-voice-input`, `uses-attachment-preview` |
| P5 | AI Workout Suggestions | `/ai/workout-generator` | Workout recommendations | Advanced | loading, empty, success, error | `uses-recommendation-card`, `uses-workout-card`, `uses-ai-summary` |
| P5 | AI Nutrition Suggestions | `/ai/nutrition-assistant` | Nutrition recommendations | Advanced | loading, empty, success, error | `uses-recommendation-card`, `uses-macro-ring`, `uses-ai-summary` |
| P5 | AI Recovery Insights | `/ai/recovery-insights` | Recovery guidance | Advanced | loading, success, error | `uses-readiness-score`, `uses-ai-summary`, `uses-chart-container` |
| P6 | Recovery Dashboard | `/recovery/dashboard` | Recovery readiness overview | Advanced | loading, empty, success, error | `uses-readiness-score`, `uses-sleep-card`, `uses-chart-container` |
| P6 | Sleep Summary | `/analytics/sleep` | Sleep trend visualization | Medium | loading, empty, success, error | `uses-sleep-card`, `uses-chart-container` |
| P6 | Hydration Tracking | `/recovery/hydration` | Water logging and trends | Medium | loading, empty, success, error | `uses-metric-row`, `uses-quick-actions`, `uses-chart-container` |
| P6 | Weight Progress | `/analytics/weight` | Weight trend tracking | Medium | loading, empty, success, error | `uses-chart-container`, `uses-metric-row` |
| P6 | Streak Tracking | `/analytics/streaks` | Habit and streak trends | Medium | loading, empty, success, error | `uses-metric-row`, `uses-progress-ring` |
| P6 | Analytics Overview | `/analytics/overview` | Cross-domain insights | Advanced | loading, empty, success, error | `uses-chart-container`, `uses-metric-row`, `uses-ai-summary` |
| P7 | Profile Account | `/profile/account` | User profile overview | Medium | loading, success, error | `uses-profile-header`, `uses-settings-list` |
| P7 | Goals | `/profile/goals` | Goal preferences UI | Medium | loading, empty, success, error | `uses-settings-list`, `uses-primary-button` |
| P7 | Devices | `/profile/devices` | Connected device list | Medium | loading, empty, success, error | `uses-settings-list`, `uses-metric-row` |
| P7 | Notifications | `/profile/notifications` | Notification preference UI | Simple | loading, success, error | `uses-settings-list` |
| P7 | Subscription UI | `/profile/subscriptions` | Plan and billing UI shell | Medium | loading, empty, success, error | `uses-dashboard-card`, `uses-primary-button` |
| P7 | Settings | `/profile/settings` | App settings and controls | Medium | loading, success, error | `uses-settings-list` |

## 6) Shared Layout Inventory

These shared layout shells are required for consistency:

1. `AuthLayout`: title, subtitle, form block, primary CTA, secondary action.
2. `OnboardingLayout`: progress indicator, headline, selection/input area, next CTA.
3. `DashboardLayout`: header, quick actions row, metrics/cards stack, insight rail.
4. `DetailLayout`: sticky header, summary block, content sections, persistent CTA.
5. `ListLayout`: filter/segment row, list body, empty/error surfaces, pull-to-refresh.
6. `ModalLayout`: compact header, action area, close action, safe area spacing.

## 7) Modal Inventory

| Modal | Route | Purpose | Complexity | Reusability Tags |
|---|---|---|---|---|
| Quick Water Log | `/modal/quick-water-log` | Rapid hydration logging | Simple | `uses-bottom-sheet`, `uses-quick-actions` |
| AI Quick Actions | `/modal/ai-quick-actions` | Contextual AI shortcuts | Medium | `uses-ai-summary`, `uses-action-grid` |
| Food Portion Picker | `/modal/food-portion-picker` | Portion selection during nutrition log | Medium | `uses-bottom-sheet` |
| Confirm Workout Exit | `/modal/confirm-workout-exit` | Prevent accidental session exits | Simple | `uses-bottom-sheet`, `uses-primary-button` |
| Media Preview | `/modal/media-preview` | Nutrition/workout media preview | Medium | `uses-bottom-sheet` |

Rule:

- deep workflows are not allowed inside modals.

## 8) Shared Global State Requirements

Every major feature module (Workout, Nutrition, AI, Recovery, Analytics, Profile) must support:

- skeleton loading
- empty state
- retry state
- offline visual fallback
- pull-to-refresh behavior

## 9) Initial Target Count

Target for v0.1:

- 25-40 production-grade Android screens

Current planned inventory:

- 44 total routes (screens + modals + system transition surface)

Implementation recommendation:

- Ship core 30-34 screens first (P1-P6 core paths + P7 essentials)
- Keep remaining variants as stretch inventory without changing route contracts

## 10) Execution Rule (Mandatory)

No screen implementation should begin unless all are defined:

1. route
2. purpose
3. complexity level
4. required states
5. reusable tags
6. navigation entry point
