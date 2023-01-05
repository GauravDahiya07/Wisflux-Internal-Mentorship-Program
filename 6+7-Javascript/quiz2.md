## Theory
---

1. Why do we use functions in JavaScript?
    - There are mainly two advantages of JavaScript functions:-
        - **Code reusability**: We can call a function several times so it save coding.
        - **Less coding**: It makes our program compact. We don’t need to write many lines of code each time to perform a common task.
    

2. What is **Function Invocation**? 
    - The JavaScript Function Invocation is used to execute the function code and it is common to use the term “call a function” instead of “invoke a function”. The code inside a function is executed when the function is invoked. 
    -  A Function is Invoked with thw help of the parenthesis "()"
    

3. Does a **function behave like an object** in Javascript? Prove it by an example.
    - In JavaScript, functions are first-class objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties. They can also have properties and methods just like any other object
    -  More specifically, a function is a `Function` object.
    - This enables a function in JS to have special properties like the ability to invoke.
   ```JavaScript
   function sayHello() {
       console.log("Hello Everyone!")
   
       console.log("how are you!")
   }
   
   sayHello() // Output :- Hello Everyone
   
   console.log(sayHello) // Output :- [Function: sayHello]
   
   sayHello.number = 10
   
   console.log(sayHello) // Output :- [Function: sayHello] { number: 10 }
   
   console.log(sayHello.name) // Output :- sayHello
   console.log(sayHello.length) // Output :- 0 (Because the length property returns the number of parameters passed to the function)
   ```

4. What are Events in Javascript?
    - JavaScript's interaction with HTML is handled through events that occur when the user or the browser manipulates a page.
    - When the page loads, it is called an event. When the user clicks a button, that click too is an event.
    - Events are actions or occurrences that happen in the system you are programming, which the system tells you about so your code can react to them.

5. What is a **string**?
    - A string is a sequence of one or more characters that may consist of letters, numbers, or symbols. Strings in JavaScript are primitive data types and immutable, which means they are unchanging.

6. What is an array? Is it **static or dynamic** in Javascript?
    - An array is an ordered collection of elements.
    - JavaScript arrays are **dynamic** in nature. 
    - This means that there is no pre-defined length of the array.
    - The size of the array is automatically increased / decreased based on the insertion / deletion of elements from it.

7. Difference between **Map and Set**?
    - The **Map** object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
    - The **Set** object lets you store unique values of any type, whether primitive values or object references.

8. Difference between **Array and Map**?
    - The **Map** object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. 
    - The **Array** object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

9. What are **array methods**? List a few names?
    - Array methods are functions built-in to JavaScript that we can apply to our arrays
    - Each method has a unique function that performs a change or calculation to our array and saves us from writing common functions from scratch.
    - JavaScript Array Methods:-
        1. **map( )** - This method creates a new array with the results of calling a provided function on every element in this array.
        2. **filter( )** - This method creates a new array with only elements that passes the condition inside the provided function.
        3. **sort( )** - This method is used to arrange/sort array’s elements either in ascending or descending order.
        4. **forEach( )** - This method helps to loop over array by executing a provided callback function for each element in an array.
        5. **concat( )** - This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.
        6. **includes( )** - This method checks if an array includes the element that passes the condition, returning true or false as appropriate.
        7. **includes( )** - This method checks if an array includes the element that passes the condition, returning true or false as appropriate.
        

10. In how many ways can we traverse through an array in Javascript?
    - There are a various ways to traverse through an array in JS. A few of them are :-
    
   ```JavaScript
    const arr = [1, 2, 3, 4, 5, 6]
    
    for(let i = 0; i < arr.length; i ++) {
        console.log(arr[i])
    }
    
    for (let num of arr) {
        console.log(num)
    }
    
    for (let num in arr) {
        console.log(num)
    }
    
    arr.forEach((item) => console.log(item))
    
    arr.map(num => console.log(num))
   ```
   

---
## Programs
---

1. Reverse an array? 

```JavaScript
    const arr = [1, 2, 3, 4, 5, 6]
    console.log(arr.reverse())
```
>**OUTPUT :-  [ 6, 5, 4, 3, 2, 1 ]**


2. Explain the properties of the join array method function via program?
```js
const arr = [1, 2, 3, 4, 5]
console.log(arr.join()) // Output :- 1,2,3,4,5
console.log(arr.join(' - ')) // Output :- 1 - 2 - 3 - 4 - 5
console.log(arr.join(',')) // Output :- 1,2,3,4,5
console.log(arr.join(' ABC ')) // Output :- 1 ABC 2 ABC 3 ABC 4 ABC 5
```
>Output is writtern in front of the lines.

3. Show all the values of an array in a html webpage using DOM and forEach method?
```js
const arr = [1, 2, 3, 4, 5]
arr.forEach(item => document.getElementById("arrValues").innerText += item)
```


4. Merge sets in JavaScript?
```js
const set1 = new Set([1, 2])
console.log(set1) // Output :- Set(2) { 1, 2 }
const set2 = new Set(["Hello", "Everybody"])
console.log(set2) // Output :- Set(2) { 'Hello', 'Everybody' }
const set3 = new Set([...set1, ...set2])
console.log(set3) // Output :- Set(4) { 1, 2, 'Hello', 'Everybody' }
```