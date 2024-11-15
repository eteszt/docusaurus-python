---
id: html-css-integration-kviz
title: HTML és CSS együttműködése tudáspróba    
sidebar_label: HTML-CSS integráció kvíz  
---

import Quiz from '@site/src/components/Quiz';

<Quiz
  questions={[
    {
      question: 'Mi a HTML és CSS alapvető kapcsolata?',
      options: [
        'A CSS a HTML helyettesítője',
        'A HTML tartalom és struktúra, a CSS megjelenés és formázás',
        'A HTML és CSS ugyanazt a célt szolgálja',
        'A CSS csak a HTML egy kiegészítője'
      ],
      correctAnswer: 1,
      explanation: 'A HTML a tartalom struktúrájáért felel, míg a CSS a megjelenést és formázást szabályozza.'
    },
    {
      question: 'Hogyan kapcsoljuk össze a HTML és CSS fájlokat?',
      options: [
        '<style src="styles.css">',
        '<css href="styles.css">',
        '<link rel="stylesheet" href="styles.css">',
        '<script type="css" src="styles.css">'
      ],
      correctAnswer: 2,
      explanation: 'A CSS fájlt a <link> elem segítségével, rel="stylesheet" attribútummal kapcsoljuk a HTML dokumentumhoz.'
    },
    {
      question: 'Hogyan definiálunk osztályt HTML-ben?',
      options: [
        '<p style="class: kiemelt">',
        '<p class="kiemelt">',
        '<p className="kiemelt">',
        '<p css-class="kiemelt">'
      ],
      correctAnswer: 1,
      explanation: 'HTML elemekhez a class attribútummal adhatunk osztályt.'
    },
    {
      question: 'Hogyan alkalmazhatunk több osztályt egy HTML elemen?',
      options: [
        '<p class="kiemelt, fontos">',
        '<p class="kiemelt fontos">',
        '<p class="kiemelt+fontos">',
        '<p classes="kiemelt,fontos">'
      ],
      correctAnswer: 1,
      explanation: 'Több osztályt szóközzel elválasztva adhatunk meg a class attribútumban.'
    },
    {
      question: 'Mi a különbség az azonosító és az osztály között?',
      options: [
        'Nincs különbség',
        'Az azonosító többször használható, az osztály csak egyszer',
        'Az osztály többször használható, az azonosító csak egyszer',
        'Az azonosító csak számokat tartalmazhat'
      ],
      correctAnswer: 2,
      explanation: 'Az azonosító (id) egyedi és csak egyszer használható egy oldalon, míg az osztály (class) többször is előfordulhat.'
    },
    {
      question: 'Hogyan hivatkozunk egy azonosítóra CSS-ben?',
      options: [
        '.azonosito',
        '#azonosito',
        '@azonosito',
        'azonosito'
      ],
      correctAnswer: 1,
      explanation: 'Az azonosítókra a # karakterrel hivatkozunk CSS-ben.'
    },
    {
      question: 'Mit jelent a stílusok öröklődése?',
      options: [
        'A stílusok véletlenszerűen öröklődnek',
        'A gyermekelemek öröklik a szülő elem bizonyos tulajdonságait',
        'Minden stílus öröklődik',
        'A stílusok nem öröklődnek'
      ],
      correctAnswer: 1,
      explanation: 'Az öröklődés során a gyermekelemek öröklik szülőjük bizonyos CSS tulajdonságait.'
    },
    {
      question: 'Hogyan írjuk felül az örökölt stílusokat?',
      options: [
        'Nem lehet felülírni az örökölt stílusokat',
        'Új stílus megadásával az adott elemre',
        'Csak inline stílussal lehet felülírni',
        'Csak !important használatával'
      ],
      correctAnswer: 1,
      explanation: 'Az örökölt stílusokat felülírhatjuk, ha az adott elemre közvetlenül megadjuk az új stílust.'
    },
    {
      question: 'Mi a szerepe a CSS-ben az elem szelerktornak?',
      options: [
        'Csak azonosítóval rendelkező elemeket választ ki',
        'Az összes megadott típusú HTML elemet kiválasztja',
        'Csak osztállyal rendelkező elemeket választ ki',
        'Csak az első elemet választja ki'
      ],
      correctAnswer: 1,
      explanation: 'Az elem szelektor (pl. p, div) az összes adott típusú HTML elemet kiválasztja.'
    },
    {
      question: 'Milyen hatása van a .tartalom p CSS szelektor kombinációnak?',
      options: [
        'Csak a tartalom osztályú bekezdéseket választja ki',
        'A tartalom osztályú elemen belüli összes bekezdést kiválasztja',
        'A tartalom osztály után következő bekezdést választja ki',
        'A tartalom osztállyal közvetlenül rendelkező bekezdéseket választja ki'
      ],
      correctAnswer: 1,
      explanation: 'Ez a szelektor a tartalom osztályú elemen belül található összes bekezdést kiválasztja, függetlenül a beágyazás szintjétől.'
    }
  ]}
/>