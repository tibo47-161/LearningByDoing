// TypeScript Grundlagen – Learning by Doing
// Prüfungsrelevante Module & Aufgaben
// -----------------------------------

console.log('=== TypeScript Grundlagen: Learning by Doing ===\n');

// 1. Variablen & Typen
console.log('1. Variablen & Typen');
// Info-Box
console.log('[INFO] TypeScript ist wie JavaScript, aber mit Typen!');
console.log('[ESELSBRÜCKE] let/const + :typ = typsicher!');
console.log('[REMINDER] Typen helfen Fehler früh zu erkennen.');
// Starter-Code
// let age: number = ...;
// const name: string = ...;
// let isActive: boolean = ...;
// Deine Lösung:

console.log();

// 2. Operatoren
console.log('2. Operatoren');
console.log('[INFO] Operatoren: +, -, *, /, %, ==, ===, !=, !==, <, >, <=, >=');
console.log('[ESELSBRÜCKE] === prüft Wert UND Typ!');
console.log('[REMINDER] == kann zu unerwarteten Ergebnissen führen.');
// Starter-Code
// let a: number = 10, b: number = 3;
// let sum: number = ...;
// let isEqual: boolean = ...;
// Deine Lösung:

console.log();

// 3. Kontrollstrukturen (if/else, switch)
console.log('3. Kontrollstrukturen');
console.log('[INFO] Mit if/else und switch steuerst du den Programmfluss.');
console.log('[ESELSBRÜCKE] if (Bedingung) { ... } else { ... }');
console.log('[REMINDER] switch für viele Fälle mit gleicher Variable!');
// Starter-Code
// let grade: number = ...;
// if (...) {
//   console.log('Bestanden!');
// } else {
//   console.log('Nicht bestanden!');
// }
// switch (grade) { ... }
// Deine Lösung:

console.log();

// 4. Schleifen (for, while)
console.log('4. Schleifen');
console.log('[INFO] Mit Schleifen wiederholst du Anweisungen.');
console.log('[ESELSBRÜCKE] for (let i=0; i<...; i++) { ... }');
console.log('[REMINDER] Endlosschleifen vermeiden!');
// Starter-Code
// for (let i = 1; i <= 5; i++) {
//   console.log(i);
// }
// let j = 1;
// while (j <= 5) { ... }
// Deine Lösung:

console.log();

// 5. Funktionen
console.log('5. Funktionen');
console.log('[INFO] Funktionen kapseln wiederverwendbaren Code.');
console.log('[ESELSBRÜCKE] function name(param: Typ): Rückgabetyp { ... }');
console.log('[REMINDER] Typen für Parameter und Rückgabe angeben!');
// Starter-Code
// function add(x: number, y: number): number { ... }
// Deine Lösung:
// console.log(add(2,3));

console.log();

// 6. Arrays & Tupel
console.log('6. Arrays & Tupel');
console.log('[INFO] Arrays speichern mehrere Werte, Tupel haben feste Länge und Typenfolge.');
console.log('[ESELSBRÜCKE] let arr: number[] = [1,2,3]; let tup: [string, number] = ["Max", 25];');
console.log('[REMINDER] Tupel sind typsicher und positionsabhängig!');
// Starter-Code
// let zahlen: number[] = [1,2,3,4,5];
// let person: [string, number] = ["Anna", 30];
// Deine Lösung:

console.log();

// 7. Interfaces & Typen
console.log('7. Interfaces & Typen');
console.log('[INFO] Interfaces und Typen beschreiben die Struktur von Objekten.');
console.log('[ESELSBRÜCKE] interface User { name: string; age: number; }');
console.log('[REMINDER] Mit ? sind Felder optional!');
// Starter-Code
// interface User { ... }
// let user: User = { ... };
// Deine Lösung:

console.log();

// 8. Klassen & OOP
console.log('8. Klassen & OOP');
console.log('[INFO] Klassen sind Baupläne, Objekte sind Instanzen.');
console.log('[ESELSBRÜCKE] class Car { ... } let myCar = new Car();');
console.log('[REMINDER] Konstruktor initialisiert das Objekt!');
// Starter-Code
// class Car { ... }
// let myCar = new Car();
// Deine Lösung:

console.log();

// 9. Generics
console.log('9. Generics');
console.log('[INFO] Generics machen Funktionen und Klassen flexibel für verschiedene Typen.');
console.log('[ESELSBRÜCKE] function identity<T>(arg: T): T { return arg; }');
console.log('[REMINDER] <T> steht für einen beliebigen Typ!');
// Starter-Code
// function identity<T>(arg: T): T { ... }
// Deine Lösung:

console.log();

// 10. Fehlerbehandlung
console.log('10. Fehlerbehandlung');
console.log('[INFO] Fehler abfangen mit try-catch.');
console.log('[ESELSBRÜCKE] try { ... } catch (e) { ... }');
console.log('[REMINDER] Fehler immer sinnvoll behandeln!');
// Starter-Code
// try {
//   throw new Error('Oops!');
// } catch (e) {
//   console.log('Fehler:', e.message);
// }
// Deine Lösung:

console.log();

// 11. Mini-Projekt: Zähler
console.log('11. Mini-Projekt: Zähler');
console.log('[INFO] Kombiniere Variablen, Schleifen, Funktionen, OOP!');
console.log('[ESELSBRÜCKE] Alles was du gelernt hast, anwenden!');
console.log('[REMINDER] Saubere Struktur und Kommentare!');
// Starter-Code
// class Counter { ... }
// let c = new Counter();
// c.increment();
// console.log(c.getValue());
// Deine Lösung:

console.log();

console.log('=== Ende der TypeScript-Grundlagen ==='); 