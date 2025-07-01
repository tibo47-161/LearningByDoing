-- SQL Grundlagen – Learning by Doing
-- Prüfungsrelevante Module & Aufgaben
-- -----------------------------------

-- 1. SELECT
-- [INFO] Mit SELECT wählst du Daten aus einer Tabelle aus.
-- [ESELSBRÜCKE] SELECT spalten FROM tabelle;
-- [REMINDER] * wählt alle Spalten!
-- Starter-Code:
-- SELECT * FROM kunden;
-- Deine Lösung:


-- 2. WHERE
-- [INFO] WHERE filtert Zeilen nach Bedingungen.
-- [ESELSBRÜCKE] WHERE bedingung
-- [REMINDER] =, <, >, LIKE, BETWEEN, IN, AND, OR
-- Starter-Code:
-- SELECT name FROM kunden WHERE stadt = 'Berlin';
-- Deine Lösung:


-- 3. JOIN
-- [INFO] JOIN verbindet Daten aus mehreren Tabellen.
-- [ESELSBRÜCKE] INNER JOIN, LEFT JOIN, ...
-- [REMINDER] ON gibt die Verknüpfungsbedingung an!
-- Starter-Code:
-- SELECT k.name, b.betrag FROM kunden k INNER JOIN bestellungen b ON k.id = b.kunden_id;
-- Deine Lösung:


-- 4. GROUP BY
-- [INFO] GROUP BY fasst Zeilen zu Gruppen zusammen.
-- [ESELSBRÜCKE] GROUP BY spalte
-- [REMINDER] Oft mit Aggregatfunktionen (COUNT, SUM, ...)
-- Starter-Code:
-- SELECT stadt, COUNT(*) FROM kunden GROUP BY stadt;
-- Deine Lösung:


-- 5. Aggregatfunktionen
-- [INFO] Aggregatfunktionen berechnen Werte über mehrere Zeilen.
-- [ESELSBRÜCKE] COUNT, SUM, AVG, MIN, MAX
-- [REMINDER] Immer mit GROUP BY kombinieren, wenn gruppiert wird!
-- Starter-Code:
-- SELECT AVG(betrag) FROM bestellungen;
-- Deine Lösung:


-- 6. Subqueries
-- [INFO] Subqueries sind verschachtelte Abfragen.
-- [ESELSBRÜCKE] (SELECT ...)
-- [REMINDER] Können im SELECT, FROM oder WHERE stehen!
-- Starter-Code:
-- SELECT name FROM kunden WHERE id IN (SELECT kunden_id FROM bestellungen WHERE betrag > 100);
-- Deine Lösung:


-- 7. INSERT
-- [INFO] INSERT fügt neue Daten ein.
-- [ESELSBRÜCKE] INSERT INTO tabelle (spalten) VALUES (...);
-- [REMINDER] Alle Pflichtspalten müssen Werte bekommen!
-- Starter-Code:
-- INSERT INTO kunden (name, stadt) VALUES ('Anna', 'Berlin');
-- Deine Lösung:


-- 8. UPDATE
-- [INFO] UPDATE ändert bestehende Daten.
-- [ESELSBRÜCKE] UPDATE tabelle SET spalte = wert WHERE ...
-- [REMINDER] Ohne WHERE werden ALLE Zeilen geändert!
-- Starter-Code:
-- UPDATE kunden SET stadt = 'Hamburg' WHERE name = 'Anna';
-- Deine Lösung:


-- 9. DELETE
-- [INFO] DELETE entfernt Daten.
-- [ESELSBRÜCKE] DELETE FROM tabelle WHERE ...
-- [REMINDER] Ohne WHERE werden ALLE Zeilen gelöscht!
-- Starter-Code:
-- DELETE FROM kunden WHERE name = 'Anna';
-- Deine Lösung:


-- 10. CREATE TABLE
-- [INFO] Mit CREATE TABLE legst du neue Tabellen an.
-- [ESELSBRÜCKE] CREATE TABLE tabelle (...)
-- [REMINDER] Datentypen und PRIMARY KEY angeben!
-- Starter-Code:
-- CREATE TABLE kunden (
--   id INTEGER PRIMARY KEY,
--   name TEXT,
--   stadt TEXT
-- );
-- Deine Lösung:


-- 11. Mini-Projekt: Kunden & Bestellungen
-- [INFO] Kombiniere SELECT, JOIN, GROUP BY, INSERT, UPDATE, DELETE!
-- [ESELSBRÜCKE] Alles was du gelernt hast, anwenden!
-- [REMINDER] Saubere Struktur und Kommentare!
-- Deine Lösung:


-- === Ende der SQL-Grundlagen === 