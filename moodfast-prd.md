# MoodFast Product Requirements Document (PRD)

## 1) Document Control
- Product: `MoodFast` (iOS)
- Version: `1.0`
- Source of truth: current implementation in `MoodFast/`
- Last updated: `2026-03-23`

---

## 2) Product Summary
MoodFast is an iOS emotional wellness app that combines fast mood tracking, guided self-care activities, gratitude journaling, and gamified progress. The app uses Firebase for auth/data, RevenueCat for subscriptions, local + remote notifications, and Apple Foundation Models with fallback content when AI is unavailable.

### Core promise
- Track mood quickly and consistently
- Get context-aware wellness actions
- Build habits with streaks/challenges/goals
- Unlock deeper capabilities with PRO

---

## 3) Product Goals
1. Increase daily emotional check-ins.
2. Help users convert mood awareness into action (guided sessions).
3. Improve retention via streaks, goals, and challenge loops.
4. Monetize through clear, feature-based PRO gating.

### Non-goals (current build)
- Therapist marketplace or telehealth workflows
- Community/social feed
- Multi-platform parity beyond iOS + widget target

---

## 4) Target Users
- People seeking lightweight daily mood tracking.
- Users managing stress/anxiety with short guided exercises.
- Habit-oriented users motivated by streaks, achievements, and goals.

---

## 5) Platforms & Technical Constraints
- Primary app target: iOS (`IPHONEOS_DEPLOYMENT_TARGET = 26.0`)
- Widget target: `MoodFastWidgets` (`IPHONEOS_DEPLOYMENT_TARGET = 26.2`)
- Device family: iPhone + iPad (`TARGETED_DEVICE_FAMILY = 1,2`)
- Language/framework: Swift + SwiftUI

### Key dependencies
- Firebase (`FirebaseCore`, `Auth`, `Firestore`, `Messaging`)
- RevenueCat (`Purchases`, `RevenueCatUI`)
- Google Sign-In
- StoreKit (review prompt)
- WidgetKit
- FoundationModels (Apple Intelligence integration)

---

## 6) Information Architecture

### App entry routing (`RootView` + `AppCoordinator`)
- `splash`
- `onboarding`
- `auth`
- `dashboard`

### Main tab structure (`DashboardView`)
1. `Home`
2. `Mood`
3. `Progress`
4. `Profile`

### Deep links (`DeepLinkHandler`)
Supported intents include: home, mood, mood log, progress, profile, settings, notification settings, challenge(id), activity(id), gratitude.

---

## 7) Functional Requirements

## 7.1 Onboarding
- Multi-page onboarding introducing product value.
- Includes focus preference selection:
  - `calm`
  - `energy`
  - `clarity`
- Persists focus in `UserDefaults` key: `onboardingPreferredFocus`.

## 7.2 Authentication
- Sign in with Apple.
- Sign in with Google.
- Firebase auth-state listener drives route transitions.
- Session verification on app active; expired/revoked sessions force sign-out and re-auth route.

## 7.3 Mood Tracking
### Mood model
- Mood type: `positive`, `neutral`, `negative`
- Mood intensity supports emotion-level granularity (e.g., joy, anxiety, stress, loneliness, baseline, etc.)

### User actions
- Log mood from Home and Mood flows.
- Add note with free/PRO character limits.
- Optional tags/custom emotion data fields supported by model.

### Access rules
- Free daily limit: `2` mood entries.
- PRO daily limit: `100` mood entries.
- Free history window: `30` days.
- PRO history window: `3650` days.

## 7.4 Activity System
### Content
- Loaded from `Resources/actions.json`.
- Categories:
  - Breathing
  - Grounding
  - Activation
  - Reframing
  - Gratitude
  - Sleep

### Session lifecycle
- Select recommended or browsed action.
- Run guided session (`ActivitySessionView`).
- Complete reflection (`SessionResult`) with mood delta.
- Update progress/challenges/analytics.

### Recommendation behavior
- Uses mood intensity + history + filtering of completed-today actions.
- Incorporates onboarding focus preference in recommendation scoring behavior.

## 7.5 Gratitude
- Daily gratitude flow available from Home.
- Stores `GratitudeEntry` with items, optional category, optional AI reflection.
- Journal review screen available.
- Gratitude streak and totals feed progress surfaces.

## 7.6 Progress & Gamification
### Stored in `UserProgress`
- Activity streak (`currentStreak`, `longestStreak`)
- XP and level (`totalXP`, `currentLevel`)
- Weekly goal (`weeklyGoal`, `currentWeekActivities`)
- Category totals
- Achievements list
- Gratitude streak/totals

### UI capabilities
- Streak card
- Gratitude streak card
- Level progress card
- Weekly goal editor
- Achievements view + toast
- Category breakdown

## 7.7 Challenges
- Daily and weekly rotating challenge sets (`Challenge` model extensions).
- Requirement types include category completion, streak maintenance, minutes spent, etc.
- Challenge taps route either to mood logging or action browser based on requirement.

