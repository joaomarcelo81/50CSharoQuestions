import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  public text = "";  

  public ReturnResposta(expression: any) {

    window.scrollTo(0, 0)


    switch (expression) {
      case 1:
        this.text = '1. What is the role of C#?'
        this.text += '\nThe role of C# as a programming language is to precisely define a set of operations that a computer can perform to complete a task. It’s used to create desktop apps, mobile apps, web apps, websites, and web services.';
        break;
      case 2:
        this.text = '2. What is meant by object-oriented programming?';
        this.text += '\nObject-oriented programming (OOP) is a programming paradigm that is based on the concept of objects, which can contain data and behavior.';
        this.text += '\nThe key idea behind OOP is to organize code into modular, reusable units that model real - world objects and their interactions.';
        this.text += '\nOOP emphasizes the principles of encapsulation, inheritance, and polymorphism, which help to ensure that code is well - organized, modular, and easy to understand and modify.';
        this.text += '\n Go to 38 for more about encapsulation, inheritance, and polymorphism';
        break;
      case 3:
        this.text = '3. What is the difference between managed and unmanaged code?';
        this.text += '\nManaged code is executed by the Common Language Runtime(CLR) of the.NET Framework, whereas unmanaged code is executed by the Operating System(OS). CLR offers inbuilt security to managed code, whereas it’s the developer’s responsibility to write safe and secure code with unmanaged code.';
        break;
      case 4:
        this.text = '4. How is C# different from C?';
        this.text += '\nThe most significant difference between C# and its predecessor, C, is that C# is an object - oriented programming language, whereas C is a procedural programming language.'; 
        this.text += '\n Some other differences include:';
        this.text += '\nC is best suited for hardware apps and system programming, whereas C# is used for desktop and mobile apps as well as web services';
        this.text += '\nC draws on just 32 different keywords, whereas C# has 87';
        this.text += '\nC places greater emphasis on functions, whereas C# is more oriented to design';
        break;
      case 5:
        this.text = '5. What is an object in C#?';
        this.text += '\nAn object is a real-world entity and in C# it’s a single instance of a class. For example, if you had a class of ‘dogs’, ‘labradors’, ‘bulldogs’, and ‘golden retrievers’ would all be objects. ';
        break;
      case 6:
        this.text = '6. What is a class in C#?';
        this.text += '\nIn C#, a class is a user-defined blueprint from which objects are created. It brings various types of data together to form a single unit. ';
        break;
      case 7:
        this.text = '7. What is a method in C#?';
        this.text += '\nIn C#, a method is a code block that contains a series of statements used to perform particular operations. Methods must be declared within a class or a structure. They help save time by reusing code. ';
        break;
      case 8:
        this.text = '8. What is meant by structure in C#?';
        this.text += '\nIn C#, a structure is a composite type of data consisting of various data types, including methods, fields, constructors, constants, properties, indexers, operators, and even other structures. ';
        this.text += '\nA structure helps bring various data types together under a single unit.In this way, they are similar to classes.However, while classes are reference types, structures are value types.';

        break;
      case 9:
        this.text = '9. How is code compiled in C#?';
        this.text += '\nWhen a project is developed, C# source code is compiled into Intermediate Language(IL).IL is a set of instructions that produces a machine code for execution on the machine processor. ';
        this.text += '\nIn four steps, code moves from the preprocessor to the compiler, to the assembler, and, lastly, to the linker. ';

        break;
      case 10:
        this.text = '10. What is file handling in C#?';
        this.text += '\nFile handling is the process of saving information to the disk for external storage.\nThe saved file contains bytes of data and is available for retrieval at a later date.';
        break;
      case 11:
        this.text = '11. What is the purpose of control statements in C#?';
        this.text += '\nControl statements are used to control the actions a program takes;\nthis is sometimes referred to as the flow of execution.\nCommon actions in C# include calling methods, assigning values, declaring variables, and looping through collections.';
        break;
      case 12:
        this.text = '12.What is meant by garbage collection in C#?';
        this.text += '\nIn C#, garbage collection is the process of managing memory in an application.\nThe garbage collector automatically\n disposes of memory that is no longer used to make memory available for new allocations.';
        break;
      case 13:
        this.text = '13. What is a constructor in C#?';
        this.text += '\nIn C#, a constructor is a type of method that forms a part of a class.\nThe main purpose of a constructor is to initialize the fields of a class.\n They are invoked automatically when a new class object is created. ';
        break;
      case 14:
        this.text = '14. What is a destructor in C#?';
        this.text += '\nIn C#, a destructor is a type of method that forms a part of a class.\nThe main purpose of a destructor is to destroy instances of a class when they are no longer needed in order to free up memory.\n Destructors are also referred to as finalizers. ';
        break;
      case 15:
        this.text = '15. What is an array in C#?';
        this.text += '\nIn C#, an array is a collection of data that stores a fixed number of values of the same data type.\nArrays can be retrieved easily for the developer’s reference. ';
        break;
      case 16:
        this.text = '16. What is a constant in C#?';
        this.text += '\nConstants are fixed values that cannot be altered during the lifetime of the program.\nFor example, the constant ‘Months’ is always 12 and cannot be changed.';
        break;
      case 17:
        this.text = '17. What is an indexer in C#?';
        this.text += '\nIn C#, indexers are used to index instances of a class or structure.\nThe indexed values can then be easily accessed like an array, but without explicitly specifying a type or instance member.';
        break;
      case 18:
        this.text = '18. What are the different types of classes in C#?';
        this.text += '\nThere are generally considered to be four types of classes in C#. These include:';
        this.text += '\ntypes of classes in C#';
        this.text += '\nAbstract classes: These provide a common definition for a base class that other classes can be derived from';
        this.text += '\nStatic classes: These contain static items that can only interact with other static items';
        this.text += '\nPartial classes: These are portions of a class that a compiler can combine to form a complete class';
        this.text += '\nSealed classes: These cannot be inherited by any class but can be instantiated';
        break;
      case 19:
        this.text = '19. What is the difference between fields and properties in C#?';
        this.text += '\nA field is a member of a class or an object of any type that represents a location for storing a value, whereas a property is a class member that provides a mechanism to read, write, and compute the value of a private field.';
        break;
      case 20:
        this.text = '20. What are circular references in C#?';
        this.text += '\nIn C#, circular references occur when two or more interdependent resources refer back to each other, either directly or indirectly, resulting in a closed loop or lock condition. This situation makes the resource unusable.';
        break;
      case 21:
        this.text = '21. What is meant by object pooling in C#?';
        this.text += '\nObject pooling is a software creational design pattern that recycles objects rather than recreating them. It does that by holding selected objects in a pool ready for use when they are requested by an application. ';
        this.text += '\nThis process helps to improve performance by minimizing unnecessary object creation.';
        break;
      case 22:
        this.text = '22. What are the different types of control statements in C#?';
        this.text += '\nThere are generally considered to be three main types of control statements, each serving different purposes. These include:';
        this.text += '\nSelection statements, which enable you to branch to different sections of code';
        this.text += '\nIteration statements, which enable you to loop through connections or perform the same series of operations repeatedly until a specified condition is met';
        this.text += '\nJump statements, which enable control of flow to be shifted to another section of code';
        break;
      case 23:
        this.text = '23. What is method overloading in C#?';
        this.text += '\nIn C#, method overloading is the process of assigning different signatures or arguments to two or more methods bearing the same name. It’s an example of polymorphism in object-oriented programming. ';
        this.text += '\nMethod overloading improves the readability of the program by reducing the number of names associated with a specific action.';
        break;
      case 24:
        this.text = '24. What are boxing and unboxing in C#?';
        this.text += '\nIn C#, boxing and unboxing allow developers to convert .NET data types from reference type to value type and vice versa.';
        this.text += '\nUnboxing is used to convert a reference type to a value type, while boxing is used to convert a value type to a reference type.These two processes underpin the unified view of C#.';
        break;
      case 25:
        this.text = '25. What is the difference between ref and out keywords in C#?';
        this.text += '\nThe <ref> and <out> keywords are similar in that they are both used to pass arguments in a reference or function. However, there is a subtle difference:';
        this.text += '\nWith < ref > keywords, the value is already set, meaning the method can read and modify it';
        this.text += '\nWith < out > keywords, the value isn’t set and can’t be read by the method until it is set, meaning the method must set it before it can be returned';
        break;
      case 26:
        this.text = '26. How are extension methods used in C#?';
        this.text += '\nExtension methods allow developers to add a method to existing types without changing the original source code.\nThis allows them to extend the functionality of the method. An extension method is a static method and uses the <this> keyword.';
        break;
      case 27:
        this.text = '27. How are user controls created in C#?';
        this.text += '\nIn C#, user controls allow developers to write code that can be used in various areas of the program.';
        this.text += '\nFor example, if a website requires the same search control in multiple places, it can be created once as a user control and then dropped into different areas of the code.This serves the dual purposes of reusability and bug prevention.';
        break;
      case 28:
        this.text = '28. When should nullable types be used in C#?';
        this.text += '\nIn C#, nullable types are used to represent an undefined value of an underlying type.\nIt essentially means ‘no value’ and is generally used when no data is available for the field.';
        break;
      case 29:
        this.text = '29. How is serialization implemented in C#?';
        this.text += '\nIn C#, serialization is the process of converting an object into a stream of bytes for storage on a memory, database, or file. This allows the developer to save the state of an object for future reference.';
        this.text += '\nSerialization can be performed by applying < SerializableAttribute > to a type to indicate that instances of this type can be serialized.All public and private fields marked as such are then serialized by default.';
        break;
      case 30:
        this.text = '30. What is the difference between String and StringBuilder in C#?';
        this.text += '\nA string object is immutable, meaning that it cannot be changed after it’s created. Any operation that tries to modify the string object will simply create a new string object.';
        this.text += '\nOn the other hand, a string builder object is mutable and can be modified as the developer sees fit.';
        break;
      case 31:
        this.text = '31. How is reflection used in C#?';
        this.text += '\nIn C#, reflection is used to obtain metadata on types at runtime. In other words, it allows developers to retrieve data on the loaded assemblies and the types within them.';
        this.text += '\nIt’s implemented using a two - step process.First, you get the type object.Second, you use the type to browse members, such as methods and properties.';
        break;
      case 32:
        this.text = '32. What are the advantages of generics in C#?';
        this.text += '\nIn C#, generics allow the developer to define classes and methods which can be used with any data type. This brings several benefits:';
        this.text += '\nSaves time by reusing code';
        this.text += '\nProvides type safety without unnecessary overhead';
        this.text += '\nRemoves the need for boxing and unboxing';
        this.text += '\nGeneric collection types generally perform better with value types because there is no need to box the values';
        break;
      case 33:
        this.text = '33. What are the disadvantages of generics in C#?';
        this.text += '\nThere are a few limitations with generics. These include:';
        this.text += '\nThey cannot be used with enumerations';
        this.text += '\nThey cannot be used with lightweight dynamic methods';
        this.text += '\nThe.NET framework doesn’t support context - bound generic types';
        break;
      case 34:
        this.text = '34. What are the key differences between Array and ArrayList in C#?';
        this.text += '\nAn ArrayList has wider usage than an Array. The key differences include:';
        this.text += '\nAn Array is strongly - typed, meaning it only stores the same type of data.An ArrayList is a non - generic collection type, meaning it can store multiple types of data';
        this.text += '\nAn Array stores a fixed number of elements.An ArrayList features a variable number of elements and can continually be added to';
        this.text += '\nAn Array cannot accept null values, whereas an ArrayList can';
        this.text += '\nThe relative simplicity of an Array means it typically provides better performance than an ArrayList';
        break;
      case 35:
        this.text = '35. How are the different types of control statements used in C#?';
        this.text += '\nEach type of control statement has its own set of syntax used to invoke the statement:';
        this.text += '\nSelection statements include <if>, <else>, <switch>, and <case>';
        this.text += '\nIteration statements include <do>, <for>, <foreach>, and <while>';
        this.text += '\nJump statements include <break>, <continue>, <return>, and<goto>';
        break;
      case 36:
        this.text = '36. When should multithreading be used and when should it be avoided in C#?';
        this.text += '\nMultithreading, or threading, can be a good way to improve the performance of a program where several operations run simultaneously. ';
        this.text += '\nIt allows distinct threads to run at their own time, rather than having to wait for the previous step to be complete.This has the potential to speed up a program.';
        this.text += '\nHowever, multithreading is not advisable when much of the program’s processes are interdependent.For example, if Step B was reliant on the prior completion of Step A, multithreading would lead to performance issues and create bugs in the program. ';
        this.text += '\nAs a program grows more complex, threading becomes a more delicate operation.';
        break;
      case 37:
        this.text = '37. What is a multicast delegate in C#?';
        this.text += '\nUnlike a simple delegate, a multicast delegate in C# references multiple target methods.\nWhen a multicast delegate is used, all the functions the delegate is pointing to are invoked.\nThey’re implemented using the MulticastDelegate class, which is derived from the system.';
        break;
      case 38:
        this.text = '38. How would you explain the four fundamental concepts of object-oriented programming? ';
        this.text += '\nThe four fundamental concepts of object-oriented programming can be explained as follows:';
        this.text += '\nEncapsulation is the bundling of data, including the methods that operate on that data, into a single, private unit';
        this.text += '\nPolymorphism is the ability of a type to take on many forms using a single interface';
        this.text += '\nAbstraction is the concealment of unnecessary program details so that the user only sees the essential attributes';
        this.text += '\nInheritance is the process where one class derives (or inherits) its attributes and methods from another';
        break;
      case 39:
        this.text = '39. How is the singleton design pattern implemented in C#?';
        this.text += '\nThe singleton design pattern ensures that only one object of its kind exists, and provides global access to it for any other code. This design pattern can be implemented in a number of ways, using:';
        this.text += '\nThread - safety singleton';
        this.text += '\nThread - safety singleton using double - check locking';
        this.text += '\nNo thread - safe singleton';
        this.text += '\nThread - safe without a lock';
        this.text += '\n.NET 4’s Lazy < T > type';
        break;
      case 40:
        this.text = '40. What is the difference between late binding and early binding in C#?';
        this.text += '\nThe key differences between early binding and late binding are:';
        this.text += '\nEarly binding occurs at compile - time, whereas late binding occurs at runtime';
        this.text += '\nEarly binding uses class information to resolve method calling, whereas late binding uses the object to resolve method calling';
        this.text += '\nTypically, the performance of late binding is slower than early binding because it occurs at runtime';
        break;
      case 41:
        this.text = '41. How is HashSet used in C#?';
        this.text += '\nIn C#, HashSet is an unordered collection of distinct values. Generally, it is used to prevent duplicate elements from being placed in a collection, and it performs better than a list in achieving this goal. ';
        this.text += '\nIt is implemented using the HashSet class, which is derived from the System.';
        break;
      case 42:
        this.text = 'When is method overriding used in C#?';
        this.text += '\nIn C#, method overriding is used to invoke functions that belong to different classes.\nThis process creates a method in the derived class with the same signature as a method in the base class without modifying the code of the base class.\nThis helps achieve runtime polymorphism.';
        break;
      case 43:
        this.text = '43. What is the difference between Const and ReadOnly keywords in C#?';
        this.text += '\nThere are several differences between Const and ReadOnly keywords in C#. These include:';
        this.text += '\nReadOnly is a constant used at runtime, whereas Const is a constant used at compile - time';
        this.text += '\nReadOnly values can be changed, whereas Const values cannot be changed';
        this.text += '\nReadOnly cannot be declared inside the method, whereas Const can';
        break;
      case 44:
        this.text = '44. How are custom controls added to an application in C#?';
        this.text += '\nA custom control is designed for single use in a specific application. There are three main ways to create a new custom control:';
        this.text += '\nDerive it from an existing user control';
        this.text += '\nGroup existing controls together into new compiled control';
        this.text += '\nCreate a new control by deriving from the System.Windows.Controls.Control class';
        break;
      case 45:
        this.text = '45. What is meant by dependency injection in C#?';
        this.text += '\nIn C#, dependency injection (DI) is a design pattern used to develop loosely coupled code.\nThis process moves the creation and binding of dependent objects outside of the class that depends on them.\nThe main purpose of this is to make future changes to code more manageable. ';
        break;
      case 46:
        this.text = '46. How can circular references be fixed in C#?';
        this.text += '\nIn C#, circular references are most commonly resolved using garbage collection.\nThe garbage collector systematically detects and collects circular references.\nOther solutions for circular references issues include callback methods, event handlers, and dependency injection.';
        break;
      case 47:
        this.text = '47. How can a class be set to be inherited without overriding the method in C#?';
        this.text += '\nProvided that the method isn’t virtual, it won’t be overridden. However, if the class is inheriting from a base class that contains a virtual member function, you can use the <sealed> modifier to avoid further overriding that member function.';
        break;
      case 48:
        this.text = '48. What are the different techniques for overloading a method in C#?';
        this.text += '\nMethod overloading can be achieved in the three following ways:';
        this.text += '\nBy using different types of data for parameters in a method';
        this.text += '\nBy changing the number of parameters in a method';
        this.text += '\nBy changing the order of parameters in a method';
        break;
      case 49:
        this.text = '49. How is exception handling performed in C#?';
        this.text += '\nIn C#, exception handling helps detect errors in code at runtime. The process is implemented using four different keywords:';
        this.text += '\n<Try> identifies blocks of code where exceptions are activated';
        this.text += '\n<Catch> catches the exceptions that have been identified by <Try>';
        this.text += '\n<Finally> executes a given set of statements depending on whether an exception is thrown out or not';
        this.text += '\n<Throw> removes the exception';
        break;
      case 50:
        this.text = '50. What is the difference between a throw exception and a throw clause in C#?';
        this.text += '\nThe fundamental difference is that throw exceptions overwrite the stack trace, whereas throw clauses retain the stack information.\nAs such, it is much harder to retrieve the original code responsible for throwing the exception with throw exceptions.';
        break;
      case 51:
        this.text = '51. Single-responsibility Principle';
        this.text += '\nA class should have one and only one reason to change, meaning that a class should have only one job.';        
        this.text += '\nOpen-Closed Principle';
        this.text += '\nObjects or entities should be open for extension but closed for modification.';        
        this.text += '\nLiskov Substitution Principle';
        this.text += '\nSubtypes must be substitutable for their base types';        
        this.text += '\nInterface Segregation Principle';
        this.text += '\nClasses that implement interfaces, should not be forced to implement methods they do not use.';        
        this.text += '\nDependency Inversion Principle';
        this.text += '\nHighlevel modules should not depend on lowlevel modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions';        
        break;        
      case 52:
        this.text = '52. Differences between const and readonly';
        this.text += '\nConst\t\t\t\t\t\t\t\t\tReadonly';
        this.text += '\nMust be defined at compile time\t\t\t\tCan be defined at compile time or runtime';
        this.text += '\nImplicitly static\t\t\t\t\t\t\tInstance-level or static';
        this.text += '\nCopied across assemblies\t\t\t\t\tShared across assemblies';
        this.text += '\nDo not allocate memory\t\t\t\t\t\tAllocate memory';
        this.text += '\nReadOnly is a constant used at runtime, whereas Const is a constant used at compile - time';
        this.text += '\nReadOnly values can be changed, whereas Const values cannot be changed';
        this.text += '\nReadOnly cannot be declared inside the method, whereas Const can';
        break;
      case 53:
        this.text = '53. Differences between authentication and authorization';
        this.text += '\nauthentication confirms who you are,\nwhile authorization determines what you are allowed to do within the system';
        break;
      case 54:
        this.text = '54. Abstract classes and Interfaces';
        this.text += '\nAbstract classes and interfaces are both used for abstraction in object-oriented programming.';
        this.text += '\nAn abstract class can have both concrete and abstract methods and can also have instance variables, whereas an interface only has abstract methods and static final variables.';
        this.text += '\nUse an abstract class when you need to create a base class that will be extended by multiple derived classes with similar behavior, and use an interface when you want to define a contract that must be implemented by multiple unrelated classes.'; 
        break;
      default:
        // 
        break;
    }
    
  }



}
