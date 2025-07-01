# Python Grundlagen - Kontrollstrukturen
# Learning by Doing - Control Structures

print("=== Python Grundlagen: Kontrollstrukturen ===\n")

# 1. If-Else Statements
print("1. If-Else Statements:")

age = 18

if age >= 18:
    print("Sie sind volljährig!")
else:
    print("Sie sind noch minderjährig.")

# If-Elif-Else
print("\nIf-Elif-Else Beispiel:")
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Score: {score}, Grade: {grade}")

# Verschachtelte If-Statements
print("\nVerschachtelte If-Statements:")
is_weekend = True
is_sunny = True

if is_weekend:
    if is_sunny:
        print("Perfekt für einen Ausflug!")
    else:
        print("Vielleicht ins Kino?")
else:
    print("Arbeitstag - Zeit für die Arbeit!")

print()

# 2. Vergleichsoperatoren
print("2. Vergleichsoperatoren:")
a = 10
b = 5

print(f"a = {a}, b = {b}")
print(f"a == b: {a == b}")  # Gleich
print(f"a != b: {a != b}")  # Ungleich
print(f"a > b: {a > b}")    # Größer als
print(f"a < b: {a < b}")    # Kleiner als
print(f"a >= b: {a >= b}")  # Größer oder gleich
print(f"a <= b: {a <= b}")  # Kleiner oder gleich

# Logische Operatoren
print(f"\nLogische Operatoren:")
x = True
y = False
print(f"x = {x}, y = {y}")
print(f"x and y: {x and y}")
print(f"x or y: {x or y}")
print(f"not x: {not x}")
print()

# 3. For-Schleifen
print("3. For-Schleifen:")

# Schleife über eine Liste
fruits = ["Apfel", "Banane", "Orange", "Erdbeere"]
print("Früchte:")
for fruit in fruits:
    print(f"  - {fruit}")

# Schleife mit range()
print("\nZahlen von 1 bis 5:")
for i in range(1, 6):
    print(f"  Zahl: {i}")

# Schleife mit enumerate()
print("\nFrüchte mit Index:")
for index, fruit in enumerate(fruits):
    print(f"  {index + 1}. {fruit}")

# Schleife über Dictionary
person = {
    "name": "Max",
    "age": 25,
    "city": "Berlin"
}

print("\nPerson-Daten:")
for key, value in person.items():
    print(f"  {key}: {value}")

print()

# 4. While-Schleifen
print("4. While-Schleifen:")

# Einfache While-Schleife
counter = 0
print("Zähler von 0 bis 4:")
while counter < 5:
    print(f"  Counter: {counter}")
    counter += 1

# While-Schleife mit break
print("\nWhile-Schleife mit break:")
number = 0
while True:
    if number >= 3:
        break
    print(f"  Zahl: {number}")
    number += 1

# While-Schleife mit continue
print("\nWhile-Schleife mit continue (nur gerade Zahlen):")
num = 0
while num < 10:
    num += 1
    if num % 2 != 0:  # Ungerade Zahlen überspringen
        continue
    print(f"  Gerade Zahl: {num}")

print()

# 5. List Comprehensions
print("5. List Comprehensions:")

# Traditionelle Methode
squares_traditional = []
for i in range(1, 6):
    squares_traditional.append(i ** 2)
print(f"Quadratzahlen (traditionell): {squares_traditional}")

# List Comprehension
squares_comprehension = [i ** 2 for i in range(1, 6)]
print(f"Quadratzahlen (comprehension): {squares_comprehension}")

# List Comprehension mit Bedingung
even_squares = [i ** 2 for i in range(1, 11) if i % 2 == 0]
print(f"Quadratzahlen gerader Zahlen: {even_squares}")

# String-Liste filtern
words = ["python", "java", "javascript", "html", "css"]
long_words = [word for word in words if len(word) > 4]
print(f"Wörter mit mehr als 4 Buchstaben: {long_words}")

print()

# 6. Praktische Übungen
print("6. Praktische Übungen:")

# Übung 1: Primzahl-Checker
def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

print("Primzahlen bis 20:")
for num in range(2, 21):
    if is_prime(num):
        print(f"  {num} ist eine Primzahl")

# Übung 2: Passwort-Validator
def validate_password(password):
    if len(password) < 8:
        return "Passwort zu kurz (mindestens 8 Zeichen)"
    elif not any(c.isupper() for c in password):
        return "Passwort muss Großbuchstaben enthalten"
    elif not any(c.islower() for c in password):
        return "Passwort muss Kleinbuchstaben enthalten"
    elif not any(c.isdigit() for c in password):
        return "Passwort muss Zahlen enthalten"
    else:
        return "Passwort ist gültig!"

test_passwords = ["abc", "password", "Password123", "MySecurePass1"]
print("\nPasswort-Validierung:")
for pwd in test_passwords:
    result = validate_password(pwd)
    print(f"  '{pwd}': {result}")

# Übung 3: Zahlenraten-Spiel (Simulation)
import random

def number_guessing_game():
    secret_number = random.randint(1, 10)
    attempts = 0
    max_attempts = 3
    
    print(f"\nZahlenraten-Spiel (1-10, {max_attempts} Versuche):")
    
    while attempts < max_attempts:
        guess = random.randint(1, 10)  # Simulierte Eingabe
        attempts += 1
        
        if guess == secret_number:
            print(f"  Gewonnen! Die Zahl war {secret_number} (Versuch {attempts})")
            return
        elif guess < secret_number:
            print(f"  Versuch {attempts}: {guess} ist zu niedrig")
        else:
            print(f"  Versuch {attempts}: {guess} ist zu hoch")
    
    print(f"  Verloren! Die Zahl war {secret_number}")

number_guessing_game()

print("\n=== Ende der Kontrollstrukturen ===") 