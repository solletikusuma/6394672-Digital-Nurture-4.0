# Factory Method Pattern Example

This project demonstrates the **Factory Method Design Pattern** in Java.
The goal is to build a simple **Document Management System** that can create different types of documents such as Word, PDF, and Excel using a factory interface.

## Components

### Document Interface
- `Document`: Base interface for all document types.

### Concrete Document Classes
- `WordDocument`
- `PdfDocument`
- `ExcelDocument`

### Abstract Factory
- `DocumentFactory`: Abstract class with a method `createDocument()`.

### Concrete Factories
- `WordDocumentFactory`
- `PdfDocumentFactory`
- `ExcelDocumentFactory`

### Test Class
- `TestFactoryMethod`: Demonstrates the usage of different factories to create documents.

## Project Structure
```
/week-1:Design-Patterns-and-Principles
    └── Exercise 2: Implementing the Factory Method Pattern
           ├── document/
           |    ├── Document.java
           |    ├── WordDocument.java
           |    ├── PdfDocument.java
           |    └── ExcelDocument.java
           ├── factory/
           |    ├── DocumentFactory.java
           |    ├── WordDocumentFactory.java
           |    ├── PdfDocumentFactory.java
           |    └── ExcelDocumentFactory.java
           └── test/
                └── TestFactoryMethod.java
```

## How to Run

### Prerequisites
- Java Development Kit (JDK) installed (Java 8 or higher)
- IntelliJ IDEA or any Java IDE, or terminal with `javac` and `java`

### Running with IntelliJ IDEA
1. Clone the repository or open it in IntelliJ.
2. Navigate to `TestFactoryMethod.java`.
3. Run the `main()` method.
4. The console will display the creation of various document types via their respective factories.

