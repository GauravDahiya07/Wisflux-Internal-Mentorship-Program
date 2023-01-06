## Theory
---

1. What is **NodeJS**?
    -  Node.js is an open-source and cross-platform runtime environment for executing JavaScript code outside a browser.
    - We often use Node.js for building back-end services like APIs like Web App or Mobile App.
    - Whenever a client requests something from the client side of the application what happens is , the request is first sent to the server and then in that server some processing or calculations goes on for the validation of the client side request and after doing all such validation a response is sent to the client side. 
    - For running our web applications outside the client’s browser , NodeJS is basically used as an open-source and cross platform JavaScript runtime environment.For running the server side applications we use this.
    - In 2009, NodeJs was developed by a guy called Ryan Dahla 

2. What is **V8 Engine**?
    - V8 is the name of the JavaScript engine that powers Google Chrome. It's the thing that takes our JavaScript and executes it while browsing with Chrome.
    - V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js
    - The cool thing is that the JavaScript engine is independent of the browser in which it's hosted. This key feature enabled the rise of Node.js. 

3. What is **Event Loop** in NodeJS?
    - Node.js is a single-threaded event-driven platform that is capable of running non-blocking, asynchronously programming.
    - The event loop allows Node.js to perform non-blocking I/O operations despite the fact that JavaScript is single-threaded. It is done by assigning operations to the operating system whenever and wherever possible.
    - Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency.
    - **Features of Event Loop:-**
        * Event loop is an endless loop, which waits for tasks, executes them and then sleeps until it receives more tasks.
        * The event loop executes tasks from the event queue only when the call stack is empty i.e. there is no ongoing task.
        * The event loop allows us to use callbacks and promises.
        * The event loop executes the tasks starting from the oldest first.

4. What is the use of **tsconfig.json** file?
    - The presence of a tsconfig.json file in a directory indicates that the directory is the root of a TypeScript project. The tsconfig.json file specifies the root files and the compiler options required to compile the project.
    - By invoking tsc with no input files, in which case the compiler searches for the tsconfig.json file starting in the current directory and continuing up the parent directory chain.
    - Tsconfig.json file is a file of JSON format which allows us to point the root level files and different compiler options to setup that require to compile a TypeScript based projects.
    
5. What are the methods provided by **`fs` module** to manipulate files?
    - Node.js includes fs module to access physical file system. 
    - The fs module is responsible for all the asynchronous or synchronous file I/O operations.
    - Important method of fs module :-

    |Method|Description|
    |------|-----------|
    |fs.readFile(fileName [,options], callback)|Reads existing file.|
    |fs.writeFile(filename, data[, options], callback)|Writes to the file. If file exists then overwrite the content otherwise creates new file.|
    |fs.open(path, flags[, mode], callback)|Opens file for reading or writing.|
    |fs.rename(oldPath, newPath, callback)|Renames an existing file.|
    |fs.link(srcpath, dstpath, callback)|Links file asynchronously.|
    |fs.mkdir(path[, mode], callback)|Creates a new directory.|
    |fs.rmdir(path, callback)|Renames an existing directory.|

6. What is **API**?
    - An application programming interface is a way for two or more computer programs to communicate with each other.
    - It is a type of software interface, offering a service to other pieces of software. 
    - An API is simply a medium to fetch or send data between interfaces.
    - Application Programming Interfaces (APIs) are constructs made available in programming languages to allow developers to create complex functionality more easily.
    - Let’s say you want to make an application that provides the user with some real-time data fetched from the server or maybe even allows you to modify or add data to some other endpoint. This is made possible by the API or the Application Programming Interface.

7. What is **JSON format**?
    - JSON stands for JavaScript Object Notation 
    - JSON is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays.
    - JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data.
    ```json
        {
        "squadName": "Super hero squad",
        "homeTown": "Metro City",
        "formed": 2016,
        "secretBase": "Super tower",
        "active": true,
        }
    ```

8. Why we use **JSON format for API**?
    - JSON is a lightweight format that is easy to read and write.
    - JSON is language independent. This means that it can be used with any programming language.
    - JSON is self-describing. This means that a JSON document can be read and understood without any help from other sources.
    - It is easy to parse. This means that a JSON document can be easily converted into a data structure that can be used by a program. 
    - It did not require the rather inconvenient “data binding” and “data serialization” steps that were notoriously difficult when using XML-based APIs.
    - Instead, JSON allowed APIs to represent structured data in a way that simply was a better fit for the conceptual universe that most developers live in.

9. What is a **Framework**?
    - A framework is a structure that you can build software on. It serves as a foundation, so you're not starting entirely from scratch.
    - Using frameworks saves time and reduces the risk of errors. You don't need to write everything from the ground up, so there's less chance of introducing errors. 
    - A JavaScript framework is a collection of JavaScript code libraries that provide a web developer with pre-written code for routine programming tasks.
    - Express is a back-end framework for Node.js that allows you to start and configure a server with very little overhead. It's free, open-source, and is written in JavaScript.

10. How an **HTTP Communication** works?
    - HTTP is a protocol for fetching resources such as HTML documents. 
    -  It is the foundation of any data exchange on the Web and it is a client-server protocol, which means requests are initiated by the recipient, usually the Web browser.
    - The Hypertext Transfer Protocol is an application protocol for distributed, collaborative, hypermedia information systems that allows users to communicate data on the World Wide Web.
    - HTTP utilizes specific request methods in order to perform various tasks. They are:- 
        * GET requests a specific resource in its entirety
        * HEAD requests a specific resource without the body content
        * POST adds content, messages, or data to a new page under an existing web resource
        * PUT directly modifies an existing web resource or creates a new URI if need be
        * DELETE gets rid of a specified resource
        * TRACE shows users any changes or additions made to a web resource
        * OPTIONS shows users which HTTP methods are available for a specific URL
        * CONNECT converts the request connection to a transparent TCP/IP tunnel
        * PATCH partially modifies a web resource


11. What is **Middleware** in ExpressJS?    
    - A request handler with access to the application's request-response cycle is known as middleware. 
    - It's a function that holds the request object, the response object, and the middleware function.
    - Middleware can also send the response to the server before the request.
    - **Advantages of using middleware:**
        * Middleware can process request objects multiple times before the server works for that request.
        * Middleware can be used to add logging and authentication functionality.
        * Middleware improves client-side rendering performance.
        * Middleware is used for setting some specific HTTP headers.
        * Middleware helps for Optimization and better performance.