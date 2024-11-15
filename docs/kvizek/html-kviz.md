---
id: html-kviz
title: HTML tudáspróba    # Ez jelenik meg az oldal tetején
sidebar_label: HTML kvíz  # Ez jelenik meg a bal oldali menüben
---

import Quiz from '@site/src/components/Quiz';

<Quiz
  questions={[
    {
      question: 'Mi a HTML?',
      options: [
        'Jelölőnyelv weboldalak készítéséhez',
        'Programozási nyelv',
        'Képszerkesztő program',
        'Adatbázis-kezelő rendszer'
      ],
      correctAnswer: 0,
      explanation: 'A HTML (HyperText Markup Language) egy jelölőnyelv, amelyet weboldalak szerkezetének leírására használunk.'
    },
    {
      question: 'Melyik elem használatos címsor létrehozására?',
      options: [
        '<header>',
        '<heading>',
        '<h1>',
        '<title>'
      ],
      correctAnswer: 2,
      explanation: 'A <h1> elem (és h1-től h6-ig) szolgál címsorok létrehozására HTML-ben.'
    },
    {
      question: 'Melyik a helyes HTML dokumentum alapszerkezet?',
      options: [
        '<html><head></head><body></body></html>',
        '<document><content></content></document>',
        '<webpage><header></header><main></main></webpage>',
        '<site><start></start><end></end></site>'
      ],
      correctAnswer: 0,
      explanation: 'A helyes HTML dokumentum szerkezet a <html>, <head> és <body> elemekből áll.'
    },
    {
      question: 'Mi a különbség a <strong> és <b> elem között?',
      options: [
        'Nincs különbség, teljesen ugyanazt csinálják',
        'A <strong> szemantikai kiemelést, a <b> csak vizuális formázást jelent',
        'A <b> szemantikai kiemelést, a <strong> csak vizuális formázást jelent',
        'A <strong> aláhúzza, a <b> félkövérré teszi a szöveget'
      ],
      correctAnswer: 1,
      explanation: 'A <strong> elem szemantikai jelentéssel bír (fontos tartalom), míg a <b> csak vizuális formázást (félkövér) jelent.'
    },
    {
      question: 'Hogyan hozunk létre hivatkozást egy másik weboldalra?',
      options: [
        '<link>website.com</link>',
        '<href="website.com">Link</href>',
        '<a href="website.com">Link</a>',
        '<url>website.com</url>'
      ],
      correctAnswer: 2,
      explanation: 'Hivatkozást az <a> elem href attribútumával hozhatunk létre.'
    },
    {
      question: 'Melyik a helyes módja kép beillesztésének?',
      options: [
        '<img href="kep.jpg">',
        '<image src="kep.jpg">',
        '<img src="kep.jpg">',
        '<picture source="kep.jpg">'
      ],
      correctAnswer: 2,
      explanation: 'Képet az <img> elemmel és annak src attribútumával illeszthetünk be.'
    },
    {
      question: 'Mi az alt attribútum szerepe az img elemnél?',
      options: [
        'A kép címét adja meg',
        'A kép helyettesítő szövegét adja meg',
        'A kép szerzői jogait jelzi',
        'A kép méretét állítja be'
      ],
      correctAnswer: 1,
      explanation: 'Az alt attribútum a kép helyettesítő szövegét adja meg, amely akkor jelenik meg, ha a kép nem tölthető be, illetve a képernyőolvasók is ezt olvassák fel.'
    },
    {
      question: 'Melyik elem használatos számozatlan lista létrehozására?',
      options: [
        '<list>',
        '<ul>',
        '<ol>',
        '<dl>'
      ],
      correctAnswer: 1,
      explanation: 'A <ul> (unordered list) elem szolgál számozatlan listák létrehozására.'
    },
    {
      question: 'Hogyan hozunk létre táblázatot HTML-ben?',
      options: [
        '<table><tr><td>',
        '<grid><row><cell>',
        '<tab><tr><td>',
        '<sheet><line><data>'
      ],
      correctAnswer: 0,
      explanation: 'Táblázatot a <table>, <tr> (table row) és <td> (table data) elemekkel hozunk létre.'
    },
    {
      question: 'Mi a különbség a <td> és <th> között táblázatokban?',
      options: [
        'Nincs különbség',
        'A <th> fejléc cellát, a <td> adat cellát jelöl',
        'A <td> fejléc cellát, a <th> adat cellát jelöl',
        'A <th> táblázat címet, a <td> dátumot jelöl'
      ],
      correctAnswer: 1,
      explanation: 'A <th> (table header) fejléc cellát, míg a <td> (table data) normál adat cellát jelöl a táblázatban.'
    },
    {
      question: 'Melyik a helyes módja sortörés beszúrásának?',
      options: [
        '<break>',
        '<br>',
        '<newline>',
        '<nl>'
      ],
      correctAnswer: 1,
      explanation: 'Sortörést a <br> elemmel szúrhatunk be. Ez egy üres elem, nincs záró tagje.'
    },
    {
      question: 'Hogyan definiálunk bekezdést HTML-ben?',
      options: [
        '<paragraph>',
        '<text>',
        '<p>',
        '<para>'
      ],
      correctAnswer: 2,
      explanation: 'Bekezdést a <p> elemmel hozunk létre HTML-ben.'
    },
    {
      question: 'Mi az alapértelmezett megjelenése a <div> elemnek?',
      options: [
        'Inline elem, nincs sortörés előtte és utána',
        'Blokkszintű elem, új sorban kezdődik',
        'Inline-block elem, más elemekkel egy sorban lehet',
        'Nem látható elem'
      ],
      correctAnswer: 1,
      explanation: 'A <div> blokkszintű elem, ami azt jelenti, hogy új sorban kezdődik és teljes szélességet foglal el.'
    },
    {
      question: 'Melyik attribútummal nyitunk meg egy linket új ablakban?',
      options: [
        'new="true"',
        'target="_blank"',
        'window="new"',
        'open="newwindow"'
      ],
      correctAnswer: 1,
      explanation: 'A target="_blank" attribútummal érhetjük el, hogy a link új ablakban vagy fülön nyíljon meg.'
    },
    {
      question: 'Mi a szerepe a colspan attribútumnak táblázatokban?',
      options: [
        'Sorok összevonása',
        'Oszlopok összevonása',
        'Cellaköz beállítása',
        'Cellaméret növelése'
      ],
      correctAnswer: 1,
      explanation: 'A colspan attribútummal oszlopokat vonhatunk össze egy táblázatban, megadva hogy hány oszlopot foglaljon el a cella.'
    },
    {
      question: 'Melyik elem jelöli a HTML dokumentum törzsét?',
      options: [
        '<content>',
        '<main>',
        '<body>',
        '<doc>'
      ],
      correctAnswer: 2,
      explanation: 'A <body> elem tartalmazza a HTML dokumentum törzsét, ami a böngészőben megjelenő tartalom.'
    },
    {
      question: 'Mi a role attribútum szerepe?',
      options: [
        'Az elem stílusának meghatározása',
        'Az elem viselkedésének szabályozása',
        'Az elem szemantikai szerepének jelzése',
        'Az elem pozíciójának beállítása'
      ],
      correctAnswer: 2,
      explanation: 'A role attribútum az elem szemantikai szerepét jelzi, ami fontos az akadálymentesítés szempontjából.'
    },
    {
      question: 'Hogyan kommentezünk HTML-ben?',
      options: [
        '// Komment',
        '/* Komment */',
        '<!-- Komment -->',
        '# Komment'
      ],
      correctAnswer: 2,
      explanation: 'HTML-ben a <!-- és --> jelek között helyezhetünk el kommenteket.'
    },
    {
      question: 'Mi a különbség a <section> és <div> között?',
      options: [
        'Nincs különbség',
        'A <section> szemantikai jelentéssel bír, a <div> általános konténer',
        'A <div> szemantikai jelentéssel bír, a <section> általános konténer',
        'A <section> csak szöveget tartalmazhat'
      ],
      correctAnswer: 1,
      explanation: 'A <section> szemantikai jelentéssel bír (tartalmi egységet jelöl), míg a <div> egy általános konténer elem.'
    },
    {
      question: 'Melyik a helyes módja e-mail link létrehozásának?',
      options: [
        '<a link="mailto:email@example.com">',
        '<email>email@example.com</email>',
        '<a href="mailto:email@example.com">',
        '<mail>email@example.com</mail>'
      ],
      correctAnswer: 2,
      explanation: 'E-mail linket a mailto: protokoll használatával hozhatunk létre az <a> elem href attribútumában.'
    },
    {
      question: 'Mire használjuk a <header> elemet?',
      options: [
        'Csak a weboldal fejlécéhez',
        'Csak címsorok csoportosítására',
        'Bármely szakasz vagy oldal bevezető részéhez',
        'Kizárólag logó elhelyezésére'
      ],
      correctAnswer: 2,
      explanation: 'A <header> elem használható az oldal fejlécéhez és bármely szakasz (section, article) bevezető részéhez is.'
    },
    {
      question: 'Mi a helyes használata a rowspan attribútumnak?',
      options: [
        'Csak a <td> elemben használható',
        'Csak a <th> elemben használható',
        'Mind <td>, mind <th> elemben használható',
        'Csak a <tr> elemben használható'
      ],
      correctAnswer: 2,
      explanation: 'A rowspan attribútum használható mind <td>, mind <th> elemekben, és megadja, hogy hány sort foglaljon el a cella.'
    },
    {
      question: 'Melyik elem használatos idézetek megjelölésére?',
      options: [
        '<cite>',
        '<quote>',
        '<blockquote>',
        '<q>'
      ],
      correctAnswer: 2,
      explanation: 'Hosszabb idézetekhez a <blockquote> elemet használjuk, míg rövid, sorbeli idézetekhez a <q> elemet.'
    },
    {
      question: 'Mi a <nav> elem szerepe?',
      options: [
        'Csak külső linkek gyűjteménye',
        'Navigációs linkek csoportosítása',
        'Új ablak megnyitása',
        'Képek navigálása'
      ],
      correctAnswer: 1,
      explanation: 'A <nav> elem a főbb navigációs linkek csoportosítására szolgál egy weboldalon.'
    },
    {
      question: 'Hogyan adjuk meg egy weboldal karakterkódolását?',
      options: [
        '<encoding>UTF-8</encoding>',
        '<charset>UTF-8</charset>',
        '<meta charset="UTF-8">',
        '<unicode>UTF-8</unicode>'
      ],
      correctAnswer: 2,
      explanation: 'A karakterkódolást a <meta charset="UTF-8"> elemmel adjuk meg a <head> részben.'
    }
  ]}
/>