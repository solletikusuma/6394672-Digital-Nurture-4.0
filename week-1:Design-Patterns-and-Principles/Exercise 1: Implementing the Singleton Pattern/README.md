# Singleton Pattern in Java

## Objective
This Java project demonstrates the implementation of the **Singleton Design Pattern**. The Singleton pattern ensures that a class has **only one instance** and provides a **global point of access** to that instance.

In this example, a `Logger` class is implemented as a singleton to provide consistent logging behavior across the application.

##  Features

- Ensures only **one instance** of the `Logger` class is created.
- Provides a global access point using `Logger.getInstance()`.
- Demonstrates lazy initialization of the singleton instance.
- Simple logging functionality using the `log(String message)` method.
- Includes a test class to verify singleton behavior.

## Project Structure
```
/week-1:Design-Patterns-and-Principles
    └── Exercise-1-Implementing-the-Singleton-Pattern/
         ├── Logger.java 
         └── TestLogger.java 
```
## How It Works

- The `Logger` class has a private static variable to hold the single instance.
- Its constructor is private so no external class can instantiate it directly.
- A public static method `getInstance()` provides access to the single instance.
- The same instance is returned every time `getInstance()` is called.

## How to Run

### Prerequisites
- Java Development Kit (JDK) installed (Java 8 or higher)
- IntelliJ IDEA or any Java IDE, or terminal with `javac` and `java`

### Running with IntelliJ IDEA

1. Open IntelliJ IDEA and create a new Java project named `SingletonPatternExample`.
2. Create two Java classes:
   - `Logger`
   - `TestLogger`
3. Right-click `TestLogger.java` → **Run 'TestLogger.main()'**
4. You should see the log output and confirmation that only one instance was created.