## 7.8 Notifications
### Permission + settings
- Authorization status tracked and reconciled with app toggles.
- Notification settings include:
  - master enable
  - category toggles
  - schedule time/day selection
  - in-app banner/sound/badge options

### Scheduling
- Local schedules are resynced on relevant state changes.
- Test notification action exists in settings.

### Deep-link handling
- Notification interactions can open specific tabs, mood sheet, gratitude flow, challenge, or activity.

## 7.9 Settings
Implemented settings areas include:
- PRO features (custom moods, advanced reminders, widget setup)
- Appearance theme (`light`, `dark`, `system`)
- Personalization focus preference
- Data export
- Local data clear
- Legal (Terms, Privacy)
- App review action
- Debug subscription screen (debug builds)

## 7.10 Widgets
- Dedicated widget target exists (`MoodFastWidgets`).
- Widget displays latest mood + streak + totals for PRO users.
- Non-PRO users see locked state and upgrade messaging.
- Uses app group storage sync via widget sync service.

## 7.11 AI Features
### AI service behavior
- `AIContentService` provides:
  - personalized instructions
  - encouragement
  - mood support text
  - session reflection
  - gratitude prompts
  - gratitude reflection

### Availability handling
- Checks model/device/system readiness.
- Shows AI-unavailable alerts when needed.
- Falls back to offline/prewritten content when unavailable.

---

## 8) Monetization Requirements

## 8.1 Subscription model
- Plans: `free`, `pro_monthly`, `pro_yearly`
- Source of entitlement state: RevenueCat + synced Firestore subscription doc
- App entitlement identifier: `MoodMe Premium`

## 8.2 PRO gating
Gating is enforced through `SubscriptionManager` checks and `ProFeatureGate` UI patterns.

### Defined PRO features
- unlimited mood history
- multiple daily entries
- data export
- advanced analytics
- mood notes
- custom mood categories
- premium activities
- advanced reminders
- widgets
- mood prediction

### Current gating implementation notes
- Widget feature is implemented and gated.
- Other features use paywall triggers from relevant flows/settings.

---

## 9) Data Model Requirements

## 9.1 Primary entities
- `User`
- `UserSettings`
- `MoodEntry`
- `ActionStep`
- `SessionResult`
- `UserProgress`
- `Challenge` + `ChallengeProgress`
- `GratitudeEntry` + `GratitudeItem`
- `Subscription`
- `UserNotificationSettings`
- `CustomMoodCategory`
- `CustomReminder`

## 9.2 Persistence
- Firestore used for user content/state.
- UserDefaults used for lightweight local preferences/state.
- Widget app group defaults used for widget data bridge.

---

## 10) Non-Functional Requirements

## 10.1 Reliability
- Real-time listeners for key user state (auth/subscription/progress where applicable).
- Defensive fallback paths for AI, auth verification, and subscription updates.

## 10.2 Security & Privacy
- Firebase-authenticated access patterns.
- Session token refresh checks for revoked credentials.
- Export and sensitive feature access gated by subscription and auth context.

## 10.3 UX Quality
- Theme system supports light/dark/system and applies app-wide.
- Navigation and deep links are state-coordinated.
- In-app banners and haptics used for feedback in key flows.

---

## 11) Analytics Requirements
The app includes analytics instrumentation for key lifecycle and conversion events, including:
- challenge interactions
- paywall view source attribution
- blocked PRO feature attempts
- subscription tier updates
- key activity completions and related flow events

(Exact event catalog should be maintained in `AnalyticsService` as implementation source of truth.)

---

## 12) Known Product Risks / Open Product Decisions
1. Some PRO feature enums represent roadmap-level capabilities and should be periodically audited against in-app availability and paywall copy.
2. AI features depend on device/OS capabilities and Apple Intelligence state; fallback UX must remain first-class.
3. Notification effectiveness depends on user-level and OS-level permission coherence.

---

## 13) Acceptance Criteria for This PRD
This document is considered valid when:
- It maps to implemented modules/routes/models in current code.
- Platform and deployment constraints reflect project build settings.
- Monetization and gating sections align with `SubscriptionManager` + `ProFeature` definitions.
- No speculative feature is presented as already shipped unless visible in source.

---

## 14) File References
- App entry: `MoodFast/MoodFastApp.swift`
- Route orchestration: `MoodFast/Core/Navigation/AppCoordinator.swift`
- Root switching/paywall: `MoodFast/Views/RootView.swift`
- Tabs + home orchestration: `MoodFast/Views/Dashboard/DashboardView.swift`
- Mood experience: `MoodFast/Views/Dashboard/MoodView.swift`
- Settings: `MoodFast/Views/Settings/SettingsView.swift`
- Subscription management: `MoodFast/Core/Subscription/SubscriptionManager.swift`
- Subscription service: `MoodFast/Services/SubscriptionService.swift`
- PRO feature definitions: `MoodFast/Models/Subscription.swift`
- Widget: `MoodFastWidgets/MoodStatusWidget.swift`
- Deep links: `MoodFast/Core/Navigation/DeepLinkHandler.swift`
- Activities content: `MoodFast/Resources/actions.json`
