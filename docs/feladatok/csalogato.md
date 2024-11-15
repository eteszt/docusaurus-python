---
id: erettsegi-iskolacsalogato
title: Iskolacsalogató weboldal - érettségi feladat megoldása
sidebar_label: 'Iskolacsalogató'
description: 'Az Iskolacsalogató weboldal érettségi feladat hivatalos megoldásának részletes magyarázata'
keywords: [html, css, érettségi, feladat, megoldás, iskolacsalogató]
---

# Iskolacsalogató weboldal - Érettségi feladat részletes megoldása

## A feladat leírása

Az emelt szintű érettségi feladatban egy iskolai rendezvény ("Iskolacsalogató") weboldalát kell elkészíteni HTML és CSS használatával. A meglévő HTML és CSS állományokat kell módosítani úgy, hogy a végeredmény megfeleljen a mintának. A feladat fő követelményei:

- A HTML-állományban nem alkalmazhatunk megjelenítésre vonatkozó stílusdefiníciókat
- Minden formázást a CSS állományban kell megvalósítani
- A HTML5 szabvány szerinti alapstruktúrát kell használni
- A weboldal tartalmát (szövegek, táblázat, kép, hivatkozások) a minta szerint kell kialakítani

### Források letöltése
- [csalogato.pdf](/csalogato.pdf) - A teljes feladatleírás
- [csalogato.zip](/csalogato.zip) - A forrásfájlok:
  - iskolacsalogato.txt - A weboldal szöveges tartalma
  - plakat.png - A plakát képe
  - csalogato.html és csalogato.css - A módosítandó állományok

A feladat során a csalogato.html és csalogato.css fájlokat kell módosítani a megadott szempontok szerint.

## HTML megoldás részletesen

### 1. Címsorok és tartalom

A feladat első lépése a főcím elhelyezése és a weboldal címének beállítása:

```html
<h1>Iskolacsalogató</h1>
```

```html
<head>
    <title>Iskolacsalogató</title>
</head>
```

**Magyarázat:**
- A `<h1>` címkével hozzuk létre a főcímet
- A `<title>` az oldal címe, ami a böngésző fülén jelenik meg
- Mindkettőhöz ugyanazt a szöveget használjuk a feladat szerint

### 2. Bekezdések és szövegformázás

A következő lépésben a szöveges tartalom kerül elhelyezésre:

```html
<p id="info">
    <strong>Március 20-án 9 órától</strong> az iskolába készülő 
    nagycsoportosoknak és szüleiknek szervezünk foglalkozásokat, 
    <em>Iskolacsalogató</em> címmel.
</p>
```

**Magyarázat:**
- A bekezdést `<p>` címkével hozzuk létre
- Az `id="info"` azonosítót kap a későbbi stílusozáshoz
- A `<strong>` címke félkövér kiemelésre szolgál
- Az `<em>` címke dőlt betűs kiemelést ad

### 3. Táblázat készítése

A foglalkozások adatait táblázatba szervezzük:

```html
<table>
    <tr>
        <th>Foglalkozás</th>
        <th>Helyszín</th>
    </tr>
    <tr>
        <td>Robotika</td>
        <td>Számítógéplabor (10-es terem)</td>
    </tr>
    <tr>
        <td>Zenés foglalkozás</td>
        <td>Tornaterem</td>
    </tr>
    <tr>
        <td>Rajzverseny</td>
        <td>Rajzterem (6-os terem)</td>
    </tr>
</table>
```

**Magyarázat:**
- A `<table>` címke jelöli a táblázatot
- `<tr>` elemek a sorokat jelölik
- `<th>` a fejléc cellák címkéje
- `<td>` a normál adatcellák címkéje
- Pontosan 4 sor és 2 oszlop jön létre

### 4. Hivatkozás és kép

A regisztrációs link és a plakát képének beillesztése:

```html
<p>
    Kérjük legkésőbb március 17-ig 
    <a href="regisztracio.html">regisztrálják magukat az eseményre!</a>
</p>

<p class="kozepre">
    <img src="grafika.png" alt="Az esemény plakátja"><br>
    Mindenkit várunk sok szeretettel!
</p>
```

**Magyarázat:**
- Az `<a>` címke hozza létre a hivatkozást
- A `href` attribútum tartalmazza a célfájl nevét
- Az `<img>` címke illeszti be a képet
- Az `alt` attribútum a helyettesítő szöveg
- A `<br>` sortörést helyez el a kép és a szöveg közé
- A `class="kozepre"` osztály a középre igazításhoz kell

