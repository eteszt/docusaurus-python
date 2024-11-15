---
id: listak
title: Listák Pythonban
sidebar_label: Lista
---

# Listák Pythonban

A lista az egyik leggyakrabban használt adatszerkezet a Pythonban. Elemek sorozatát tárolja, és nagyon rugalmasan használható.

## Lista létrehozása

Listát többféleképpen hozhatunk létre:

```python
# Üres lista
szamok = []

# Lista kezdeti értékekkel
gyumolcsok = ["alma", "körte", "banán"]
szamok = [1, 2, 3, 4, 5]

# Vegyes típusú elemek egy listában
vegyes = [1, "alma", 3.14, True]
```

## Listakezelés alapműveletei

### Elemek elérése

A lista elemeit indexeléssel érhetjük el. Az indexelés 0-tól kezdődik:

```python
gyumolcsok = ["alma", "körte", "banán"]
print(gyumolcsok[0])    # "alma"
print(gyumolcsok[1])    # "körte"
print(gyumolcsok[-1])   # "banán" (utolsó elem)
```

### Lista módosítása

```python
gyumolcsok = ["alma", "körte", "banán"]

# Elem módosítása
gyumolcsok[1] = "szilva"
print(gyumolcsok)   # ["alma", "szilva", "banán"]

# Új elem hozzáadása
gyumolcsok.append("narancs")
print(gyumolcsok)   # ["alma", "szilva", "banán", "narancs"]

# Elem beszúrása adott pozícióra
gyumolcsok.insert(1, "körte")
print(gyumolcsok)   # ["alma", "körte", "szilva", "banán", "narancs"]

# Elem törlése
del gyumolcsok[2]
print(gyumolcsok)   # ["alma", "körte", "banán", "narancs"]
```

## Gyakori lista műveletek

### Lista hossza

```python
gyumolcsok = ["alma", "körte", "banán"]
hossz = len(gyumolcsok)
print(hossz)    # 3
```

### Elemet tartalmaz-e a lista

```python
gyumolcsok = ["alma", "körte", "banán"]
van_alma = "alma" in gyumolcsok
print(van_alma)     # True
van_szilva = "szilva" in gyumolcsok
print(van_szilva)   # False
```

### Lista bejárása

```python
# For ciklussal
gyumolcsok = ["alma", "körte", "banán"]
for gyumolcs in gyumolcsok:
    print(gyumolcs)

# Indexekkel és hosszal
for i in range(len(gyumolcsok)):
    print(f"{i}. elem: {gyumolcsok[i]}")
```

## Gyakori listametódusok

```python
szamok = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]

# Lista rendezése
szamok.sort()
print(szamok)   # [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

# Lista megfordítása
szamok.reverse()
print(szamok)   # [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]

# Elem előfordulásának száma
otosok = szamok.count(5)
print(otosok)   # 3

# Elem első előfordulásának indexe
index = szamok.index(4)
print(index)    # 5
```

## Gyakorló feladatok

1. Készíts egy listát a kedvenc filmjeidből! Írasd ki:
   - A lista hosszát
   - Az első és utolsó filmet
   - Adj hozzá egy új filmet
   - Töröld ki az egyik filmet

```python
# Megoldás
filmek = ["Star Wars", "Matrix", "Eredet"]
print(len(filmek))          # 3
print(filmek[0])           # "Star Wars"
print(filmek[-1])          # "Eredet"
filmek.append("Titanic")
del filmek[1]
print(filmek)              # ["Star Wars", "Eredet", "Titanic"]
```

2. Készíts egy számlistát és számold ki az elemek összegét és átlagát!

```python
# Megoldás
szamok = [10, 20, 30, 40, 50]
osszeg = sum(szamok)
atlag = osszeg / len(szamok)
print(f"Összeg: {osszeg}, Átlag: {atlag}")  # Összeg: 150, Átlag: 30.0
```

3. Hozz létre egy listát a hét napjaiból, majd írasd ki a munkanapokat és a hétvégi napokat külön!

```python
# Megoldás
napok = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"]
munkanapok = napok[0:5]
hetvege = napok[5:7]
print("Munkanapok:", munkanapok)
print("Hétvége:", hetvege)
```

:::tip Tipp
A listáknál mindig figyelj arra, hogy:
- Az indexelés 0-tól kezdődik
- A negatív indexek a lista végétől visszafelé számolnak (-1 az utolsó elem)
- A lista hosszát a `len()` függvénnyel kaphatod meg
:::

## Ellenőrző kérdések

1. Mi a különbség az `append()` és az `insert()` között?
2. Hogyan kérdezzük le egy lista hosszát?
3. Hogyan lehet ellenőrizni, hogy egy elem szerepel-e a listában?
4. Mit csinál a `sort()` metódus?
5. Hogyan érjük el egy lista utolsó elemét?