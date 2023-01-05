
## Theory
---

1. What are the **basic data types** in TypeScript?
    - TypeScript is a syntactic superset of JavaScript which adds static typing.This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
    - **Basic built-in data types** in TypeScript are :-

        |Data Type|Description|
        |---------|-----------|
        |number|It is used to represent both Integer as well as Floating-Point numbers|
        |boolean|Represents true and false|
        |srring|It is used to represent a sequence of characters|
        |void|Generally used on function return-types|
        |null|It is used when an object does not have any value|
        |undefined|Denotes value given to uninitialized variable|
        |any|If variable is declared with any data-type then any type of value can be assigned to that variable|
    - Some examples are:-
        ```ts
            let a:null=null;
            let b: number = 123;
            let c: number = 123.456;
            let d: string = ‘Geeks’;
            let e: undefined = undefined;
            let f: boolean = true;
            let g: number = 0b111001; // Binary
            let i: number = 0xadf0d; // Hexa-Decimal
        ```    

2. What is **Generic data type**?
    - Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.Generics makes it easier to write reusable code.
    - Generics is a tool which provides a way to create reusable components. It creates a component that can work with a variety of data types rather than a single data type. It allows users to consume these components and use their own types. 
    - Generics provides type safety without compromising the performance, or productivity.
    - In TypeScript, we can create generic classes, generic functions, generic methods, and generic interfaces. 
    - In generics, we need to write a type parameter between the open (<) and close (>) brackets, which makes it strongly typed collections. Generics use a special kind of type variable <T> that denotes types.
    - **Advantage of Generics:-** There are mainly three advantages of generics. They are as follows:
        * Type-safety: We can hold only a single type of objects in generics. It doesn't allow to store other objects.
        * Typecasting is not required: There is no need to typecast the object.
        * Compile-Time Checking: It is checked at compile time so the problem will not occur at runtime.

3. What is **type inferring** in TS?
    - TypeScript infers types of variables when there is no explicit information available in the form of type annotations.
    - TypeScript, it is not necessary to annotate type always. The TypeScript compiler infers the type information when there is no explicit information available in the form of type annotations.
    - In TypeScript, TypeScript compiler infers the type information when:
       * Variables and members are initialized
       * Setting default values for parameters
       * Determined function return types

    ```ts
        var x = "xyz";  
        var y = 501;  
        x = y; // Compile-time Error: Type 'number' is not assignable to type 'string' 
    ```    

4. What are the possible ways to **define typing for functions**?
    -  There are two way to define typing for function :-
     1. Using pre-defined type like `string` or `number`
     2. Using Generics `<T>`
    
5. How to define **Generic type for Classes**?      
    - TypeScript supports generic classes. The generic type parameter is specified in angle brackets after the name of the class. A generic class can have generic fields (member variables) or methods.

    ```ts
        class KeyValuePair<T,U>
        { 
            private key: T;
            private val: U;

            setKeyValue(key: T, val: U): void { 
                this.key = key;
                this.val = val;
            }

            display():void { 
                console.log(`Key = ${this.key}, val = ${this.val}`);
            }
        }

        let kvp1 = new KeyValuePair<number, string>();
        kvp1.setKeyValue(1, "Steve");
        kvp1.display();
     ```
    > **OUTPUT:- Key = 1, Val = Steve** 
    ```ts
        let kvp2 = new KayValuePair<string, string>();
        kvp2.SetKeyValue("CEO", "Bill"); 
        kvp2.display(); 
    ```
    > **OUTPUT :- Output: Key = CEO, Val = Bill**


---
## Programs
---

1. Define the types in typescript for the given following JavaScript code.
    - **Todo:**
        - Define type/interface for a single Todo object.
        - Define type for each function.
        - Do not use `any` (TS Data Type) type of typescript.
    **Code:**
    ```ts
        var todos = [];
        function add(name, description) {
            return todos.push({
            name: name,
            description: description,
            done: false
            });
        }
        function remove(index) {
            return todos.splice(index, 1);
        }
        function list() {
            todos.forEach(function(todo, index) {
            console.log(index + " - " + todo.name);
            });
        }
        function update(index, name, description) {
            todos[index].name = name;
            todos[index].description = description;
            return todos[index];
        }
    ```  
### SOLUTION:-

```ts
        type TODO = {
            name: string,
            description: string,
            done: boolean
        }
        let todos: Array<TODO> = [];
        function add(name: string, description: string): number {
            return todos.push({name: name, description: description, done: false});
        }
        function remove(index: number): Array<TODO> {
            return todos.splice(index, 1);
        }
        function list(): void {
            todos.forEach(function (todo: TODO, index: number) {
            console.log(index + " -" + todo.name);
        });
        }
        function update(index: number, name: string, description: string): TODO {
            todos[index].name = name;
            todos[index].description = description;
            return todos[index];
        }
 ```


