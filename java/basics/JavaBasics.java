// Java Grundlagen – Learning by Doing
// Prüfungsrelevante Module & Aufgaben
// -----------------------------------

public class JavaBasics {
    public static void main(String[] args) {
        System.out.println("=== Java Grundlagen: Learning by Doing ===\n");

        // 1. Variablen & Datentypen
        System.out.println("1. Variablen & Datentypen");
        // Info-Box
        System.out.println("[INFO] Variablen speichern Werte. Datentypen bestimmen, welche Werte gespeichert werden können.");
        System.out.println("[ESELSBRÜCKE] int = ganze Zahl, double = Kommazahl, String = Text, boolean = true/false");
        System.out.println("[REMINDER] Variablen müssen vor Benutzung deklariert werden!");
        // Starter-Code
        // int alter = ...;
        // String name = ...;
        // double groesse = ...;
        // boolean istStudent = ...;
        // Deine Lösung:
        
        System.out.println();

        // 2. Operatoren
        System.out.println("2. Operatoren");
        System.out.println("[INFO] Operatoren führen Berechnungen oder Vergleiche durch: +, -, *, /, %, ==, !=, <, >, <=, >=");
        System.out.println("[ESELSBRÜCKE] == prüft Gleichheit, = weist zu!");
        System.out.println("[REMINDER] Achtung bei Ganzzahl-Division!");
        // Starter-Code
        // int a = 10, b = 3;
        // int summe = ...;
        // boolean gleich = ...;
        // Deine Lösung:
        
        System.out.println();

        // 3. Kontrollstrukturen (if/else, switch)
        System.out.println("3. Kontrollstrukturen");
        System.out.println("[INFO] Mit if/else und switch steuerst du den Programmfluss.");
        System.out.println("[ESELSBRÜCKE] if (Bedingung) { ... } else { ... }");
        System.out.println("[REMINDER] switch für viele Fälle mit gleicher Variable!");
        // Starter-Code
        // int note = ...;
        // if (...) {
        //     System.out.println("Bestanden!");
        // } else {
        //     System.out.println("Nicht bestanden!");
        // }
        // switch (note) { ... }
        // Deine Lösung:
        
        System.out.println();

        // 4. Schleifen (for, while)
        System.out.println("4. Schleifen");
        System.out.println("[INFO] Mit Schleifen wiederholst du Anweisungen.");
        System.out.println("[ESELSBRÜCKE] for (int i=0; i<...; i++) { ... }");
        System.out.println("[REMINDER] Endlosschleifen vermeiden!");
        // Starter-Code
        // for (int i = 1; i <= 5; i++) {
        //     System.out.println(i);
        // }
        // int j = 1;
        // while (j <= 5) { ... }
        // Deine Lösung:
        
        System.out.println();

        // 5. Methoden
        System.out.println("5. Methoden");
        System.out.println("[INFO] Methoden sind wiederverwendbare Code-Blöcke.");
        System.out.println("[ESELSBRÜCKE] Rückgabetyp, Name, Parameter, Rumpf!");
        System.out.println("[REMINDER] Methoden außerhalb main, Aufruf in main!");
        // Starter-Code
        // static int addiere(int x, int y) { ... }
        // Deine Lösung:
        // System.out.println(addiere(2,3));
        
        System.out.println();

        // 6. Arrays
        System.out.println("6. Arrays");
        System.out.println("[INFO] Arrays speichern mehrere Werte gleichen Typs.");
        System.out.println("[ESELSBRÜCKE] int[] zahlen = new int[5];");
        System.out.println("[REMINDER] Indizes starten bei 0!");
        // Starter-Code
        // int[] zahlen = {1,2,3,4,5};
        // for (int i = 0; i < zahlen.length; i++) { ... }
        // Deine Lösung:
        
        System.out.println();

        // 7. Klassen & Objekte (OOP)
        System.out.println("7. Klassen & Objekte");
        System.out.println("[INFO] Klassen sind Baupläne, Objekte sind Instanzen.");
        System.out.println("[ESELSBRÜCKE] class Auto { ... } Auto meinAuto = new Auto();");
        System.out.println("[REMINDER] Konstruktoren initialisieren Objekte!");
        // Starter-Code
        // class Auto { ... }
        // Auto meinAuto = new Auto();
        // Deine Lösung:
        
        System.out.println();

        // 8. Vererbung
        System.out.println("8. Vererbung");
        System.out.println("[INFO] Mit extends erben Klassen Eigenschaften und Methoden.");
        System.out.println("[ESELSBRÜCKE] class ElektroAuto extends Auto { ... }");
        System.out.println("[REMINDER] Überschreiben mit @Override!");
        // Starter-Code
        // class Tier { ... }
        // class Hund extends Tier { ... }
        // Deine Lösung:
        
        System.out.println();

        // 9. Exception Handling
        System.out.println("9. Exception Handling");
        System.out.println("[INFO] Fehlerbehandlung mit try-catch.");
        System.out.println("[ESELSBRÜCKE] try { ... } catch (Exception e) { ... }");
        System.out.println("[REMINDER] Immer spezifische Exceptions fangen!");
        // Starter-Code
        // try {
        //     int x = 5 / 0;
        // } catch (ArithmeticException e) {
        //     System.out.println("Fehler: " + e.getMessage());
        // }
        // Deine Lösung:
        
        System.out.println();

        // 10. Mini-Projekt: Zähler
        System.out.println("10. Mini-Projekt: Zähler");
        System.out.println("[INFO] Kombiniere Variablen, Schleifen, Methoden und OOP!");
        System.out.println("[ESELSBRÜCKE] Alles was du gelernt hast, anwenden!");
        System.out.println("[REMINDER] Saubere Struktur und Kommentare!");
        // Starter-Code
        // class Counter { ... }
        // Counter c = new Counter();
        // c.increment();
        // System.out.println(c.getValue());
        // Deine Lösung:
        
        System.out.println();

        System.out.println("=== Ende der Java-Grundlagen ===");
    }

    // Hier kannst du eigene Methoden und Klassen für die Aufgaben anlegen
} 