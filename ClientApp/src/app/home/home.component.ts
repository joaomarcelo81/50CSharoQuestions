import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public texto = "";  

  public ReturnResposta(expression: any) {

    window.moveTo(0, 0);


    switch (expression) {
      case 1:
        this.texto = '1. What is the role of C#?'
        this.texto += '\nThe role of C# as a programming language is to precisely define a set of operations that a computer can perform to complete a task. It’s used to create desktop apps, mobile apps, web apps, websites, and web services.';
        break;
      case 2:
        this.texto = '2. What is meant by object-oriented programming?';
        this.texto += '\nObject-oriented programming (OOP) is a programming paradigm that is based on the concept of objects, which can contain data and behavior.';
        this.texto += '\nThe key idea behind OOP is to organize code into modular, reusable units that model real - world objects and their interactions.';
        this.texto += '\nOOP emphasizes the principles of encapsulation, inheritance, and polymorphism, which help to ensure that code is well - organized, modular, and easy to understand and modify.';
        this.texto += '\n Go to 38 for more about encapsulation, inheritance, and polymorphism';
        break;
      case 3:
        this.texto = '3. What is the difference between managed and unmanaged code?';
        this.texto += '\nManaged code is executed by the Common Language Runtime(CLR) of the.NET Framework, whereas unmanaged code is executed by the Operating System(OS). CLR offers inbuilt security to managed code, whereas it’s the developer’s responsibility to write safe and secure code with unmanaged code.';
        break;
      case 4:
        this.texto = '4. How is C# different from C?';
        this.texto += '\nThe most significant difference between C# and its predecessor, C, is that C# is an object - oriented programming language, whereas C is a procedural programming language.'; 
        this.texto += '\n Some other differences include:';
        this.texto += '\nC is best suited for hardware apps and system programming, whereas C# is used for desktop and mobile apps as well as web services';
        this.texto += '\nC draws on just 32 different keywords, whereas C# has 87';
        this.texto += '\nC places greater emphasis on functions, whereas C# is more oriented to design';
        break;
      case 5:
        this.texto = '5. What is an object in C#?';
        this.texto += '\nAn object is a real-world entity and in C# it’s a single instance of a class. For example, if you had a class of ‘dogs’, ‘labradors’, ‘bulldogs’, and ‘golden retrievers’ would all be objects. ';
        break;
      case 6:
        this.texto = '6. What is a class in C#?';
        this.texto += '\nIn C#, a class is a user-defined blueprint from which objects are created. It brings various types of data together to form a single unit. ';
        break;
      case 7:
        this.texto = '7. What is a method in C#?';
        this.texto += '\nIn C#, a method is a code block that contains a series of statements used to perform particular operations. Methods must be declared within a class or a structure. They help save time by reusing code. ';
        break;
      case 8:
        this.texto = '8. What is meant by structure in C#?';
        this.texto += '\nIn C#, a structure is a composite type of data consisting of various data types, including methods, fields, constructors, constants, properties, indexers, operators, and even other structures. ';
        this.texto += '\nA structure helps bring various data types together under a single unit.In this way, they are similar to classes.However, while classes are reference types, structures are value types.';

        break;
      case 9:
        this.texto = '9. How is code compiled in C#?';
        this.texto += '\nWhen a project is developed, C# source code is compiled into Intermediate Language(IL).IL is a set of instructions that produces a machine code for execution on the machine processor. ';
        this.texto += '\nIn four steps, code moves from the preprocessor to the compiler, to the assembler, and, lastly, to the linker. ';

        break;
      case 10:
        this.texto = '10. What is file handling in C#?';
        this.texto += '\nFile handling is the process of saving information to the disk for external storage.\nThe saved file contains bytes of data and is available for retrieval at a later date.';
        break;
      case 11:
        this.texto = '11. What is the purpose of control statements in C#?';
        this.texto += '\nControl statements are used to control the actions a program takes;\nthis is sometimes referred to as the flow of execution.\nCommon actions in C# include calling methods, assigning values, declaring variables, and looping through collections.';
        break;
      case 12:
        this.texto = '12.What is meant by garbage collection in C#?';
        this.texto += '\nIn C#, garbage collection is the process of managing memory in an application.\nThe garbage collector automatically\n disposes of memory that is no longer used to make memory available for new allocations.';
        break;
      case 13:
        this.texto = '13. What is a constructor in C#?';
        this.texto += '\nIn C#, a constructor is a type of method that forms a part of a class.\nThe main purpose of a constructor is to initialize the fields of a class.\n They are invoked automatically when a new class object is created. ';
        break;
      case 14:
        this.texto = '14. What is a destructor in C#?';
        this.texto += '\nIn C#, a destructor is a type of method that forms a part of a class.\nThe main purpose of a destructor is to destroy instances of a class when they are no longer needed in order to free up memory.\n Destructors are also referred to as finalizers. ';
        break;
      case 15:
        this.texto = '15. What is an array in C#?';
        this.texto += '\nIn C#, an array is a collection of data that stores a fixed number of values of the same data type.\nArrays can be retrieved easily for the developer’s reference. ';
        break;
      case 16:
        this.texto = '16. What is a constant in C#?';
        this.texto += '\nConstants are fixed values that cannot be altered during the lifetime of the program.\nFor example, the constant ‘Months’ is always 12 and cannot be changed.';
        break;
      case 17:
        this.texto = '17. What is an indexer in C#?';
        this.texto += '\nIn C#, indexers are used to index instances of a class or structure.\nThe indexed values can then be easily accessed like an array, but without explicitly specifying a type or instance member.';
        break;
      case 18:
        this.texto = '18. What are the different types of classes in C#?';
        this.texto += '\nThere are generally considered to be four types of classes in C#. These include:';
        this.texto += '\ntypes of classes in C#';
        this.texto += '\nAbstract classes: These provide a common definition for a base class that other classes can be derived from';
        this.texto += '\nStatic classes: These contain static items that can only interact with other static items';
        this.texto += '\nPartial classes: These are portions of a class that a compiler can combine to form a complete class';
        this.texto += '\nSealed classes: These cannot be inherited by any class but can be instantiated';
        break;
      case 19:
        this.texto = '19. What is the difference between fields and properties in C#?';
        this.texto += '\nA field is a member of a class or an object of any type that represents a location for storing a value, whereas a property is a class member that provides a mechanism to read, write, and compute the value of a private field.';
        break;
      case 20:
        this.texto = '20. What are circular references in C#?';
        this.texto += '\nIn C#, circular references occur when two or more interdependent resources refer back to each other, either directly or indirectly, resulting in a closed loop or lock condition. This situation makes the resource unusable.';
        break;
      case 21:
        this.texto = '21. What is meant by object pooling in C#?';
        this.texto += '\nObject pooling is a software creational design pattern that recycles objects rather than recreating them. It does that by holding selected objects in a pool ready for use when they are requested by an application. ';
        this.texto += '\nThis process helps to improve performance by minimizing unnecessary object creation.';
        break;
      case 22:
        this.texto = '22. What are the different types of control statements in C#?';
        this.texto += '\nThere are generally considered to be three main types of control statements, each serving different purposes. These include:';
        this.texto += '\nSelection statements, which enable you to branch to different sections of code';
        this.texto += '\nIteration statements, which enable you to loop through connections or perform the same series of operations repeatedly until a specified condition is met';
        this.texto += '\nJump statements, which enable control of flow to be shifted to another section of code';
        break;
      case 23:
        this.texto = '23. What is method overloading in C#?';
        this.texto += '\nIn C#, method overloading is the process of assigning different signatures or arguments to two or more methods bearing the same name. It’s an example of polymorphism in object-oriented programming. ';
        this.texto += '\nMethod overloading improves the readability of the program by reducing the number of names associated with a specific action.';
        break;
      case 24:
        this.texto = '24. What are boxing and unboxing in C#?';
        this.texto += '\nIn C#, boxing and unboxing allow developers to convert .NET data types from reference type to value type and vice versa.';
        this.texto += '\nUnboxing is used to convert a reference type to a value type, while boxing is used to convert a value type to a reference type.These two processes underpin the unified view of C#.';
        break;
      case 25:
        this.texto = '25. What is the difference between ref and out keywords in C#?';
        this.texto += '\nThe <ref> and <out> keywords are similar in that they are both used to pass arguments in a reference or function. However, there is a subtle difference:';
        this.texto += '\nWith < ref > keywords, the value is already set, meaning the method can read and modify it';
        this.texto += '\nWith < out > keywords, the value isn’t set and can’t be read by the method until it is set, meaning the method must set it before it can be returned';
        break;
      case 26:
        this.texto = '26. How are extension methods used in C#?';
        this.texto += '\nExtension methods allow developers to add a method to existing types without changing the original source code.\nThis allows them to extend the functionality of the method. An extension method is a static method and uses the <this> keyword.';
        break;
      case 27:
        this.texto = '27. How are user controls created in C#?';
        this.texto += '\nIn C#, user controls allow developers to write code that can be used in various areas of the program.';
        this.texto += '\nFor example, if a website requires the same search control in multiple places, it can be created once as a user control and then dropped into different areas of the code.This serves the dual purposes of reusability and bug prevention.';
        break;
      case 28:
        this.texto = '28. When should nullable types be used in C#?';
        this.texto += '\nIn C#, nullable types are used to represent an undefined value of an underlying type.\nIt essentially means ‘no value’ and is generally used when no data is available for the field.';
        break;
      case 29:
        this.texto = '29. How is serialization implemented in C#?';
        this.texto += '\nIn C#, serialization is the process of converting an object into a stream of bytes for storage on a memory, database, or file. This allows the developer to save the state of an object for future reference.';
        this.texto += '\nSerialization can be performed by applying < SerializableAttribute > to a type to indicate that instances of this type can be serialized.All public and private fields marked as such are then serialized by default.';
        break;
      case 30:
        this.texto = '30. What is the difference between String and StringBuilder in C#?';
        this.texto += '\nA string object is immutable, meaning that it cannot be changed after it’s created. Any operation that tries to modify the string object will simply create a new string object.';
        this.texto += '\nOn the other hand, a string builder object is mutable and can be modified as the developer sees fit.';
        break;
      case 31:
        this.texto = '31. How is reflection used in C#?';
        this.texto += '\nIn C#, reflection is used to obtain metadata on types at runtime. In other words, it allows developers to retrieve data on the loaded assemblies and the types within them.';
        this.texto += '\nIt’s implemented using a two - step process.First, you get the type object.Second, you use the type to browse members, such as methods and properties.';
        break;
      case 32:
        this.texto = '32. What are the advantages of generics in C#?';
        this.texto += '\nIn C#, generics allow the developer to define classes and methods which can be used with any data type. This brings several benefits:';
        this.texto += '\nSaves time by reusing code';
        this.texto += '\nProvides type safety without unnecessary overhead';
        this.texto += '\nRemoves the need for boxing and unboxing';
        this.texto += '\nGeneric collection types generally perform better with value types because there is no need to box the values';
        break;
      case 33:
        this.texto = '33. What are the disadvantages of generics in C#?';
        this.texto += '\nThere are a few limitations with generics. These include:';
        this.texto += '\nThey cannot be used with enumerations';
        this.texto += '\nThey cannot be used with lightweight dynamic methods';
        this.texto += '\nThe.NET framework doesn’t support context - bound generic types';
        break;
      case 34:
        this.texto = '34. What are the key differences between Array and ArrayList in C#?';
        this.texto += '\nAn ArrayList has wider usage than an Array. The key differences include:';
        this.texto += '\nAn Array is strongly - typed, meaning it only stores the same type of data.An ArrayList is a non - generic collection type, meaning it can store multiple types of data';
        this.texto += '\nAn Array stores a fixed number of elements.An ArrayList features a variable number of elements and can continually be added to';
        this.texto += '\nAn Array cannot accept null values, whereas an ArrayList can';
        this.texto += '\nThe relative simplicity of an Array means it typically provides better performance than an ArrayList';
        break;
      case 35:
        this.texto = '35. How are the different types of control statements used in C#?';
        this.texto += '\nEach type of control statement has its own set of syntax used to invoke the statement:';
        this.texto += '\nSelection statements include <if>, <else>, <switch>, and <case>';
        this.texto += '\nIteration statements include <do>, <for>, <foreach>, and <while>';
        this.texto += '\nJump statements include <break>, <continue>, <return>, and<goto>';
        break;
      case 36:
        this.texto = '36. When should multithreading be used and when should it be avoided in C#?';
        this.texto += '\nMultithreading, or threading, can be a good way to improve the performance of a program where several operations run simultaneously. ';
        this.texto += '\nIt allows distinct threads to run at their own time, rather than having to wait for the previous step to be complete.This has the potential to speed up a program.';
        this.texto += '\nHowever, multithreading is not advisable when much of the program’s processes are interdependent.For example, if Step B was reliant on the prior completion of Step A, multithreading would lead to performance issues and create bugs in the program. ';
        this.texto += '\nAs a program grows more complex, threading becomes a more delicate operation.';
        break;
      case 37:
        this.texto = '37. What is a multicast delegate in C#?';
        this.texto += '\nUnlike a simple delegate, a multicast delegate in C# references multiple target methods.\nWhen a multicast delegate is used, all the functions the delegate is pointing to are invoked.\nThey’re implemented using the MulticastDelegate class, which is derived from the system.';
        break;
      case 38:
        this.texto = '38. How would you explain the four fundamental concepts of object-oriented programming? ';
        this.texto += '\nThe four fundamental concepts of object-oriented programming can be explained as follows:';
        this.texto += '\nEncapsulation is the bundling of data, including the methods that operate on that data, into a single, private unit';
        this.texto += '\nPolymorphism is the ability of a type to take on many forms using a single interface';
        this.texto += '\nAbstraction is the concealment of unnecessary program details so that the user only sees the essential attributes';
        this.texto += '\nInheritance is the process where one class derives (or inherits) its attributes and methods from another';
        break;
      case 39:
        this.texto = '39. How is the singleton design pattern implemented in C#?';
        this.texto += '\nThe singleton design pattern ensures that only one object of its kind exists, and provides global access to it for any other code. This design pattern can be implemented in a number of ways, using:';
        this.texto += '\nThread - safety singleton';
        this.texto += '\nThread - safety singleton using double - check locking';
        this.texto += '\nNo thread - safe singleton';
        this.texto += '\nThread - safe without a lock';
        this.texto += '\n.NET 4’s Lazy < T > type';
        break;
      case 40:
        this.texto = '40. What is the difference between late binding and early binding in C#?';
        this.texto += '\nThe key differences between early binding and late binding are:';
        this.texto += '\nEarly binding occurs at compile - time, whereas late binding occurs at runtime';
        this.texto += '\nEarly binding uses class information to resolve method calling, whereas late binding uses the object to resolve method calling';
        this.texto += '\nTypically, the performance of late binding is slower than early binding because it occurs at runtime';
        break;
      case 41:
        this.texto = '41. How is HashSet used in C#?';
        this.texto += '\nIn C#, HashSet is an unordered collection of distinct values. Generally, it is used to prevent duplicate elements from being placed in a collection, and it performs better than a list in achieving this goal. ';
        this.texto += '\nIt is implemented using the HashSet class, which is derived from the System.';
        break;
      case 42:
        this.texto = 'When is method overriding used in C#?';
        this.texto += '\nIn C#, method overriding is used to invoke functions that belong to different classes.\nThis process creates a method in the derived class with the same signature as a method in the base class without modifying the code of the base class.\nThis helps achieve runtime polymorphism.';
        break;
      case 43:
        this.texto = '43. What is the difference between Const and ReadOnly keywords in C#?';
        this.texto += '\nThere are several differences between Const and ReadOnly keywords in C#. These include:';
        this.texto += '\nReadOnly is a constant used at runtime, whereas Const is a constant used at compile - time';
        this.texto += '\nReadOnly values can be changed, whereas Const values cannot be changed';
        this.texto += '\nReadOnly cannot be declared inside the method, whereas Const can';
        break;
      case 44:
        this.texto = '44. How are custom controls added to an application in C#?';
        this.texto += '\nA custom control is designed for single use in a specific application. There are three main ways to create a new custom control:';
        this.texto += '\nDerive it from an existing user control';
        this.texto += '\nGroup existing controls together into new compiled control';
        this.texto += '\nCreate a new control by deriving from the System.Windows.Controls.Control class';
        break;
      case 45:
        this.texto = '45. What is meant by dependency injection in C#?';
        this.texto += '\nIn C#, dependency injection (DI) is a design pattern used to develop loosely coupled code.\nThis process moves the creation and binding of dependent objects outside of the class that depends on them.\nThe main purpose of this is to make future changes to code more manageable. ';
        break;
      case 46:
        this.texto = '46. How can circular references be fixed in C#?';
        this.texto += '\nIn C#, circular references are most commonly resolved using garbage collection.\nThe garbage collector systematically detects and collects circular references.\nOther solutions for circular references issues include callback methods, event handlers, and dependency injection.';
        break;
      case 47:
        this.texto = '47. How can a class be set to be inherited without overriding the method in C#?';
        this.texto += '\nProvided that the method isn’t virtual, it won’t be overridden. However, if the class is inheriting from a base class that contains a virtual member function, you can use the <sealed> modifier to avoid further overriding that member function.';
        break;
      case 48:
        this.texto = '48. What are the different techniques for overloading a method in C#?';
        this.texto += '\nMethod overloading can be achieved in the three following ways:';
        this.texto += '\nBy using different types of data for parameters in a method';
        this.texto += '\nBy changing the number of parameters in a method';
        this.texto += '\nBy changing the order of parameters in a method';
        break;
      case 49:
        this.texto = '49. How is exception handling performed in C#?';
        this.texto += '\nIn C#, exception handling helps detect errors in code at runtime. The process is implemented using four different keywords:';
        this.texto += '\n<Try> identifies blocks of code where exceptions are activated';
        this.texto += '\n<Catch> catches the exceptions that have been identified by <Try>';
        this.texto += '\n<Finally> executes a given set of statements depending on whether an exception is thrown out or not';
        this.texto += '\n<Throw> removes the exception';
        break;
      case 50:
        this.texto = '50. What is the difference between a throw exception and a throw clause in C#?';
        this.texto += '\nThe fundamental difference is that throw exceptions overwrite the stack trace, whereas throw clauses retain the stack information.\nAs such, it is much harder to retrieve the original code responsible for throwing the exception with throw exceptions.';
        break;
      case 51:
        this.texto = '51. Single-responsibility Principle';
        this.texto += '\nA class should have one and only one reason to change, meaning that a class should have only one job.';        
        this.texto += '\nOpen-Closed Principle';
        this.texto += '\nObjects or entities should be open for extension but closed for modification.';        
        this.texto += '\nLiskov Substitution Principle';
        this.texto += '\nSubtypes must be substitutable for their base types';        
        this.texto += '\nInterface Segregation Principle';
        this.texto += '\nClasses that implement interfaces, should not be forced to implement methods they do not use.';        
        this.texto += '\nDependency Inversion Principle';
        this.texto += '\nHighlevel modules should not depend on lowlevel modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions';        
        break;        
      case 52:
        this.texto = '52. Differences between const and readonly';
        this.texto += '\nConst\t\t\t\t\t\t\t\t\tReadonly';
        this.texto += '\nMust be defined at compile time\t\t\t\tCan be defined at compile time or runtime';
        this.texto += '\nImplicitly static\t\t\t\t\t\t\tInstance-level or static';
        this.texto += '\nCopied across assemblies\t\t\t\t\tShared across assemblies';
        this.texto += '\nDo not allocate memory\t\t\t\t\t\tAllocate memory';
        this.texto += '\nReadOnly is a constant used at runtime, whereas Const is a constant used at compile - time';
        this.texto += '\nReadOnly values can be changed, whereas Const values cannot be changed';
        this.texto += '\nReadOnly cannot be declared inside the method, whereas Const can';
        break;
      case 53:
        this.texto = '53. Differences between authentication and authorization';
        this.texto += '\nauthentication confirms who you are,\nwhile authorization determines what you are allowed to do within the system';
        break;
      case 54:
        this.texto = '54. Abstract classes and Interfaces';
        this.texto += '\nAbstract classes and interfaces are both used for abstraction in object-oriented programming.';
        this.texto += '\nAn abstract class can have both concrete and abstract methods and can also have instance variables, whereas an interface only has abstract methods and static final variables.';
        this.texto += '\nUse an abstract class when you need to create a base class that will be extended by multiple derived classes with similar behavior, and use an interface when you want to define a contract that must be implemented by multiple unrelated classes.'; 
        break;
      default:
        // 
        break;
    }
    
  }



}
