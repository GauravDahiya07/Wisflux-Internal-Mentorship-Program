## Theory
---
1. Explain as much as you know about **objects** in javascript? 
    - Objects in JavaScript may be defined as an unordered collection of related data, of primitive or reference types, in the form of “key: value” pairs. These keys can be variables or functions and are called properties and methods, respectively, in the context of an object.
    - An object can be created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where a key is a string (also called a “property name”), and the value can be anything
    - There are 3 ways to create objects:-
        * 1) JavaScript Object by object literal:-
            ```JavaScript
                emp={id:102,name:"Shyam Kumar",salary:40000}  
                document.write(emp.id+" "+emp.name+" "+emp.salary); 
            ```
            >**OUTPUT :- 102 Shyam Kumar 40000**
        * 2) By creating instance of Object :-
            ```JavaScript
                var emp=new Object();  
                emp.id=101;  
                emp.name="Ravi Malik";  
                emp.salary=50000;  
                document.write(emp.id+" "+emp.name+" "+emp.salary); 
            ```
            >**OUTPUT :- 101 Ravi Malik 50000**        
        * 3) By using an Object constructor
            ```JavaScript
                function emp(id,name,salary){  
                this.id=id;  
                this.name=name;  
                this.salary=salary;  
                }  
                e=new emp(103,"Vimal Jaiswal",30000);  
                
                document.write(e.id+" "+e.name+" "+e.salary);  
            ```
            >**OUTPUT :- 103 Vimal Jaiswal 30000**

2. Read the code :
    ```JavaScript
    // This is an object based vector template
    var vector = {
    _x: 0,
    _y: 0,
    create: function(x,y){
    var obj = Object.create(this);
    obj.setX(x);
    obj.setY(y);
    return obj;
        },
    }
    ```
    Can you make a “class” based alternative to it? Using Javascript OOP features.
  
  * **ALTERNATIVE CODE IS:-**
    ```JavaScript
        class Vector {
                constructor () {
                    this.x = 0
                    this.y = 0
                }
            set setX(x) {
                this.x = x
            }
            set setY(y) {
                this.y = y
                }
	        create(x, y) {
                let obj = Object.create(this)
                obj.setX = x
                obj.setY = y
                return obj
            }
        }
        let vec1 = new Vector()
        console.log(vec1.create(5, 6))
    ```
    >**OUTPUT :- Vector {x: 5, y: 6}**

3. Do you think javascript is the language of the future?
    - Yes, I think JavaScript is the language of the future.
    - JavaScript is one of the leading programming languages. In fact, it is called the programming language of the web. JS is a part of the ever-increasing number of programming options, many of which are, in fact, inspired by it.
    - It empowers Over 95% of the web, 95.1% of the Internet is powered by JavaScript. The stats are likely to increase soon.


---
## Programs
---

1. Write code implementations for the following Array methods :-

   * forEach :- 
        
        ```JavaScript
        const arr = [1, 2, 3, 4, 5]
        arr.forEach(item => console.log(item)) 
        ```
        > **OUTPUT :-1 2 3 4 5 [In different lines]**

   * map :-

        ```JavaScript
        const arr1 = [1, 2, 3, 4, 5]
        console.log(arr1.map(num => num * 2)) 
        ```
        > **OUTPUT :-[2, 4, 6, 8, 10]**

   * filter :- 

        ```JavaScript
        const arr2 = [1, 2, 3, 4, 5]        
        console.log(arr2.filter(num => ((num % 2) == 0))) 
        ```
        > **OUTPUT :-[2, 4]**

   * reduce :- 

        ```JavaScript
        const arr3 = [1, 2, 3, 4, 5, 6, 7]        
        console.log(arr3.reduce((prev, initial) => prev+initial, 0)) 
        ```
        > **OUTPUT :- 28**

   * includes :- 

        ```JavaScript
        const arr4 = [1, 2, 3, 4, 5]        
        console.log(arr4.includes(5)) 
        console.log(arr4.includes(8)) 
        ```
        > **OUTPUT :- true false**

   * some :-

        ```JavaScript
        const arr5 = [1, 2, 3, 4, 5]        
        console.log(arr5.some(element => element+2 === 8)) 
        ```
        > **OUTPUT :- false**

   * every :-

        ```JavaScript
        const arr = [1, 2, 3, 4, 5]
        console.log(arr.every(element => element % 2 === 0)) 
        ```
        > **OUTPUT :-false**

   
2. Simple Array Implementation

     ```JavaScript
        const arr = [1, 2, 3]
        console.log(arr)
    ```
    > **OUTPUT :- [1, 2, 3]**


3. To Do List Task

```JavaScript
    let ToDo = []
    let Completed = []
    function add(title) {
        if(title === "") return -1
        const id = Math.floor(Math.random() * 10)
        const task = {
            id,
            'task': title
        }
        ToDo.push(task)
        return id
    }
    function remove(id) {
        let result = false
        ToDo.forEach(item => {
            if(id in item) {
                result = true
                const idx = ToDo.indexOf(item)
                ToDo.splice(idx, idx+1)
            }
        })
        return result
    }
    function update(id, title) {
        let result = false
        ToDo.forEach(item => {
            if(id in item) {
                result = true
                item.task = title
            }
        })
        return result
    }
    function markAsCompleted(id) {
        let result = false
        ToDo.forEach(item => {
            if(id in item) {
                result = true
                const idx = ToDo.indexOf(item)
                const task = ToDo.splice(idx, idx+1)
                Completed.push(task)
            }
        })
        return result
    }
```