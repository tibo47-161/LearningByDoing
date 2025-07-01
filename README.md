# Learning by Doing – Exam Prep System

> **Hinweis zum Start für alle Module:**
> - **HTML, CSS, JavaScript:**
>   - Öffne die jeweiligen Playground-HTML-Dateien im Browser (z.B. per Doppelklick oder mit Live Server in VS Code).
>   - Schreibe deinen Code im Editor und erhalte sofort Feedback und Vorschau.
> - **Python:**
>   - Playground: Öffne die HTML-Datei im Browser (Brython, aktuelle Browser empfohlen).
>   - Terminal-Modul: Starte das Skript im Terminal mit `python LEARNING-SYSTEM/python-modules/01-python-basics/learning_environment.py`.
>   - **Achtung:** Das Terminal-Modul funktioniert nur im Terminal, nicht im Browser!
> - **TypeScript:**
>   - Playground: Öffne die HTML-Datei im Browser. TypeScript wird live zu JavaScript transpiliert und ausgeführt.
> - **Java:**
>   - Playground: Öffne die HTML-Datei im Browser. Es gibt einen Editor, Aufgaben und Syntax-Check, aber keine echte Ausführung im Browser. Nutze zum Testen einen Online-Java-Compiler (z.B. JDoodle, Link im Playground).
> - **SQL:**
>   - Playground: Öffne die HTML-Datei im Browser. Es wird eine Mini-Datenbank im Browser simuliert (sql.js). Schreibe und teste SQL-Befehle direkt.
> - **React:**
>   - Playground: Öffne die HTML-Datei im Browser. JSX/React-Code wird live mit Babel ausgeführt und gerendert.
> - **Tailwind CSS:**
>   - Beispiele und Playgrounds im Ordner `tailwind/` und `LEARNING-SYSTEM/tailwind-examples/`. Öffne die HTML-Dateien im Browser.
> - **Allgemein:**
>   - Nutze einen aktuellen Browser (Chrome, Firefox, Edge) für alle Playgrounds.
>   - Bei Problemen: Browser-Konsole (F12) prüfen, README und Hinweise im Playground beachten.

**Lerne interaktiv und praxisnah für HTML, CSS, JavaScript, Python, React, TypeScript, Java und SQL!**

## Philosophie
- **Learning by Doing:** Du lernst durch direktes Ausprobieren, Coden und sofortiges Feedback.
- **Prüfungsrelevant:** Alle Module und Aufgaben sind auf typische Prüfungsanforderungen abgestimmt.
- **ADHS-freundlich:** Kurze Aufgaben, klare Struktur, motivierendes Feedback, Fokusmodus.
- **Modular:** Jedes Thema ist als eigenständiges, interaktives Modul aufgebaut.

## Modulübersicht
- **Web-Fundamentals:** Interaktive Playgrounds für HTML, CSS, JavaScript (mit Aufgaben, Live-Editor, Feedback)
- **Python, TypeScript, Java, SQL, React:** Jeweils interaktiver Playground mit 10 didaktisch aufgebauten Aufgaben, Info-Boxen, Lösung, sofortigem Feedback und Fokusmodus
- **Tailwind CSS:** Utility-First-Beispiele und Playground

## Quickstart – Benutzeranleitung
1. **Playground öffnen:**
   - Öffne die gewünschte Playground-HTML-Datei im Browser (z.B. `LEARNING-SYSTEM/sql-learning/sql-playground.html`)
2. **Aufgabe auswählen:**
   - Die Aufgaben werden nacheinander angezeigt. Lies die Beschreibung und den Hinweis.
3. **Code schreiben:**
   - Schreibe deine Lösung in den Editor.
4. **Überprüfen:**
   - Klicke auf „Ausführen“ (bzw. „Überprüfen“ bei Java), um sofort Feedback zu erhalten.
5. **Lösung anzeigen:**
   - Wenn du nicht weiterkommst, klicke auf „Lösung anzeigen“.
6. **Nächste Aufgabe:**
   - Klicke auf „Nächste Aufgabe“, um weiterzulernen.
7. **Fokusmodus:**
   - Aktiviere den Fokusmodus für ablenkungsfreies Lernen.

