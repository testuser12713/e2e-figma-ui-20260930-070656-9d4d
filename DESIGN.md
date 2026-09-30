# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Helle, aufgeräumte Business-App-Identität exakt aus den Figma-Frames: fast weißer Grund (#F4F5FA/#FFFFFF), tiefblauschwarze Typografie (#23233C/#1C1C1C), ein einziger frischer Grün-Akzent (#6CC57C) für Buttons, Header-Balken und die zentrale FAB – Serif-Überschriften (Aleo) über neutralem Inter-Text, weiche Schatten (0/3 blur 16 #00000014), kleine Radien.

## Colors

- `--color-bg`: **#F4F5FA**
- `--color-bg-alt`: **#F4F4F4**
- `--color-bg-tint`: **#ECF1FA**
- `--color-surface`: **#FFFFFF**
- `--color-surface-card`: **#DCE5F4**
- `--color-fg`: **#23233C**
- `--color-fg-strong`: **#1C1C1C**
- `--color-fg-black`: **#000000**
- `--color-accent`: **#6CC57C**
- `--color-accent-soft`: **#61D27C33**
- `--color-accent-dim`: **#6CC57CD9**
- `--color-accent-bar`: **#6CC57CA3**
- `--color-accent-light`: **#61D27C**
- `--color-accent-deep`: **#179F2F**
- `--color-on-accent`: **#FFFFFF**
- `--color-secondary`: **#23233C**
- `--color-muted`: **#A5A5A5**
- `--color-muted-2`: **#8D8D8D**
- `--color-muted-3`: **#898888C9**
- `--color-muted-4`: **#B4B4B4**
- `--color-nav-inactive`: **#BBC7DB**
- `--color-border`: **#707070**
- `--color-divider`: **#1C1C1C33**
- `--color-chevron`: **#181461**
- `--color-warn-line`: **#C48B302E**
- `--color-dot`: **#E3E3E3**

## Typography

- `font_family`: Aleo, 'Aleo Regular', Georgia, 'Times New Roman', serif
- `font_family_body`: Inter, 'Inter Regular', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif
- `font_family_alt`: Ubuntu, 'Ubuntu Regular', Roboto, 'Helvetica Neue', Arial, sans-serif
- `heading_weight`: 700
- `body_weight`: 400
- `text-25`: Aleo 700 25px/30px
- `text-16`: Aleo 700 16px/19px
- `text-16-alt`: Inter 400 16px/19px
- `text-14`: Aleo 700 14px/17px
- `text-14-alt`: Inter 400 14px/17px
- `text-12`: Inter 100 12px/15px
- `text-12-alt`: Inter 400 12px/14px
- `text-10`: Inter 400 10px/13px
- `text-9`: Inter 100 9px/11px
- `text-7`: Aleo 700 7px/5px
- `section-label`: Inter 100 12px/15px letter-spacing 2.4px uppercase
- `page-label`: Inter 100 14px/18px letter-spacing 2.8px uppercase
- `hero-number`: Inter 500 45px/57px uppercase
- `screen-title`: Aleo 700 24px/29px

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 20px
- `--space-5`: 24px
- `--space-6`: 40px

## Border-Radii

- `--radius-sm`: 3px
- `--radius-md`: 5px
- `--radius-lg`: 8px
- `--radius-xl`: 10px
- `--radius-field-note`: 12px
- `--radius-button-dark`: 18px
- `--radius-panel`: 20px
- `--radius-pill`: 999px
- `--radius-square`: 0px

## Components

### Button / Primary (grün)

Box wie in den Frames: 334×43 px, fill #6CC57C, Schatten 0/3 blur 16 #00000014, Ecken radius md 5px, Label zentriert 'Inter 400 16px/19px #FFFFFF' (z.B. 'Add Expense' [40,365], 'Add Appointment' [41,338], 'Add a new appointment' [39,477], 'Overview' [39,544]). Zustände: default fill #6CC57C; hover fill #7BCE8A (Grün +10% Helligkeit, Frames zeigen keinen Hover); active/pressed fill #57B268 (dunkler, gleiche Textfarbe, keine Skalierung); disabled fill #6CC57CD9 wie der 'Overview'-Button im Frame [39,544] – Text bleibt #FFFFFF; Touchfläche mind. 44px hoch (43px-Box + 1px unsichtbares Padding, horizontal 39px Rand = 336px Inhaltsbreite).

