## Theory
---

1. What is **JavaScript**? 
    - JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images etc.

2. What is the difference between b/w **let** and **var**? 
    |let|var|
    |---|---|
    |let is blocked-scoped.|var is function-scoped.|
    |let does not allow to redeclare variables.|var allows to redeclare variables.|
    |Hoisting does not occur in let.|Hoisting occurs in var.|

3. Why do we prefer **const** over **var**?
    - const doesn't let us reassign the variable and it's value while var let us reassign the variable and it's value.
    - var declarations are globally scoped or function scoped while let and const are block scoped.

4. What is the use of javascript in **web browsers**?
    - JavaScript allows users to interact with web pages.
    - Add new HTML to the page, change the existing content, modify styles.
    - React to user actions, run on mouse clicks, pointer movements, key presses.
    - JS is used in browsers to make content dynamic.

5. What are **Objects**?
    - An object is a collection of properties, and a property is an association between a name (or key) and a value.
    - A property's value can be a function, in which case the property is known as a method.

6. What is an **array** and how is it different from an Object in Javascript?    
    - An array is an ordered collection of data. Arrays are used to store multiple values in a single variable.
    - Each item in an array has a number attached to it, called a numeric index, that allows you to access it. 
    - An object is a collection of key - value pairs where values can have any data type.
    - The main difference between an array and an object is that a particular element in an array can be uniquely identified by it's **index** while a particular element in an object can be uniquely identified by it's **key**.

7. What is a **function**?
    - A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output. To use a function, you must define it somewhere in the scope from which you wish to call it.

8. How can we implement **call by value and call by reference** in Javascript?

    |Call by Value|Call by Reference|
    |-------------|-----------------|
    |The original variable is not modified on changes in other variables.|The original variable gets modified on changes in other variables.|
    |Actual and copied variables will be created in different memory locations.|Actual and copied variables are created in the same memory location.|
    |On passing variables in a function, any changes made in the passed variable will not affect the original one.|On passing variables in a function, any changes made in the passed parameter will update the original variable’s reference too.|
        
9. What are the **primitive data types** in Javascript?
    - The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types.
    - Primitive data type is data that is not an object and has no methods or properties. 
    - There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

10. What is DOM?
    - The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.
    - DOM is a way to represent the webpage in a structured hierarchical way so that it will become easier for programmers and users to glide through the document.

11. Why do we need DOM?
    - HTML is used to structure the web pages and Javascript is used to add behavior to our web pages. When an HTML file is loaded into the browser, the javascript can not understand the HTML document directly. So, a corresponding document is created(DOM). DOM is basically the representation of the same HTML document but in a different format with the use of objects. 
    

## Programs
---

1. Average of array nums in Javascript?

```JavaScript
const avg = (arr) => {
	let sum = arr.reduce((result, item) => result+item, 0)
	return (sum / arr.length)
}
console.log(avg([10, 20, 35, 45, 50]))
```
>**OUTPUT :- 32**


2. Swap two numbers by reference?
```JavaScript
const swap = (num1, num2) => {
	let temp = num1
	num1 = num2
	num2 = temp
	return { num1, num2 }
}
console.log(swap(7, 30)) // Output - { num1: 3, num2: 2 }
```
>**OUTPUT :- {num1: 30, num2: 7}**

3. Print the fibonacci sequence?
```JavaScript
const fibonacci = (nterm) => {
        const number = nterm;
        let n1 = 0, n2 = 1, nextTerm;
        
        console.log('Fibonacci Series:')
        
        for (let i = 1; i <= number; i++) {
            console.log(n1);
            nextTerm = n1 + n2;
            n1 = n2;
            n2 = nextTerm;
        }
     }
        fibonacci(10)
```
>**OUTPUT :- Fibonacci Series: 0 1 1 2 3 5 8 13 21 34**


4. Sort an array by both ascending and descending order?
```JavaScript
const sort = (arr) => {
	let asc = new Int32Array(arr).sort()
	let desc = new Int32Array(arr).sort().reverse()
	return {
		"ascending": Array.from(asc),
		"descending": Array.from(desc)
	}
}
console.log(sort([33, 25, 9, 84, 50])) 
```
>**OUTPUT :- ascending: [9, 25, 33, 50, 84] , descending:[84, 50, 33, 25, 9]**


5. Show a variable value in an HTML webpage using DOM?
```js
 function myFunction() {
            var x = document.getElementById("myVar");
            x.style.color = "red";
        }
```