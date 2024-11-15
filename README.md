# Docusaurus Oktatási Sablon

Ez a repository egy általános Docusaurus sablon oktatási weboldalak készítéséhez. A sablon tartalmazza az összes szükséges alapbeállítást és komponenst interaktív oktatási anyagok létrehozásához.

## 📚 Főbb funkciók

- Teljes magyar nyelvű felület
- Beépített kvíz komponens tudásfelméréshez
- Kód példák élő szerkesztése
- Sötét/világos téma támogatás
- Mobilbarát dizájn

## 🚀 Új projekt indítása

1. Repository klónozása:
```bash
git clone https://github.com/eteszt/docusaurus-edu-template.git uj-tananyag-neve
cd uj-tananyag-neve
```

2. Függőségek telepítése:
```bash
npm install
```

3. Konfiguráció testreszabása:
- docusaurus.config.js - projekt név, URL-ek módosítása
- sidebars.js - menüstruktúra kialakítása
- src/css/custom.css - színek testreszabása (opcionális)

4. Tartalom létrehozása:
- docs/bevezetes.md szerkesztése
- Új markdown fájlok létrehozása a leckékhez
- Kvízek hozzáadása

5. Fejlesztői szerver indítása:
```bash
npm start
```

## 📁 Projekt struktúra

```
uj-tananyag/
├── docs/                # Markdown dokumentumok
├── src/
│   ├── components/     # React komponensek
│   │   └── Quiz/      # Kvíz komponens
│   └── css/           # Globális stílusok
└── static/            # Statikus fájlok
```

## 📝 Tartalom készítése

### Új lecke hozzáadása:
1. Hozz létre egy új .md fájlt a docs mappában
2. Add hozzá a frontmatter metaadatokat:
```markdown
---
id: lecke-azonosito
title: Lecke címe
sidebar_label: 'Lecke címe'
---
```
3. Add hozzá a leckét a sidebars.js-hez

### Kvíz létrehozása:
```markdown
import Quiz from '@site/src/components/Quiz';

<Quiz
  questions={[
    {
      question: 'Kérdés szövege',
      options: [
        'Válasz 1',
        'Válasz 2',
        'Válasz 3',
        'Válasz 4'
      ],
      correctAnswer: 0,
      explanation: 'Magyarázat a helyes válaszhoz'
    }
  ]}
/>
```

## 🛠️ Testreszabás

### Színek módosítása
src/css/custom.css fájlban:
```css
:root {
  --ifm-color-primary: #új-szín;
}
```

### Menü módosítása
sidebars.js fájlban:
```javascript
module.exports = {
  tutorialSidebar: [
    'bevezetes',
    {
      type: 'category',
      label: 'Kategória neve',
      items: ['lecke-1', 'lecke-2']
    }
  ]
};
```

## 📤 Publikálás

1. GitHub Pages beállítása:
```bash
npm run deploy
```

2. Vagy egyéb tárhelyre build:
```bash
npm run build
```

## 💡 Tippek

- Használj beszédes fájlneveket
- Minden leckéhez adj gyakorló feladatokat
- Készíts kvízeket a fejezetek végére
- Használj sok példát és magyarázatot
- Rendszeresen teszteld mobilon is

## 📄 Licensz

Copyright (c) 2024 TiSoft
Minden jog fenntartva.