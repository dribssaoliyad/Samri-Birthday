# Samri Birthday Surprise — Website + Android

This beginner-friendly starter uses one responsive website experience and bundles the same files inside a simple Android WebView app. That means the design and content can be maintained in one place.

## Included
- Animated opening gift
- Birthday greeting and countdown to October 27, 2026
- CSS birthday cake with animated candle
- Music play/pause control (you add your own licensed audio)
- Letter, photo memory gallery, 10 reasons, timeline, wishes, hidden message, final gift
- Responsive mobile design
- Android Studio project using Kotlin and Jetpack Compose hosting the bundled site
- Offline-ready site assets (Google Fonts are optional online enhancements; system fonts remain available offline)

## Step 1 — Open the website
1. Open the `website` folder.
2. Double-click `index.html` to test in your browser.
3. If your browser restricts local media, use a simple local web server or open it through Android Studio's preview/browser.

## Step 2 — Personalize
Edit `website/app.js`, especially the `CONFIG` object:
- recipient / sender
- birthday
- letter / final message
- reasons / memories / wishes

The birthday is set to October 27, 2026. Update the `birthday` field if needed.

## Step 3 — Add real photos and music
1. Add your images to `website/photos/` with these names: `memory1.jpg` through `memory5.jpg`.
2. Add a properly licensed or original audio file named `music.mp3` inside `website/`.
3. Copy any changed website files into `android/app/src/main/assets/` so Android uses the same content. The included `sync-site-to-android.py` script can do this automatically if Python is installed.

No personal photos or audio are bundled in this starter. Empty photo placeholders are included.

## Step 4 — Open Android project
1. Open Android Studio → **Open**.
2. Select the `android` folder containing `settings.gradle.kts`.
3. Wait for Gradle sync. Use JDK 17 and install Android SDK Platform 35 if requested.
4. Choose an emulator or connect your phone with USB debugging enabled.
5. Press **Run ▶**. The app loads its local website assets, so the main experience works offline.

The first Gradle sync requires internet to download Android/Compose dependencies.

## Step 5 — Build APK
- Debug APK: **Build → Build Bundle(s) / APK(s) → Build APK(s)**.
- Usually located at `android/app/build/outputs/apk/debug/app-debug.apk`.
- For a signed release: **Build → Generate Signed Bundle / APK → APK**, create a keystore, and save it safely. Do not share your keystore/password.

## Website hosting + QR code
Publish the contents of the `website` folder using a static host such as Netlify or GitHub Pages. Once published, create a QR code from the final public URL. Test the URL and QR code on another phone before gifting it.

## Sync changed website files into Android
Run this script from the project root with Python:
`python sync-site-to-android.py`
It copies the website files to Android's assets directory. You can also copy the files manually.

## Limitations / next iteration
- This is a functional starter, not a compiled APK. Build and test in Android Studio.
- No personal photos or audio are included; replace placeholders yourself.
- The starter uses WebView to reuse the same responsive experience in both platforms, rather than implementing each screen natively in Compose.
- Google Fonts are optional; the website uses fallback fonts offline.
