# Python Grundlagen - Variablen und Datentypen
# Learning by Doing - Python Basics

print("=== Python Grundlagen: Variablen und Datentypen ===\n")

# 1. Variablen erstellen und zuweisen
print("1. Variablen erstellen:")
name = "Max Mustermann"
age = 25
height = 1.75
is_student = True

print(f"Name: {name}")
print(f"Alter: {age}")
print(f"Größe: {height}")
print(f"Ist Student: {is_student}")
print()

# 2. Datentypen überprüfen
print("2. Datentypen überprüfen:")
print(f"Typ von 'name': {type(name)}")
print(f"Typ von 'age': {type(age)}")
print(f"Typ von 'height': {type(height)}")
print(f"Typ von 'is_student': {type(is_student)}")
print()

# 3. Zahlen - Integer und Float
print("3. Zahlen:")
# Integer (ganze Zahlen)
count = 42
negative = -10
print(f"Integer: {count}, {negative}")

# Float (Dezimalzahlen)
pi = 3.14159
temperature = -5.5
print(f"Float: {pi}, {temperature}")

# Mathematische Operationen
a = 10
b = 3
print(f"\nMathematische Operationen:")
print(f"Addition: {a} + {b} = {a + b}")
print(f"Subtraktion: {a} - {b} = {a - b}")
print(f"Multiplikation: {a} * {b} = {a * b}")
print(f"Division: {a} / {b} = {a / b}")
print(f"Ganzzahldivision: {a} // {b} = {a // b}")
print(f"Modulo (Rest): {a} % {b} = {a % b}")
print(f"Potenz: {a} ** {b} = {a ** b}")
print()

# 4. Strings (Zeichenketten)
print("4. Strings:")
# Verschiedene String-Definitionen
text1 = "Einfache Anführungszeichen"
text2 = 'Auch einfache Anführungszeichen'
text3 = """Mehrzeiliger
String mit drei Anführungszeichen"""

print(f"Text1: {text1}")
print(f"Text2: {text2}")
print(f"Text3: {text3}")

# String-Operationen
first_name = "Max"
last_name = "Mustermann"
full_name = first_name + " " + last_name
print(f"\nString-Verkettung: {full_name}")

# String-Formatierung
age = 25
message = f"Ich bin {age} Jahre alt"
print(f"f-String: {message}")

# String-Methoden
text = "  Python ist toll!  "
print(f"\nOriginal: '{text}'")
print(f"Großbuchstaben: '{text.upper()}'")
print(f"Kleinbuchstaben: '{text.lower()}'")
print(f"Erste Buchstabe groß: '{text.capitalize()}'")
print(f"Leerzeichen entfernen: '{text.strip()}'")
print(f"Länge: {len(text)}")
print()

# 5. Boolean (Wahrheitswerte)
print("5. Boolean:")
is_active = True
is_finished = False
print(f"is_active: {is_active}")
print(f"is_finished: {is_finished}")

# Boolean-Operationen
print(f"\nBoolean-Operationen:")
print(f"True and True: {True and True}")
print(f"True and False: {True and False}")
print(f"True or False: {True or False}")
print(f"not True: {not True}")
print()

# 6. Type Conversion (Typumwandlung)
print("6. Typumwandlung:")
# String zu Integer
number_string = "42"
number_int = int(number_string)
print(f"String '{number_string}' zu Integer: {number_int}")

# String zu Float
float_string = "3.14"
number_float = float(float_string)
print(f"String '{float_string}' zu Float: {number_float}")

# Zahl zu String
number = 123
number_as_string = str(number)
print(f"Zahl {number} zu String: '{number_as_string}'")

# Boolean zu Integer
print(f"True zu Integer: {int(True)}")
print(f"False zu Integer: {int(False)}")
print()

# 7. Eingabe vom Benutzer
print("7. Benutzereingabe:")
# Kommentiert aus, da es die Ausführung stoppt
# user_name = input("Wie ist Ihr Name? ")
# user_age = input("Wie alt sind Sie? ")
# print(f"Hallo {user_name}, Sie sind {user_age} Jahre alt!")

# 8. Praktische Übungen
print("8. Praktische Übungen:")

# Übung 1: Temperaturumrechnung
celsius = 25
fahrenheit = (celsius * 9/5) + 32
print(f"{celsius}°C = {fahrenheit}°F")

# Übung 2: Kreisberechnung
radius = 5
area = 3.14159 * radius ** 2
circumference = 2 * 3.14159 * radius
print(f"Kreis mit Radius {radius}:")
print(f"  Fläche: {area:.2f}")
print(f"  Umfang: {circumference:.2f}")

# Übung 3: String-Manipulation
sentence = "python ist eine programmiersprache"
print(f"\nOriginal: {sentence}")
print(f"Erste Buchstabe groß: {sentence.capitalize()}")
print(f"Alle Wörter groß: {sentence.title()}")
print(f"Anzahl 'p': {sentence.count('p')}")

print("\n=== Ende der Grundlagen ===") 