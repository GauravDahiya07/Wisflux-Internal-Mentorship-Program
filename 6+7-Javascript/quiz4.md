## Theory
---

1. What are **anonymous functions** in JavaScript?
    - It is a function that does not have any name associated with it. Normally we use the function keyword before the function name to define a function in JavaScript, however, in anonymous functions in JavaScript, we use only the function keyword without the function name.
    - An anonymous function is not accessible after its initial creation, it can only be accessed by a variable it is stored in as a function as a value. An anonymous function can also have multiple arguments, but only one expression.
    - When we create an anonymous function, it is declared without any identifier. It is the difference between a normal function and an anonymous function.
    ```js
        (function () {
         console.log("Welcome to Wisflux!");
        })();
    ```
    > **OUTPUT :- Welcome to Wishflux**    

2. Explain **Strict comparison and Abstract comparison** in javascript?   
    - Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different. 
    - Consider the following example:
        ```js
            console.log(3 == "3"); // true
            console.log(3 === "3"); // false.
        ```    
        > **REASON :-** Using two equal signs returns true because the string “3” is converted to the number 3 before the comparison is made. Three equal signs sees that the types are different and returns false.


3. Difference b/w **arrow functions** and **regular functions**?
    - An arrow function expression is a compact alternative to a traditional function expression.
    - Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
    - Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
    - Arrow functions cannot use yield within their body and cannot be created as generator functions.
    - A regular function can be written like this :- 
        ```js
        function hello() {
            console.log("Hello")
        }
        ```
    - Or like this :- 
        ```js
        const hello = function () {
            console.log("Hello")
        }
        ```
    - Every time we need to write the `function` keyword in order to declare the function.
    - ES6 introduced the arrow functions:- 
        ```js
        const hello = () => {
            console.log("Hello")
        }
        ```
    - There is no need to write the `function` keyword.
        ```js
        const hello = () => console.log("Hello")
        ```

4. What is **Hoisting** in JavaScript?
    - JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
    - Hoisting is not a term normatively defined in the ECMAScript specification. The spec does define a group of declarations as HoistableDeclaration, but this only includes function, function*, async function, and async function* declarations.
    - In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local. 
    - **Note:** JavaScript only hoists declarations, not initializations.

5. JavaScript is a **garbage collected** programming language, explain how?
    - JavaScript automatically collects the information of the unmercenary memory blocks and removes them from the memory. 
    - The garbage collector searches for reachability from the root object to determine whether an object will be used in the future or not.
    - The main concept of the algorithms designed for garbage collection is the concept of reference. An object can have a reference to another object if the previous object has access to the latter. 
    - For example, a JavaScript object can have an implicit reference(when the reference is to its prototypes) and explicit( when the reference is to its properties values).
    
6. Explain **Shallow copy vs Deep copy** in Javascript?
    - A **shallow copy** of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.
    - This basically means that if we change the source variable, then the second variable which was initialized with the reference of the source variable will also change.
    - For Example :- 
        ```js
        const arr1 = [10, 9, 8, 7, 6]
        const arr2 = arr1
        console.log(arr1, arr2) 
        ```
        > **OUTPUT :-[10, 9, 8, 7, 6] [10, 9, 8, 7, 6]**

        ```js         
        arr1[2] = "xyz"
        console.log(arr1, arr2)
        ```
        > **OUTPUT :-[ 10, 9, 'xyz', 7, 6 ] [ 10, 9, 'xyz', 7, 6 ]**

        
    - A **deep copy** of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. 
    - This basically means that if we deep copy the value of one variable to another variable, the second variable will not get initialized with the reference of the first one. Instead, new memory will be allocated for the second variable. Hence, any change made in the first variable will not be reflected in the second variable.
        ```js
        const arr1 = [10, 9, 8, 7, 6]
        const arr2 = JSON.parse(JSON.stringify(arr1))
        console.log(arr1, arr2) 
         ```
        > **OUTPUT :-[10, 9, 8, 7, 6] [10, 9, 8, 7, 6]**

        ```js         
        arr1[2] = "xyz"
        console.log(arr1, arr2) 
        ```
        > **OUTPUT :-[ 10, 9, 'xyz', 7, 6 ] [ 10, 9, 8, 7, 6 ]**


7. What is **Object.freeze**?
    - The Object.freeze() static method freezes an object.
    - Freezing an object prevents extensions and makes existing properties non-writable and non-configurable.
    - A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. 
    - freeze() returns the same object that was passed in.
    ```js
        const obj = {
        prop: 42
        };

        Object.freeze(obj);

        obj.prop = 33;
        // Throws an error in strict mode

        console.log(obj.prop);
    ```
    > **OUTPUT :- 42**    

---
## Programs
---

1. Write a function that generates a random number between two ranges, -100 to 0 and 800 - 900.

    ```js
        const randomInTwoRange = (min1, max1, min2, max2) => {
        const num1 = Math.floor(Math.random() * (max1 - min1) + min1)
        const num2 = Math.floor(Math.random() * (max2 - min2) + min2)
        return [num1, num2]
        }
        console.log(randomInTwoRange(-45, -99, 876, 900)) 
        console.log(randomInTwoRange(-65, 834, -78, 888)) 
    ```
    > **OUTPUT :- [-96, 888]  [-52, 521]**