## Hinweise
- Dein Fortschritt wird automatisch gespeichert (wo unterstützt)
- Für Fragen oder Erweiterungen: Siehe Implementierungsanweisung 

## Bedienungsanleitung für klassische Moduldateien

Neben den interaktiven Playgrounds gibt es klassische Moduldateien, die als Übungs- und Referenzdateien dienen. So nutzt du sie:

- **Java (`java/basics/JavaBasics.java`):**
  - Öffne die Datei in deiner Java-IDE (z.B. IntelliJ, Eclipse, VS Code mit Java-Extension).
  - Lies die Kommentare und Aufgabenstellungen im Code.
  - Schreibe deine Lösungen direkt in die vorgesehenen Bereiche.
  - Führe das Programm in der IDE aus, um deine Lösungen zu testen.

- **TypeScript (`typescript/basics/01_typescript_basics.ts`):**
  - Öffne die Datei in einem Editor oder einer IDE mit TypeScript-Unterstützung.
  - Bearbeite die Aufgaben im Code.
  - Kompiliere die Datei mit `tsc` oder führe sie mit einem Online-TS-Playground aus.

- **SQL (`sql/basics/01_sql_basics.sql`):**
  - Öffne die Datei in einem SQL-Editor oder einer Datenbank-IDE (z.B. DBeaver, DataGrip, Online-SQL-Editor).
  - Arbeite die Aufgaben von oben nach unten durch und führe die SQL-Befehle in einer Testdatenbank aus.

- **React-Komponenten (`react/components/`, `react/examples/`):**
  - Öffne die Dateien in einer IDE mit React-Unterstützung.
  - Lies die Kommentare und probiere die Komponenten im Kontext einer React-App aus.
  - Passe die Komponenten nach Bedarf an oder nutze sie als Vorlage.

- **Tailwind CSS Beispiele (`tailwind/examples/`, `LEARNING-SYSTEM/tailwind-examples/`):**
  - Öffne die HTML-Dateien im Browser.
  - Experimentiere mit den Utility-Klassen direkt im Code.

> **Hinweis:** Diese klassischen Moduldateien bieten keine automatische Auswertung oder Live-Feedback. Sie sind als Übungs- und Nachschlagewerk gedacht. Für interaktives Lernen nutze die Playgrounds! 

## Setup

1. **Repository klonen:**
   ```
   git clone https://github.com/tibo47-161/LearningByDoing.git
   cd LearningByDoing
   ```
2. **(Optional) Live Server für Playgrounds:**
   - Installiere die VS Code Extension „Live Server“ oder nutze einen beliebigen lokalen Webserver.
   - Alternativ: Öffne die HTML-Dateien direkt im Browser (Doppelklick).
3. **Python-Terminal-Modul:**
   - Stelle sicher, dass Python installiert ist (`python --version`).
   - Starte das Skript wie in der Anleitung oben beschrieben.

## Nutzungsbeispiele

### Interaktiver Playground (z.B. TypeScript)
1. Öffne `LEARNING-SYSTEM/typescript-playground.html` im Browser.
2. Wähle eine Aufgabe aus, schreibe deinen TypeScript-Code in den Editor.
3. Klicke auf „Ausführen“ und erhalte sofort Feedback.
4. Klicke auf „Lösung anzeigen“, wenn du nicht weiterkommst.

### Klassische Moduldatei (z.B. Java)
1. Öffne `java/basics/JavaBasics.java` in deiner IDE (z.B. IntelliJ, Eclipse).
2. Lies die Aufgabenstellung im Code und schreibe deine Lösung in die vorgesehenen Bereiche.
3. Führe das Programm in der IDE aus, um deine Lösung zu testen.

## Screenshots (Platzhalter)

> Hier kannst du eigene Screenshots der Playgrounds und Module einfügen, z.B.:
>
> ![TypeScript Playground Screenshot](./docs/screenshots/typescript-playground.png)
> ![SQL Playground Screenshot](./docs/screenshots/sql-playground.png)
> ![Java Modul Screenshot](./docs/screenshots/java-basics.png) 