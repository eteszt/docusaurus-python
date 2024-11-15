---
id: dictionary
title: Dictionary (Szótár) Pythonban
sidebar_label: Dictionary
---

# Dictionary (Szótár) Pythonban

A dictionary (szótár) egy olyan adatszerkezet, amely kulcs-érték párokat tárol. Minden kulcsnak egyedinek kell lennie, és bármilyen érték tartozhat hozzá.

## Dictionary létrehozása

Szótárat többféleképpen hozhatunk létre:

```python
# Üres szótár
ures_szotar = {}

# Szótár kezdeti értékekkel
szemely = {
    "nev": "Kiss János",
    "kor": 25,
    "varos": "Budapest"
}

# Vegyes típusú értékek
tanulo = {
    "nev": "Nagy Éva",
    "jegyek": [4, 5, 3, 5],
    "aktiv": True
}
```

## Alapműveletek

### Értékek elérése és módosítása

```python
szemely = {"nev": "Kiss János", "kor": 25}

# Érték lekérése kulcs alapján
print(szemely["nev"])     # "Kiss János"

# Érték módosítása
szemely["kor"] = 26
print(szemely)           # {"nev": "Kiss János", "kor": 26}

# Új kulcs-érték pár hozzáadása
szemely["varos"] = "Budapest"
print(szemely)           # {"nev": "Kiss János", "kor": 26, "varos": "Budapest"}

# Érték biztonságos lekérése (ha a kulcs nem létezik, None-t ad vissza)
email = szemely.get("email")
print(email)            # None

# Alapértelmezett érték megadása
telefon = szemely.get("telefon", "nincs megadva")
print(telefon)          # "nincs megadva"
```

### Műveletek kulcsokkal és értékekkel

```python
szemely = {
    "nev": "Kiss János",
    "kor": 25,
    "varos": "Budapest"
}

# Kulcsok lekérése
kulcsok = szemely.keys()
print(list(kulcsok))    # ["nev", "kor", "varos"]

# Értékek lekérése
ertekek = szemely.values()
print(list(ertekek))    # ["Kiss János", 25, "Budapest"]

# Kulcs-érték párok lekérése
parok = szemely.items()
print(list(parok))      # [("nev", "Kiss János"), ("kor", 25), ("varos", "Budapest")]
```

## Gyakori műveletek

### Elem törlése

```python
szemely = {"nev": "Kiss János", "kor": 25, "varos": "Budapest"}

# Elem törlése kulcs alapján
del szemely["varos"]
print(szemely)          # {"nev": "Kiss János", "kor": 25}

# Elem törlése és visszaadása
kor = szemely.pop("kor")
print(kor)              # 25
print(szemely)          # {"nev": "Kiss János"}
```

### Szótár bejárása

```python
szemely = {
    "nev": "Kiss János",
    "kor": 25,
    "varos": "Budapest"
}

# Kulcsok bejárása
for kulcs in szemely:
    print(f"Kulcs: {kulcs}, Érték: {szemely[kulcs]}")

# Kulcs-érték párok bejárása
for kulcs, ertek in szemely.items():
    print(f"{kulcs}: {ertek}")
```

## Gyakorló feladatok

1. Készíts szótárat egy termékről a következő adatokkal: név, ár, raktáron (darabszám)!
   Módosítsd az árat és a raktárkészletet!

```python
# Megoldás
termek = {
    "nev": "Laptop",
    "ar": 250000,
    "raktaron": 5
}

termek["ar"] = 245000
termek["raktaron"] -= 1
print(termek)
```

2. Készíts egy szótárat, amely tanulók nevét és jegyeit tartalmazza! Számold ki egy tanuló átlagát!

```python
# Megoldás
tanulok = {
    "Kiss Péter": [4, 5, 3, 5, 4],
    "Nagy Anna": [5, 5, 5, 4, 5]
}

anna_jegyei = tanulok["Nagy Anna"]
atlag = sum(anna_jegyei) / len(anna_jegyei)
print(f"Nagy Anna átlaga: {atlag}")  # 4.8
```

3. Készíts egy szótárat, amely országokat és fővárosokat tartalmaz! 
   Készíts egy egyszerű kvízjátékot, ahol a program bekéri a fővárost!

```python
# Megoldás
orszagok = {
    "Magyarország": "Budapest",
    "Németország": "Berlin",
    "Franciaország": "Párizs"
}

orszag = "Magyarország"
fovaros = input(f"Mi {orszag} fővárosa? ")
if fovaros == orszagok[orszag]:
    print("Helyes!")
else:
    print(f"Sajnos nem. A helyes válasz: {orszagok[orszag]}")
```

## Mikor használjunk dictionary-t?

A dictionary használata akkor előnyös, amikor:

1. **Gyors keresésre** van szükség
   - A dictionary kulcs alapján nagyon gyorsan megtalálja az értékeket
   - Szemben a listával, ahol végig kell menni az elemeken

2. **Természetes kulcs-érték kapcsolat** van az adatok között
   - Például: személyi szám - személy adatai
   - Termékkód - termék részletei
   - Felhasználónév - jelszó

3. **Adatok csoportosítására** van szükség
   - Például egy személy különböző tulajdonságainak tárolására
   - Konfigurációs beállítások tárolására

4. **Nagy adatmennyiségnél** fontos a gyors elérés
   - Lista helyett dictionary használata nagy teljesítményjavulást eredményezhet
   - Például telefonkönyv: név alapján keresünk számot

:::tip Tippek
- Mindig egyedi kulcsokat használj
- A kulcsok csak megváltoztathatatlan (immutable) típusúak lehetnek (pl. string, szám, tuple)
- Ha gyakran kell keresni az adatok között, válaszd a dictionary-t lista helyett
:::

## Ellenőrző kérdések

1. Mi a különbség a lista és a dictionary között?
2. Hogyan kérhetünk le biztonságosan egy értéket a dictionary-ből?
3. Milyen típusú lehet egy dictionary kulcsa?
4. Hogyan járhatjuk be egy dictionary kulcsait és értékeit?
5. Mikor érdemes dictionary-t használni lista helyett?