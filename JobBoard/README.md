# JobBoard — Expo + Nativewind + Router

A Job Board mobile app built with Expo Router, React Native, Nativewind (Tailwind), and a small set of reusable components. This README explains how to set up, run, debug and build the project locally, and includes common troubleshooting tips for native modules frequently used in Expo projects (for example `react-native-reanimated` and `react-native-gesture-handler`).

---

**Contents**

- **Project**: short description and goals
- **Prerequisites**: system requirements
- **Quick start**: commands to run locally (PowerShell)
- **Development notes**: file-based routing, Nativewind/Tailwind, Babel config
- **Native modules & Expo Go**: Reanimated, Gesture Handler, dev clients
- **Testing & debugging**: Metro, device logs, emulator tips
- **Project structure**: important folders and files
- **Troubleshooting**: common errors and fixes
- **Contributing** and **License**

---

**Project**

- **What it is**: a cross-platform (iOS/Android/web) job board app using Expo Router for file-based navigation, Nativewind for styling, and a small API layer for fetching job/application data.
- **Goals**: provide a clean example of a production-like Expo app with reusable components, navigation, and native-capable libraries.

---

**Prerequisites**

- Node.js (LTS recommended)
- npm (bundled with Node) or Yarn
- Expo CLI (not strictly required; `npx expo` works)
- For iOS native builds: macOS with Xcode
- For Android native builds: Android Studio + emulator or a physical device

---

**Quick Start (development)**
Run these from the repository root in PowerShell:

- Install dependencies:

```powershell
npm install
```

- Start Metro (Expo dev server) and open Expo DevTools:

```powershell
npx expo start
# or to force a cache clear
npx expo start -c
```

- Scan the QR code with Expo Go (mobile) or press `a`/`i` in the terminal to open an Android emulator / iOS simulator.

Note: if you are using native modules not included in Expo Go (see below), use a custom dev client or run the app on a simulator/emulator via `npx expo run:android` / `npx expo run:ios`.

---

**Development workflow notes**

- File-based routing: pages live in the `app/` directory. Example: `app/(tabs)/applications.tsx` maps to a route handled by the router.
- Styling: uses `Nativewind` (Tailwind for React Native). Global Tailwind directives are in `global.css` at the project root.
- Babel: `babel.config.js` must include Nativewind settings and the Reanimated plugin (if Reanimated is used). Example entries:

```js
presets: [["babel-preset-expo", { jsxImportSource: "nativewind" }], "nativewind/babel"],
plugins: ["react-native-reanimated/plugin"]  // plugin must be last
```

---

**Native modules & Expo Go**

- Expo Go does NOT include arbitrary native modules. If your app imports a native-capable package (for example `react-native-reanimated` or other third-party native libraries), you have two options:
  - Remove/disable native features for Expo Go testing;
  - Build a custom dev client (recommended if you depend on native modules).

- Build a development client (cloud):

```powershell
npx expo prebuild
eas build -p ios --profile development   # requires EAS setup and Apple account
```

- Or build and run locally (macOS for iOS):

```powershell
npx expo prebuild
npx pod-install
npx expo run:android
npx expo run:ios   # macOS only
```

---

**Gesture Handler**

- `react-native-gesture-handler` requires a `GestureHandlerRootView` ancestor. The app wraps the root layout with `GestureHandlerRootView` and `SafeAreaProvider` in `app/_layout.tsx` to ensure gestures work across the app.

---

**Reanimated**

- If you use `react-native-reanimated`, ensure:
  - the Babel plugin `react-native-reanimated/plugin` is present and _last_ in the `plugins` array in `babel.config.js`;
  - you rebuild any native client after adding or updating Reanimated (Expo Go will not include it by default).

---

**Tailwind / Nativewind**

- Ensure `tailwind.config.js` `content` array includes your `app/` and component paths so class extraction works, e.g.:

```js
content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"];
```

---

**Testing & Debugging**

- Clear Metro cache when switching builds or changing native configs:

```powershell
npx expo start -c
```

- Collect device logs:
  - Android: `adb logcat ReactNative:V ReactNativeJS:V *:S`
  - iOS: open Xcode → Window → Devices and Simulators → select device → View Device Logs
- Common runtime issues:
  - "non-std C++ exception" — often caused by native module mismatches (Reanimated or other native libs). Rebuild a dev client or run on emulator with correct native setup.
  - "NativeViewGestureHandler must be used as a descendant of GestureHandlerRootView" — ensure `GestureHandlerRootView` is present at app root (`app/_layout.tsx`).
  - "React.Children.only expected to receive a single React element child" — check components like `TouchableWithoutFeedback` have a single child (wrap multiple elements in a `View`).

---

**Project Structure (high level)**

- `app/` — file-based routes & screens
- `components/` — reusable UI components (header, cards, modals, etc.)
- `assets/` — images and static assets
- `services/` or `api/` — network layer and mocked services
- `global.css` — Tailwind directives for Nativewind
- `babel.config.js`, `tailwind.config.js`, `package.json` — project config

---

**Adding a new screen / route**

- Create a new file under `app/`, e.g. `app/ApplicationDetails.tsx` to register the `ApplicationDetails` route used by `navigation.navigate("ApplicationDetails", { item })`.
- Routes are automatically picked up by Expo Router; restart Metro after adding new route files.

---

**Formatting, Linting & Type-checking**

- Linting (Expo):

```powershell
npm run lint
```

- Type checking:

```powershell
npx tsc --noEmit
```

---

**Troubleshooting checklist (quick)**

- Metro/packager problems: `npx expo start -c`
- Native module crashes: rebuild dev client or remove native imports for Expo Go testing
- Gesture issues: ensure `GestureHandlerRootView` wraps the app root
- NativeView errors on Windows: sometimes node module installs produce locked files — try closing editors and restarting your machine.
