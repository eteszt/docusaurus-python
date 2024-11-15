---
id: css-kviz
title: CSS tudáspróba    
sidebar_label: CSS kvíz  
---

import Quiz from '@site/src/components/Quiz';

<Quiz
  questions={[
    {
      question: 'Mi a CSS?',
      options: [
        'Programozási nyelv',
        'Stílusleíró nyelv',
        'Markup nyelv',
        'Adatbázis kezelő'
      ],
      correctAnswer: 1,
      explanation: 'A CSS (Cascading Style Sheets) egy stílusleíró nyelv, amely a HTML elemek megjelenését szabályozza.'
    },
    {
      question: 'Melyik a helyes módja külső CSS fájl csatolásának?',
      options: [
        '<style src="styles.css">',
        '<css href="styles.css">',
        '<link rel="stylesheet" href="styles.css">',
        '<script type="css" src="styles.css">'
      ],
      correctAnswer: 2,
      explanation: 'Külső CSS fájlt a <link> elemmel, rel="stylesheet" attribútummal és href megadásával csatolhatunk.'
    },
    {
      question: 'Melyik NEM ajánlott módja a CSS elhelyezésének?',
      options: [
        'Külső stíluslap használata',
        'Belső stíluslap használata a head részben',
        'Soron belüli (inline) stílus használata',
        'CSS fájl importálása másik CSS fájlból'
      ],
      correctAnswer: 2,
      explanation: 'A soron belüli (inline) stílus használata nem ajánlott, mert nehezíti a karbantarthatóságot és újrafelhasználhatóságot.'
    },
    {
      question: 'Mi a különbség az id és class szelektorok között?',
      options: [
        'Nincs különbség',
        'Az id többször használható, a class csak egyszer',
        'A class többször használható, az id csak egyszer',
        'Az id csak számokat tartalmazhat'
      ],
      correctAnswer: 2,
      explanation: 'Az id egyedi azonosító, csak egyszer használható egy oldalon, míg a class többször is előfordulhat.'
    },
    {
      question: 'Hogyan hivatkozunk egy osztályra CSS-ben?',
      options: [
        '#osztaly',
        '.osztaly',
        '@osztaly',
        'osztaly'
      ],
      correctAnswer: 1,
      explanation: 'Osztályra a pont (.) karakterrel hivatkozunk a CSS-ben.'
    },
    {
      question: 'Mit jelent a CSS-ben a "cascading"?',
      options: [
        'A stílusok véletlenszerű alkalmazását',
        'A stílusok rangsorolását és öröklődését',
        'A stílusok animációját',
        'A stílusok törlését'
      ],
      correctAnswer: 1,
      explanation: 'A "cascading" a stílusok rangsorolására és öröklődésére utal, meghatározva mely szabályok élveznek elsőbbséget.'
    },
    {
      question: 'Mi a box-sizing: border-box szerepe?',
      options: [
        'A doboz méretét növeli',
        'A padding és border beleértendő a megadott szélességbe és magasságba',
        'Csak a margót számolja bele a méretbe',
        'Eltávolítja a szegélyt'
      ],
      correctAnswer: 1,
      explanation: 'A border-box beállítással a padding és border része lesz a megadott szélességnek és magasságnak, nem adódik hozzá.'
    },
    {
      question: 'Melyik a helyes színmegadás hexadecimális formátumban?',
      options: [
        '#FF0000',
        'FF0000',
        'hex(FF0000)',
        'color(FF0000)'
      ],
      correctAnswer: 0,
      explanation: 'Hexadecimális színkódot # karakterrel kezdve adunk meg, például #FF0000 a piros színhez.'
    },
    {
      question: 'Mi a különbség a margin és padding között?',
      options: [
        'Nincs különbség',
        'A margin az elemen belüli, a padding az elemen kívüli térköz',
        'A padding az elemen belüli, a margin az elemen kívüli térköz',
        'A margin csak számokkal adható meg'
      ],
      correctAnswer: 2,
      explanation: 'A padding az elem tartalma és kerete közötti belső térköz, míg a margin az elem kerete és más elemek közötti külső térköz.'
    },
    {
      question: 'Melyik CSS tulajdonság állítja be a betűtípust?',
      options: [
        'text-family',
        'font-family',
        'type-face',
        'font-type'
      ],
      correctAnswer: 1,
      explanation: 'A font-family tulajdonsággal állíthatjuk be a kívánt betűtípust vagy betűtípus-családot.'
    },
    {
      question: 'Milyen értékeket vehet fel a text-align tulajdonság?',
      options: [
        'top, middle, bottom',
        'start, center, end',
        'left, center, right, justify',
        'begin, middle, end'
      ],
      correctAnswer: 2,
      explanation: 'A text-align tulajdonság értékei lehetnek: left (balra), center (középre), right (jobbra) és justify (sorkizárt).'
    },
    {
      question: 'Hogyan állítunk be félkövér betűstílust?',
      options: [
        'font-weight: bold',
        'text-weight: bold',
        'font-style: bold',
        'text-type: bold'
      ],
      correctAnswer: 0,
      explanation: 'A font-weight: bold beállítással érhetjük el a félkövér betűstílust.'
    },
    {
      question: 'Mi az alapértelmezett értéke a display tulajdonságnak?',
      options: [
        'inline',
        'block',
        'inline-block',
        'none'
      ],
      correctAnswer: 0,
      explanation: 'A legtöbb HTML elem alapértelmezett display értéke inline vagy block, de az inline a default érték, ha nincs más meghatározva.'
    },
    {
      question: 'Hogyan állítunk be háttérszínt?',
      options: [
        'color: blue',
        'bg-color: blue',
        'background-color: blue',
        'background: color(blue)'
      ],
      correctAnswer: 2,
      explanation: 'A background-color tulajdonsággal állíthatjuk be egy elem háttérszínét.'
    },
    {
      question: 'Melyik mértékegység relatív a szülőelem betűméretéhez?',
      options: [
        'px',
        'em',
        'rem',
        'pt'
      ],
      correctAnswer: 1,
      explanation: 'Az em mértékegység a szülőelem betűméretéhez viszonyított relatív mértékegység.'
    },
    {
      question: 'Hogyan adjuk meg egy elem szegélyét egy sorban?',
      options: [
        'border: width style color',
        'border: color style width',
        'border: style width color',
        'border: color width style'
      ],
      correctAnswer: 0,
      explanation: 'A border rövidített tulajdonságnál a sorrend: szélesség, stílus, szín (pl. border: 1px solid black).'
    },
    {
      question: 'Hogyan központosítunk egy elemet vízszintesen?',
      options: [
        'align: center',
        'margin: center',
        'margin: 0 auto',
        'position: center'
      ],
      correctAnswer: 2,
      explanation: 'A margin: 0 auto beállítás vízszintesen középre igazítja a blokkszintű elemet a konténerében.'
    },
    {
      question: 'Mit jelent a CSS dobozmodellben a box-sizing: border-box?',
      options: [
        'A doboz méretébe csak a tartalom számít bele',
        'A doboz méretébe a padding és border is beleszámít',
        'A doboz méretébe csak a margin számít bele',
        'A doboz mérete mindig fix'
      ],
      correctAnswer: 1,
      explanation: 'A border-box beállítással a megadott szélesség és magasság tartalmazza a paddinget és bordert is, nem adódnak hozzá.'
    },
    {
      question: 'Mi a különbség a width és a max-width között?',
      options: [
        'Nincs különbség',
        'A width fix értéket ad, a max-width egy felső határt',
        'A max-width fix értéket ad, a width egy felső határt',
        'A width százalékban, a max-width csak pixelben adható meg'
      ],
      correctAnswer: 1,
      explanation: 'A width fix szélességet állít be, míg a max-width egy felső határt ad meg, aminél az elem nem lehet szélesebb.'
    },
    {
      question: 'Melyik tulajdonság szabályozza a túlcsordulást?',
      options: [
        'overflow',
        'flow',
        'extra',
        'scroll'
      ],
      correctAnswer: 0,
      explanation: 'Az overflow tulajdonság szabályozza, mi történjen, ha a tartalom nem fér el a megadott méretben.'
    },
    {
      question: 'Hogyan állítunk be térközt egy elem minden oldalára?',
      options: [
        'spacing: 10px',
        'margin: 10px',
        'space: 10px',
        'padding: all 10px'
      ],
      correctAnswer: 1,
      explanation: 'A margin: 10px beállítás minden oldalon 10 pixel külső térközt eredményez.'
    },
    {
      question: 'Mi a különbség a padding: 10px és a padding: 10px 20px között?',
      options: [
        'Nincs különbség',
        'Az első minden oldalon 10px, a második fent-lent 10px, jobb-bal 20px',
        'Az első csak felül, a második minden oldalon',
        'Az első vízszintesen, a második függőlegesen'
      ],
      correctAnswer: 1,
      explanation: 'A padding: 10px minden oldalon 10px térközt jelent, míg a padding: 10px 20px felül-alul 10px, jobb-bal 20px térközt ad.'
    },
    {
      question: 'Melyik a legspecifikusabb szelektor?',
      options: [
        '.class',
        '#id',
        'element',
        'element.class'
      ],
      correctAnswer: 1,
      explanation: 'Az id (#) szelektor a legspecifikusabb, erősebb mint az osztály vagy elem szelektorok.'
    },
    {
      question: 'Mit jelent a font-family: Arial, sans-serif deklaráció?',
      options: [
        'Csak Arial betűtípust használ',
        'Csak sans-serif betűtípust használ',
        'Arial betűtípust használ, ha elérhető, ha nem, akkor sans-serif típusút',
        'Mind Arial, mind sans-serif betűtípust használ'
      ],
      correctAnswer: 2,
      explanation: 'Ez egy betűtípus fallback rendszer: először az Arial-t próbálja használni, ha az nem érhető el, akkor bármilyen sans-serif típusú betűtípust.'
    },
    {
      question: 'Mekkora az alapértelmezett margin és padding az elemeken?',
      options: [
        'margin: 0, padding: 0',
        'margin: auto, padding: 0',
        'Böngészőnként változó lehet',
        'margin: 10px, padding: 10px'
      ],
      correctAnswer: 2,
      explanation: 'Az alapértelmezett margin és padding értékek böngészőnként eltérőek lehetnek, ezért gyakran használunk CSS reset-et.'
    }
  ]}
/>