### Button / Dark (Login)

333×54 px, fill #23233C, radius 18px, Label 'Aleo 700 20px/25px #FFFFFF' zentriert ('Login' [42,529]). Zustände: default #23233C; hover #2E2E4F; active #1A1A2E; disabled opacity 0.6. Touchfläche 54px ≥ 44px.

### Button / Text+Pill (Onboarding)

115×42 px, fill #6CC57C, radius lg 8px, Label Inter 400 15px/19px #FFFFFF ('Next' [251,825]). Sekundär: reiner Text 'Skip step' Inter 400 15px/19px #B4B4B4 [53,835]. Zustände: default #6CC57C, hover #7BCE8A, active #57B268, disabled #6CC57CD9.

### Input / Feld (Search-Group)

334×43 px (Viewport 414 − 2×40 Rand), fill #FFFFFF, radius md 5px, Schatten 0/3 blur 16 #00000014, vertikaler Abstand zwischen Feldern 20–21px (Frames: y 176→239→302→365). Layout: Icon 16×16 bei x≈+16 (Farbe #23233C, z.B. noun_Search_860389, noun_Map_2404959, icon-15x16), Text bei x≈+38, 'Inter 400 16px/19px #1C1C1C'; Placeholder zusätzlich opacity 0.2 (Frame 'Search' [41,116]). Zustände: default Schatten wie oben; focused Rand/Hairline 1px #6CC57C und Schatten bleibt; disabled opacity 0.6. Date-Feld mit 15×16 Icon (#23233C) statt Suchicon.

### Card / Panel (Quick Categories)

330×276 px, fill #FFFFFF, radius panel 20px, kein Schlagschatten im Frame. Innenabstand 24px, Überschrift zentriert als Section-Label 'Inter 100 12px/15px letter-spacing 2.4px uppercase #000000' ('Quick Categories' [137,487]). Darin Icon-Kacheln 55×55 px, fill #FFFFFF, Radius 12px (erste Reihe) bzw. 0px (zweite Reihe), stroke 1px #000000 dashed inside, Icon-Inhalt 36–42px #000000 (home, dish-spoon-knife, briefcase, friends, shopping-bag, gas-station).

### Card / Hero Expenses

