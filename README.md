# Businesshandler

Mobile Business-Management-App mit drei klickbaren Hauptbereichen: **Dashboard**, **Money Management** und **Time Management**. Alle Werte sind zentral im Code hinterlegte Beispieldaten — ohne Backend und ohne Netzwerkzugriffe. Das UI folgt exakt dem Figma-Design (Farben, Schriften, Abstände, Bilder, Viewport 414×896 im Hochformat).

## Tech-Stack

- **Language**: TypeScript
- **Framework**: React Native (Expo SDK 57), react-native-web für den Web-Export
- **Navigation**: React Navigation (Bottom Tabs + Native Stack)
- **Styling**: Design-Tokens aus `src/theme.ts` (Quelle: `DESIGN.md`)
- **Fonts**: Aleo (Überschriften), Inter (Text), Ubuntu (Alternativ) via `@expo-google-fonts` + `expo-font`
- **Daten**: statische Beispieldaten direkt im Code, kein Backend

## Installation

```bash
npm ci
```

## Entwicklung (Gerät / Simulator)

```bash
npm start          # Expo Dev Server starten (QR-Code scannen oder Simulator wählen)
# oder direkt:
npm run android    # Android-Emulator
npm run ios        # iOS-Simulator
```

## Web-Export (Produktion)

```bash
npm run build      # erzeugt den statischen Web-Export in dist/
```

Der Export liegt anschließend in `dist/` und kann mit einem beliebigen statischen
Server ausgeliefert werden, z. B.:

```bash
py -m http.server 8000 --directory dist
```

## Bedienung

Die App startet im **Dashboard**-Bereich. Über die **Bottom-Tab-Bar** am unteren
Bildschirmrand wechselt man zwischen den drei Bereichen — der aktive Tab ist grün
hervorgehoben:

- **Dashboard** — Übersicht (inkl. Stats und Menu)
- **Money** — Money Management (inkl. Wochenbericht und Ausgaben-Formular)
- **Time** — Time Management (inkl. Kalender und Termin-Formular)

Innerhalb eines Bereichs stapeln sich die Ansichten; zurück geht es über den
Back-Chevron oben links.

## Feature-Liste

- Drei Bereiche über eine Bottom-Tab-Bar erreichbar, aktiver Tab hervorgehoben
- Neun Ansichten (je Bereich drei) als gestapelte Screens
- Zentrale Design-Tokens für Farben, Abstände, Radien und Typografie
- Geladene Google-Fonts (Aleo, Inter, Ubuntu)

## Tests

```bash
npm test
```