## CSS megoldás részletesen

A stílusok külön CSS fájlba kerülnek. Nézzük a főbb részeket:

### 1. Alapvető stílusok

```css
body {
    font-family: Arial, sans-serif;
}
```

**Magyarázat:**
- Az egész oldalra érvényes betűtípust állítunk be
- Ha az Arial nem elérhető, bármilyen sans-serif betűtípus megfelelő

### 2. Azonosító alapú stílusok

```css
#info {
    background-color: lightgray;
}
```

**Magyarázat:**
- A `#info` azonosítóval ellátott bekezdés háttérszínét állítjuk világosszürkére
- Az azonosítót # karakterrel jelöljük a CSS-ben

### 3. Osztály alapú stílusok

```css
.kozepre {
    text-align: center;
}
```

**Magyarázat:**
- A `kozepre` osztályú elemek tartalmát középre igazítjuk
- Az osztályokat . karakterrel jelöljük a CSS-ben

### 4. Képek formázása

```css
img {
    width: 400px;
}
```

**Magyarázat:**
- Minden képet 400 képpont szélességűre állítunk
- Ez az érték fix, nem változik az oldal méretével

## Gyakori hibák és megoldásuk

1. **Inline stílusok használata**
   - ❌ HIBÁS: `<p style="text-align: center">`
   - ✅ HELYES: Használjuk a CSS fájlt és osztályokat

2. **Helytelen hivatkozás a CSS fájlra**
   - ❌ HIBÁS: `<link href="csalogato.css">`
   - ✅ HELYES: `<link rel="stylesheet" href="csalogato.css">`

3. **Táblázat formázásának helye**
   - ❌ HIBÁS: HTML attribútumokkal formázni
   - ✅ HELYES: CSS szabályokat használni
## A feladat teljes megoldása

### A teljes HTML kód (csalogato.html)

```html
<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iskolacsalogató</title>
    <link rel="stylesheet" href="csalogato.css">
</head>
<body>
    <h1>Iskolacsalogató</h1>
    
    <p id="info">
        <strong>Március 20-án 9 órától</strong> az iskolába készülő 
        nagycsoportosoknak és szüleiknek szervezünk foglalkozásokat, 
        <em>Iskolacsalogató</em> címmel.
    </p>
    
    <table>
        <tr>
            <th>Foglalkozás</th>
            <th>Helyszín</th>
        </tr>
        <tr>
            <td>Robotika</td>
            <td>Számítógéplabor (10-es terem)</td>
        </tr>
        <tr>
            <td>Zenés foglalkozás</td>
            <td>Tornaterem</td>
        </tr>
        <tr>
            <td>Rajzverseny</td>
            <td>Rajzterem (6-os terem)</td>
        </tr>
    </table>
    
    <p>
        Kérjük legkésőbb március 17-ig 
        <a href="regisztracio.html">regisztrálják magukat az eseményre!</a>
    </p>
    
    <p class="kozepre">
        <img src="grafika.png" alt="Az esemény plakátja"><br>
        Mindenkit várunk sok szeretettel!
    </p>
</body>
</html>
```

### A teljes CSS kód (csalogato.css)

```css
body {
    font-family: Arial, sans-serif;
    width: 600px;
    border: 10px solid rgb(159,207,230);
    border-radius: 30px;
    padding: 20px;
}

table { 
    border-collapse: collapse;
    border: 4px double black;
    width: 100%
}

th, td {
    border: 1px dotted gray;
    padding: 10px;
}

th {
    background-color: rgb(159,207,230);
    font-style: italic;
}

h1 {
    margin-top: 5px;
    margin-bottom: 5px;
}

#info {
    background-color: lightgray;
    padding: 10px;
}

.kozepre {
    text-align: center;
}

img {
    width: 400px;
}
```

A fenti kódok tartalmazzák a feladat teljes megoldását. A HTML kód megadja az oldal szerkezetét és tartalmát, míg a CSS fájl biztosítja a megfelelő megjelenítést. A megoldás minden követelménynek megfelel:
- A HTML-ben nincsenek stílusdefiníciók
- Minden formázás a CSS-ben található
- A HTML5 szabványnak megfelelő struktúrát használ
- Minden elvárt elem és formázás megtalálható benne