414×406 px weiße Fläche oben (fill #FFFFFF, unterer Rand als Bogen), Illustration `design/figma/assets/illustration-525x387.png` [-73,-74 525×387], Label 'Inter 100 12px/15px letter-spacing 2.4px uppercase #000000' ('MONTHLY EXPENSES' [49,282]), Betrag 'Inter 500 45px/57px uppercase #000000' ('1,345.00€' [49,298]). Avatar-Kreis 51×51 px bei [296,77]: fill #6CC57C, Radius pill, Schatten 0/3 blur 6 #00000029, Initiale 'Aleo 700 32px/41px #FFFFFF' ('R' [311,82]).

### Navigation / Bottom Tab Bar

Balken 413×77 px an y=819, fill #FFFFFF, Schatten 0/3 blur 20 #60719329, oben mittig kreisförmiger Ausschnitt. Zentrale FAB: Ellipse 64×63 px bei [179,778] (überlappt den Balken), fill linear-gradient(180deg, #6CC57C 0%, #179F2F 100%), stroke 4px #FFFFFF inside, Schatten 0/3 blur 40 #00000029, Plus-Zeichen aus zwei 3px-Linien (#FFFFFF), 20×20 px. Tabs: Icon 19–22 px + Label 'Aleo 700 7px/5px' Farbe #BBC7DB inaktiv; aktiver Tab in Grün #6CC57C (Icon und Label), die Icons 22×21 (`noun-home-1191731.png` etc.) bei y=836/837, Labels bei y=862. Drei Bereiche laut Spec: Dashboard, Money, Time – Beschriftung in der Typo der Frame-Labels.

### Navigation / Screen-Header

Variante A (Money/Time): weiße Fläche 414×138 px, Titel zentriert 'Inter 100 14px/18px letter-spacing 2.8px uppercase #000000' ('ADD EXPENSE' [129,61]); links runder Back-Button 32×32 px `design/figma/assets/icon-32x32.png` [47,55]. Variante B (Time -3 / Dashboard Menu): Header 414×126 px, fill #FFFFFF, Schatten 0/3 blur 16 #0000001A, Titel links 'Aleo 700 24px/29px #23233C' [18,62], rechts Icon `noun-user-1335326.png` 27×27 #181461 [367,25], links Menü-/Chevron-Icon 18×15 #181461. Back-Chevron als reines Icon: 11×18 px #181461 (`noun-back-1227057.png`) bei [22,25] bzw. [40,29].

### Liste / Zeile (Money-Eintrag)

Zeile 326×~83 px, Abstand 83px zwischen den Zeilen (y 436/519/602/685), links Illustration 53×53 px (`illustration-53x53.png` … `-4.png`), Textblock bei x=+75: Kategorie 'Inter 100 9px/11px letter-spacing 1.8px uppercase #000000', Titel 'Inter 100 12px/15px #000000', Datum 'Inter 100 9px/11px uppercase #000000'; rechts Betrag 'Inter 100 14px/18px #000000' rechtsbündig. Zustände: hover/pressed Zeilenfläche #F4F5FA, Tappbar auf ganzer Breite.

### Liste / Quick-Add-Zeile (Time -3)

Zeile 336×90 px: Bild 69×69 px links (`image-69x69.png`), Titel bei x=+82 'Aleo 700 14px/17px #1C1C1C', Untertitel 'Inter 400 12px/14px #1C1C1C opacity 0.4', rechts Dots-Menü (3 Kreise 3×3 px, fill #23233C, vertikal 5px Abstand) bei x=372, Trennlinie 336×1 px, stroke 0.5px #1C1C1C opacity 0.2 am Zeilenende. Zustände: pressed Fläche #F4F5FA; Dots-Menü klickbar (Touchfläche 44×44 px).

### Tabs / Segment (Upcoming / Past)

Zeile 336 px breit, 38 px hoch: aktiver Titel 'Aleo 700 16px/19px #23233C' + Unterstrich 51×2 px fill #23233C; inaktiver Titel 'Inter 400 16px/19px #1C1C1C' rechtsbündig; Basislinie 336×1 px stroke 0.5px #1C1C1C opacity 0.2. Zustände: aktiv #23233C mit 2px-Underline, inaktiv #1C1C1C ohne, pressed opacity 0.7, Touchfläche ≥44px hoch.

### Termin-Karte (Time -2)

286×118 px, fill #6CC57CA3, Radius 0px, bei x=94. Inhalt: Titel 'Ubuntu 700 11px/12px #23233C' [x=+20], Uhrzeit 'Ubuntu 700 7px/10px #23233C' mit Uhr-Icon 11×11 px #23233C [x=+19], Untertitel 'Ubuntu 400 10px/12px #000000 opacity 0.42', rechts rundes Foto 56×56 px (`fc8cc65f046eeb0b9efb159aad932e2b.png`), untere Linie 286×1 px stroke 1px #C48B30 opacity 0.18. Zeitspalte links: 'Aleo 700 11px/12px letter-spacing 0.3px #000000' (10 AM/12 AM/15 AM) mit Trennstrich 22×1 px stroke 1px #707070 opacity 0.18.

### Kalender-Woche (Time -2)

Wochentagszeile 'Ubuntu 400 13–15px/18–20px #000000' bei y=175 (S M T W T F S, x 36/86/140/192/250/302/354), Tageszeile bei y=223 (15–21), aktiver Tag als Kreis 42×42 px fill #6CC57C mit weißer Zahl bei [181,213]. Kopfzeile: 'Ubuntu 400 13px/15px #000000' ('15-21 April 2019') mit Pfeil-Icons 8×14 px #000000 links/rechts. Zustände: gewählter Tag grün gefüllt, andere Tage transparent, Tageszelle tappbar (44×44 px).

### Badge / Anzahl & Dots

Kleine Markierung fill #23233C (Frames: Buttons, Badges, Divider) mit Text #FFFFFF in 'Inter 400 12px/14px'; Onboarding-Dots 10×10 px, aktiv fill #61D27C, inaktiv fill #E3E3E3, Abstand 21px.

## Layout Principles

- Ein einziger Viewport: 414×896 px Hochformat (Portrait), keine Breakpoints, keine Media Queries, kein responsives Layout.
- Kein max-width-Container und keine Desktop-Navigation: kein Top-Navbar-Balken, sondern Bottom Tab Bar (413×77 px, fix am unteren Rand y=819, Safe Area unten) und gestapelte Screens mit Back-Chevron links oben.
- Horizontaler Inhaltsrand einheitlich ~40px links und rechts (Frames: x=39/40/41, Inhalt 334–336 px breit) – daraus ergibt sich die 336px-Standardbreite für Felder, Buttons, Karten und Listen.
- Vertikale Struktur pro Screen: Header 0–126/138 px, dann scrollbarer Inhalt, Tab Bar ab y=819; die zentrale grüne FAB (64×63 px) überlappt den oberen Rand der Tab Bar mittig.
- Feste Abstände: Listenzeilen 83–90 px Höhe, Feldabstand 20–21 px, Sektionsabstand 24 px, Kartenschatten 0/3 blur 16 #00000014, untere Innenabstände mit ~20px Puffer über der Tab Bar.
- Screens stapeln sich innerhalb eines Bereichs (Dashboard → Stats → Menu, Money 1→2→3, Time 1→2→3) ohne Wechsel der Tab Bar; der aktive Tab bleibt in Grün (#6CC57C) hervorgehoben, inaktive Tabs/Icons #BBC7DB.
- Alle Bilder und Icons kommen als Dateien aus design/figma/assets/* (illustration-525x387, illustration-256x218, illustration-53x53-*, image-69x69, fc8cc65f046eeb0b9efb159aad932e2b, noun-*, icon-*) – keine selbst gezeichneten Grafiken, keine Schrift-Icons.
- Lesbarkeit: Text auf weißer Fläche #23233C/#1C1C1C, Text auf Grün immer #FFFFFF (Kontrast-Test), Beschriftungen in Inter-Versalien mit letter-spacing 2.4px/2.8px als Sektionslabel, Beträge in Inter 500 45px.

## Source Frames

This design was taken from the Figma frames below. They are the reference; the tokens above were read from them. Each frame's spec carries its exact positions, sizes, colours, fonts and texts; `design/figma/README.md` is the index.

Platform: mobile app (`mobile-app`) — design viewport 414×896 (phone, portrait) — one viewport, the design is not responsive.

- **Money Management** · businesshandler — spec `design/figma/money-management.md` — `design/figma/money-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2446
- **Money Management 2** · businesshandler — spec `design/figma/money-management-2.md` — `design/figma/money-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2573
- **Money Management 3** · businesshandler — spec `design/figma/money-management-3.md` — `design/figma/money-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2673
- **Time Management** · businesshandler — spec `design/figma/time-management.md` — `design/figma/time-management.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-803
- **Time Management - 2** · businesshandler — spec `design/figma/time-management-2.md` — `design/figma/time-management-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-3047
- **Time Management - 3** · businesshandler — spec `design/figma/time-management-3.md` — `design/figma/time-management-3.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-1029
- **Login** · businesshandler — spec `design/figma/login.md` — `design/figma/login.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-81
- **Login Slide** · businesshandler — spec `design/figma/login-slide.md` — `design/figma/login-slide.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-20
- **Login Slide 2** · businesshandler — spec `design/figma/login-slide-2.md` — `design/figma/login-slide-2.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-208
- **Dashboard** · businesshandler — spec `design/figma/dashboard.md` — `design/figma/dashboard.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-681
- **Dashboard Menu** · businesshandler — spec `design/figma/dashboard-menu.md` — `design/figma/dashboard-menu.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-2973
- **Dashboard Stats** · businesshandler — spec `design/figma/dashboard-stats.md` — `design/figma/dashboard-stats.png` — https://www.figma.com/design/edl4sapqOV1QVVleWmFCt3/?node-id=0-900
