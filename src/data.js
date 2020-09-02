export const data = [
  {
    id: "h1",
    language: "Html",
    question: `What is HTML question 1?
    The odds are that you won’t be asked this directly, but it can’t hurt to remind yourself what HTML stands for: Hyper Text Markup Language.
     This means that an HTML document, written in plain text, is used to describe the structure and content of web pages, with links to other pages and resources. In its most basic form, you can define blocks of content, which are displayed depending on the type of block you used.`,
    answer: `Html Answer1 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "h2",
    language: "Html",
    question: `What is the difference between HTML elements and tags question 2?
    Elements
    Each part of a web page, such as a paragraph, an image, a link or anything else you can interact with, is an element. Each type of element has its own behavior - for answer you can click on links, or type in text boxes.
    
    Tags
    An HTML document is a simple, plain text document, which you are able to open with any text editor on your computer. When you open one, you’ll see the document is made up of tags, which are keywords surrounded by angled brackets, each of which describes an HTML element. Here you can see HTML tags telling the browser how to render the text element inside:`,
    answer: `Html Answer2 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "h3",
    language: "Html",
    question: `What are attributes and how do you use them Qeustion 3?
    Each tag can also have additional attributes, which change the way the tag behaves or is displayed. For answer, an <input> tag has a type attribute, which you can use to specify whether it’s a text field, checkbox, radio button or one of many more options.
    
    Attributes are specified directly after the name of the tag, inside the two angled brackets. They should only ever appear in opening tags or in self-closing tags - they can never be in closing tags. They are followed by an equals sign = and the chosen value in double quotes ". Take care not to include any spaces before and after the equals sign! Multiple attributes can be defined on a single tag, separated by a space.`,
    answer: `Html Answer3 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "c1",
    language: "Css",
    question: `What is CSS question 1?

    CSS outlines the style of an HTML webpage. It is a language by which we can set the behavior of an HTML webpage. It describes how the HTML content will be shown on screen.
    
    CSS controls the layout of several HTML web pages. CSS is referred to as the Cascading Style Sheet.`,
    answer: `Css Answer1 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "c2",
    language: "Css",
    question: `radom CSS question 2`,
    answer: `Css Answer2 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "c3",
    language: "Css",
    question: `random css questio 3`,
    answer: `ACss nswer3 ipsum dolor sit amet consectetur adipisicing elit. Eum, adipisci!`,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `1. What is JavaScript?`,
    answer: `JavaScript is an object-oriented programming language or scripting language . In which, the scripts are optimized for both server and client side. It Allows you to implement complex features on web pages. Displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes.t is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS)  `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `2. What is OOP? `,
    answer: `OOP is that we use objects to model elements that we want to represent inside our programs, and/or provide a simple way to access functionality.Objects can contain related data and code, which represent information about the element you are trying to model, and functionality or behavior that you want it to have. Object data (and often, functions too) can be stored neatly (the official word is encapsulated) inside an object package (which can be given a specific name to refer to, which is sometimes called a namespace), making it easy to structure and access; objects are also commonly used as data stores that can be easily sent across the network.  `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `3. Encapsulation? `,
    answer: `Encapsulation means hiding information or data. It refers to the ability of the object to execute its functionality without revealing any execution details to the caller. In other words, the private variable is only visible to the current function and is not accessible to the global scope or other functions. *************** const Book = function(t, a) {
        let title = t; 
        let author = a; 
        
        return {
           summary : function() { 
             console.log({title} written by {author}.);
           } 
        }
     }
     const book1 = new Book('Hippie', 'Paulo Coelho');
     book1.summary();
     > Hippie written by Paulo Coelho. ***************  
     In the above code the title and the author are only visible inside the scope of the function Book and the method summary is visible to the caller of Book. So the title and the author are encapsulated inside Book.`,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `4. Abstraction`,
    answer: `Abstraction means implementation hiding. It is a way of hiding the implementation details and only showing the essential features to the caller. In other words, it hides irrelevant details and shows only what’s necessary to the outer world. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `5. `,
    answer: ` `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `6. Reusability/Inheritance`,
    answer: `JavaScript inheritance is a mechanism allows us to create a new class using the existing class. It means the child class inherits all the properties and behaviors of the parent class.
    Generally, JavaScript is not a class-based language. The keyword class was introduced in ES6 but is syntactical sugar, JavaScript remains prototype-based. In JavaScript inheritance is achieved by using the prototype. This pattern is called Behavior Delegation Pattern or prototypal inheritance. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `7. Polymorphism`,
    answer: `The ability to call the same method on different objects and have each of them respond in their own way is called polymorphism. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `8. Association`,
    answer: `Association is the relationship between two or more objects. Each Object is independent. In other words, association defines the multiplicity between objects: one-to-one, one-to-many, many-to-one, many-to-many. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `9. Aggregation`,
    answer: `Aggregation is a special case of an association. In the relationship between two objects, one object can have a more major role than the other. In other words, when an object takes more ownership than another one, that is aggregation. The owner object is often called the aggregate and the owned object is called the component. Aggregation is also called a “Has-a” relationship. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `10. Composition `,
    answer: `Composition is a special case of aggregation. Composition is when an object contains another object and the contained object can’t live without the container object. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `11. Name the different types of JavaScript data?`,
    answer: `1. Function  
    2. Boolean  
    3. Object  
    4. Number 
    5. Null `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `12. What are the advantages of JavaScript?`,
    answer: `Less server interaction − You can validate user input before sending the page off to the server. This saves server traffic, which means less load on your server.
    Immediate feedback to the visitors − They don’t have to wait for a page reload to see if they have forgotten to enter something.
    Increased interactivity − You can create interfaces that react when the user hovers over them with a mouse or activates them via the keyboard.
    Richer interfaces − You can use JavaScript to include such items as drag-and-drop components and sliders to give a Rich Interface to your site visitors. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `13. Can you assign an anonymous function to a variable and pass it as an argument to another function?`,
    answer: `Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `14.Parameters vs arguments `,
    answer: `Function parameters are the names listed in the function definition.
    Function arguments are the real values passed to (and received by) the function. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `15. What are the scopes of a variable in JavaScript?`,
    answer: `The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes.
    • Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.
    • Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `16. What is the purpose of ‘This’ operator in JavaScript?`,
    answer: `The JavaScript this keyword refers to the object it belongs to. This has different values depending on where it is used. In a method, this refers to the owner object and in a function, this refers to the global object. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `17.What is Callback? `,
    answer: `A callback is a plain JavaScript function passed to some method as an argument or option. It is a function that is to be executed after another function has finished executing, hence the name ‘call back‘. In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `18. What is Closure? Give an example. `,
    answer: `A closure gives you access to an outer function’s scope from an inner function In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it.
    A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)  `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `19. Name some of the built-in methods and the values returned by them. `,
    answer: `CharAt()	It returns the character at the specified index.
    Concat()	It joins two or more strings.
    forEach()	It calls a function for each element in the array.
    indexOf()	It returns the index within the calling String object of the first occurrence of the specified value.
    length()	It returns the length of the string.
    pop()	It removes the last element from an array and returns that element.
    push()	It adds one or more elements to the end of an array and returns the new length of the array.
    reverse()	It reverses the order of the elements of an array. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `20. What are the variable naming conventions in JavaScript?`,
    answer: `The following rules are to be followed while naming variables in JavaScript:
    1. You should not use any of the JavaScript reserved keyword as variable name. For example, break or boolean variable names are not valid.
    2. JavaScript variable names should not start with a numeral (0-9). They must begin with a letter or the underscore character. For example, 123name is an invalid variable name but _123name or name123 is a valid one.
    3. JavaScript variable names are case sensitive. For example, Test and test are two different variables. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `21. How to create a cookie using JavaScript?`,
    answer: `The simplest way to create a cookie is to assign a string value to the document.cookie object, which looks like this-
    Syntax :
     *************
    
    document.cookie = "key1 = value1; key2 = value2; expires = date";
     `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `22. What is the difference between Attributes and Property?`,
    answer: `Attributes-  provide more details on an element like id, type, value etc.
    Property-  is the value assigned to the property like type=”text”, value=’Name’ etc. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `23. List out the different ways an HTML element can be accessed in a JavaScript code.`,
    answer: `(i) getElementById(‘idname’): Gets an element by its ID name
    (ii) getElementsByClass(‘classname’): Gets all the elements that have the given classname.
    (iii) getElementsByTagName(‘tagname’): Gets all the elements that have the given tag name.
    (iv) querySelector(): This function takes css style selector and returns the first selected element. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `24. What is NaN in JavaScript?`,
    answer: `NaN is a short form of Not a Number. Since NaN always compares unequal to any number, including NaN, it is usually used to indicate an error condition for a function that should return a valid number. When a string or something else is being converted into a number and that cannot be done, then we get to see NaN.
    `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `25. What is negative infinity? `,
    answer: `The negative infinity in JavaScript is a constant value which is used to represent a value which is the lowest available. This means that no other number is lesser than this value Number.NEGATIVE_INFINITY `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `26. How to write comment in JavaScript?`,
    answer: `There are two types of comments in JavaScript.
    1. Single Line Comment: It is represented by // (double forward slash)
    2. Multi Line Comment: It is represented by slash with asterisk symbol as /* write comment here */ `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `27. What would be the result of 3+2+”7″?`,
    answer: `Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `28. What do mean by NULL in Javascript? `,
    answer: `The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `29. What is the difference between null & undefined?`,
    answer: `Undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `30.  What are all the looping structures in JavaScript?`,
    answer: `Ø For
    Ø While
    Ø do-while loops `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `31. What are all the types of Pop up boxes available in JavaScript?`,
    answer: `Ø Alert
    Ø Confirm and
    Ø Prompt `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `32. What is the role of break and continue statements? `,
    answer: `Break statement is used to come out of the current loop while the continue statement continues the current loop with a new recurrence. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `33. What is called Variable typing in Javascript? `,
    answer: `Variable typing is used to assign a number to a variable and the same variable can be assigned to a string. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `34. How do you convert numbers between different bases in JavaScript?`,
    answer: `Use the parseInt() function, that takes a string as the first parameter and the base as a second parameter. So to convert hexadecimal 3F to decimal, use parseInt (“3F”, 16); `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `35. ow do you assign object properties? `,
    answer: `obj[“number”] = 123 or obj.number = 123 `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `36. What is the use of Math Object in JavaScript?`,
    answer: `The math object provides you properties and methods for mathematical constants and functions.
    Example:
    var x = Math.PI; // Returns PI
    var y = Math.sqrt(16); // Returns the square root of 16 `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `37. Define Function `,
    answer: `Function is a block of code that can be reused as and when needed at various places. The function executes whenever it is called. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `38. Explain The For-In Loop?`,
    answer: `The for-in loop is used to loop through the properties of an object.
    The syntax for the for-in loop is
    for (variable name in object){
    statement or block to execute
    } ***************In each repetition, one property from the object is associated to the variable name, and the loop is continued till all the properties of the object are depleted.`,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `39. Which Keywords Are Used To Handle Exceptions?`,
    answer: `Try… Catch — finally and throw keywords for exception handling.
    Try{
    Code
    }
    Catch(exp){
    Code to throw an exception
    }
    Finally{
    Code runs either it finishes successfully or after catch `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `40. What is DOM? What is the use of document object?`,
    answer: `DOM stands for Document Object Model. A document object represent the html document. It can be used to access and change the content of html. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `41. How can you create an Array in JavaScript?`,
    answer: `You can define arrays using the array literal as follows −
    var x = [];
    var y = [1, 2, 3, 4, 5];`,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `42. What is the difference between == and === ?`,
    answer: `The == checks for value equality, but === checks for both type and value. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `43. What is an Constructor`,
    answer: `The constructor method is a special method of a class for creating and initializing an object of that class. A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object. 58. If you don't provide your own constructor, then a default constructor will be supplied for you. If your class is a base class, the default constructor is empty: `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `44. What is “SetInterval” function in javascript?`,
    answer: `“SetInterval” function is used to call the function (given as a parameter) repeatedly after some time delay. Below is the javascript code for the same –
    setInterval (function(){ alert(“Text to Show”); }, 5000); `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `45. Json.stringify()`,
    answer: `The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified. 
    **************** console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5))); ****************
    // expected output: ""2006-01-02T15:04:05.000Z"" `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `46. What is differential inheritance?`,
    answer: `Differential Inheritance is a common prototype-oriented model that uses the concept that most objects are derived from other, more generic objects, and only differ in a few small aspects. Each object maintains a reference to its prototype and a table of properties that are different. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `47. What is Javascript BOM?`,
    answer: `Browser Object Model (BOM) is the core of JavaScript on the web. The BOM provides you with objects that expose the web browser’s functionality. Itallows Javascript to communicate to the browser. ***** window, screen, location, history, navigator, timing, cookies. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `48. What are the different objects used in JavaScripts?`,
    answer: `avaScript uses a hierarchical structure that applies to the objects in a document. There are some objects that show the relationship of one object to another using the language.
    Window object :
    This is the topmost object in the hierarchy. It represent the content area of browser window that consists of HTML documents. Each frame is also a window that has some actions inside it.
    Document object :
    This object gets loaded in a window and consists of objects of different kind in the model. It consists of the content that will be written in the script.
    Form object :
    Form objects are used for more interaction with the users. It represents the form elements inside <FORM>…</FORM> tag. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `49. Adding JavaScript into an HTML Document `,
    answer: `ou can add JavaScript code in an HTML document by employing the dedicated HTML tag <script> that wraps around JavaScript code.
    The <script> tag can be placed in the <head> section of your HTML, in the <body> section, or after the </body> close tag, depending on when you want the JavaScript to load.
    In order to accommodate larger scripts or scripts that will be used across several pages, JavaScript code generally lives in one or more js files that are referenced within HTML documents, similarly to how external assets like CSS are referenced. 
    We can add a reference to this script to or below the <body> section, with the following line of code:
    
    <script src="js/script.js"></script> `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `50. How to convert a string to lowercase?`,
    answer: `var str=’MY First Project’;
    str = str.toLowerCase(); `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `51. How can you read properties of an Object in JavaScript? `,
    answer: `// Setting object properties
    user.name = “Nithin” ;
    user.email = “nithin3013@gmail.com” ;
    // Getting object properties
    user.name // Output: Nithin
    user.email // ==> Output: nithin3013@gmail.com `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `52.How to get the last index of a string in Javascript?  `,
    answer: `string.length-1 is used to get the last index of a string in Javascript
    Example:
    var str=”hello”;
    console.log(str.length-1); `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `53. What are the ways to define a variable in JavaScript?`,
    answer: `Var – The JavaScript variables statement is used to declare a variable and, optionally, we can initialize the value of that variable. Example: var a =10; Variable declarations are processed before the execution of the code.
    Const – The idea of const functions is not allow them to modify the object on which they are called. When a function is declared as const, it can be called on any type of object.
    Let – It is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm. It also signals that the variable will be used only in the block it’s defined in. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `54. What is the difference between Local storage & Session storage?`,
    answer: `Local Storage – The data is not sent back to the server for every HTTP request (HTML, images, JavaScript, CSS, etc) – reducing the amount of traffic between client and server. It will stay until it is manually cleared through settings or program.
    Session Storage – It is similar to local storage; the only difference is while data stored in local storage has no expiration time, data stored in session storage gets cleared when the page session ends. Session Storage will leave when the browser is closed. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `55.What is an event bubbling in JavaScript? `,
    answer: `Event bubbling is a way of event propagation in the HTML DOM API, when an event occurs in an element inside another element, and both elements have registered a handle for that event. With bubbling, the event is first captured and handled by the innermost element and then propagated to outer elements. The execution starts from that event and goes to its parent element. Then the execution passes to its parent element and so on till the body element. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `56.How are JavaScript primitive/object types passed in functions? `,
    answer: `One of the differences between the two is that Primitive Data Types are passed By Value and Objects are passed By Reference.
    By Value means creating a COPY of the original. Picture it like twins: they are born exactly the same, but the first twin doesn’t lose a leg when the second twin loses his in the war.
     By Reference means creating an ALIAS to the original. When your Mom calls you “Pumpkin Pie” although your name is Margaret, this doesn’t suddenly give birth to a clone of yourself: you are still one, but you can be called by these two very different names. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `57.What is the ‘Strict’ mode in JavaScript and how can it be enabled? `,
    answer: `Strict mode is a way to introduce better error-checking into your code.
    When you use strict mode, you cannot use implicitly declared variables, or assign a value to a read-only property, or add a property to an object that is not extensible.
    You can enable strict mode by adding “use strict” at the beginning of a file, a program, or a function. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `58.What is a prompt box in JavaScript?  `,
    answer: `A prompt box is a box which allows the user to enter input by providing a text box. The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want the user to input a value before entering a page. When a prompt box pops up, the user will have to click either “OK” or “Cancel” to proceed after entering an input value. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `59. How to empty an Array in JavaScript? `,
    answer: `Method 1 –


    1
    arrayList = []
    Above code will set the variable arrayList to a new empty array. This is recommended if you don’t have references to the original array arrayList anywhere else, because it will actually create a new, empty array. You should be careful with this method of emptying the array, because if you have referenced this array from another variable, then the original reference array will remain unchanged.
    
    Method 2 –
    
    
    1
    arrayList.length = 0;
    The code above will clear the existing array by setting its length to 0. This way of emptying the array also updates all the reference variables that point to the original array. Therefore, this method is useful when you want to update all reference variables pointing to arrayList. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `60.Event Delegation `,
    answer: `JavaScript event delegation is a simple technique by which you add a single event handler to a parent element in order to avoid having to add event handlers to multiple child elements. 53. vent delegation makes use of two often overlooked features of JavaScript events: event bubbling and the target element. When an event is triggered on an element, for example a mouse click on a button, the same event is also triggered on all of that element’s ancestors. This process is known as event bubbling; the event bubbles up from the originating element to the top of the DOM tree. The target element of any event is the originating element, the button in our example, and is stored in a property of the event object. Using event delegation it’s possible to add an event handler to an element, wait for an event to bubble up from a child element and easily determine from which element the event originated.  `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `61.Protype inheritance`,
    answer: `54. When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype. By definition, null has no prototype, and acts as the final link in this prototype chain.
    Nearly all objects in JavaScript are instances of Object which sits on the top of a prototype chain. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `62.AMD vs. CommonJS? Vs ES6  `,
    answer: `CommonJS (CJS)

    This system relies on importing and exporting modules thanks to some well-known keywords: require and exports.7
    The commonJS team created this API as a synchronous one which is not that good for browsers... Moreover, Commonjs isn't natively understood by browsers; it requires either a loader library or some transpiling.
    
    
    Asynchronous Module Definition (AMD)
    AMD is some kind of a split of CommonJS. It has been created by members of the CJS team that disagreed with the direction taken by the rest of the team.
    
    They've decided to create AMD to support asynchronous module loading. This is the module system used by RequireJS and that is working client-side (in browsers).
    
    ES2015 Modules (ESM)
    As those 3 formats are not that easy to read, hard to analyze for static code analyzer and not supported everywhere, The ECMA team (the team behind the standardization of Javascript) decided to create the ECMAScript 2015 (also known as ES6) standard. This format is really simple to read and write and supports both synchronous and asynchronous modes of operation. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `63.Hash table `,
    answer: `Hash Table is a data structure which stores data in an associative manner. In a hash table, data is stored in an array format, where each data value has its own unique index value. Access to data becomes very fast if we know the index of the desired data.
    Thus, it becomes a data structure in which insertion and search operations are very fast irrespective of the size of the data. Hash Table uses an array as a storage medium and uses the hash technique to generate an index where an element is to be inserted or is to be located from. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `64.anynymous funtions `,
    answer: `The function (Anonymous) operator syntax is more concise then the function declaration (Standard). It's ideal for for single line event handlers and dealing with styling DOM elements quickly.   `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `65.Module Patterns `,
    answer: `It is a commonly used Design Pattern which is used to wrap a set of variables and functions together in a single scope.
    It is used to define objects and specify the variables and the functions that can be accessed from outside the scope of the function. We expose certain properties and function as public and can also restrict the scope of properties and functions within the object itself, making them private. This means that those variables cannot be accessed outside the scope of the function. We can achieve data hiding an abstraction using this pattern in the JavaScript. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `66.What's the difference between host objects and native objects in javascript `,
    answer: `Host Objects are objects supplied by a certain environment. They are not always the same because each environment differs and contains host objects that accommodates execution of ECMAScript. Example, browser environment supplies objects such as window. While a node.js/server environment supplies objects such as NodeList.
    Native Objects or Built-in Objects are standard built-in objects provided by Javascript. Native objects is sometimes referred to as ‘Global Objects’ since they are objects Javascript has provided natively available for use. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `67. whats the difference between these 3: **
    *function Person(){}
    *var person = Person()
    *var person = new Person() `,
    answer: `function Person() {}
    Declares (instantiates) a named function in memory, but does not execute it. This function can be called at a later point with the code Person(); . An important not here is that declared functions are available for use even before they are declared (as long as they are eventually declared).
    
    var person = Person()
    Declares a new function, Person, invokes it and then assigns the return value to the variable person. Important to understand here is that the variable is first hoisted to the top of the current scope and then when the assignment is encountered in the flow of code, the function Person is run and the result assigned. Until that point, the value of person is undefined.
    
    var person = new Person()
    In this case, we have the introduction of the new keyword which means that Person is an object constructor function which returns a new object instance. So while person in the example above is the returned value of Person (a string, number or whatever), the value of person in this example is actually an object. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `68. Call and Apply`,
    answer: `call and apply are very similar—they invoke a function with a specified this context, and optional arguments. The difference between call() and apply() is that call() passes all arguments after the first one on to the invoked function, while apply() takes an array as its second argument and passes the members of that array as arguments. The following have the same effect.
    someFunc.call(thisArg, 1, 2, 3) VS someFunc.apply(thisArg, [1, 2, 3]) `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `69. what is the bind() method`,
    answer: `The bind() method returns a new function, when invoked, has its this sets to a specific value.
    The following illustrates the syntax of the bind() method:
    fn.bind(thisArg[, arg1[, arg2[, ...]]])
    In this syntax, the bind() method returns a copy of the function fn with the specific this value (thisArg) and arguments (arg1, arg2, …).
    Unlike the call() and apply() methods, the bind() method doesn’t immediately execute the function. It just returns the function. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `70. Document.Write()`,
    answer: `When document.write() is executed after page load, it replaces the entire header and body tag with the given parameter value in string. An invocation could look like this:
    document.write(‘<h1>hello world</h1>’);
    When working with web application, it is uncommon task to overwrite an entire page, hence why using document.write() is bad practice. It cannot inject string text into a given node point unlike jQuery library selectors and native JavaScript methods. Ref: https://developer.mozilla.org/en-US/docs/Web/API/Document
    Another reason not to use document.write() is it doesn’t support XHTML, but its not an issue since most web development uses HTML. Since document.write() fires after a page has finish loading, it causes performance issues and sometimes, may not even fire at all.
    The only seem appropriate usage for document.write() is when working third parties like Google Analytics and such for including their scripts. This is because document.write() is mostly available in any browser. Since third party companies have no control over the user’s browser dependencies (ex. jQuery), document.write() can be used as a fallback or a default method. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `71.AJAX `,
    answer: `Asynchronous JavaScript And XML. AJAX just uses a combination of:

    A browser built-in XMLHttpRequest object (to request data from a web server)
    JavaScript and HTML DOM (to display or use the data)
    
    AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
    
    Conventional web applications transmit information to and from the sever using synchronous requests. It means you fill out a form, hit submit, and get directed to a new page with new information from the server.
    With AJAX, when you hit submit, JavaScript will make a request to the server, interpret the results, and update the current screen. In the purest sense, the user would never know that anything was even transmitted to the server. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `72.What is JSONP? `,
    answer: `The XMLHttpRequest(XHR) can be used to get the data from the server. Once the data is received in the browser it can use the JSON.parse() method to convert the received JSON string into JavaScript object. But, XHR comes with the same-origin security issue. This means, request a page from some domain, let’s say ADomain.com and then that page makes a XMLHttpRequest to get some data from BDomain.com, the browser denies this request. This is because the request was made to a different domain than the domain the page was served from. Only if the XMLHttpRequest is made to ADomain.com, it will receive back the data as XHR works only if the request is made to the same domain.

    JSONP (JSON with Padding): It is a way to retrieve data by avoiding the cross-domain issue. The script tag is used to do so. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `73.Hoisting `,
    answer: `Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).  
    Variables defined with let and const are hoisted to the top of the block, but not initialized.
    Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
    In other words; a variable can be used before it has been declared. 
    x = 5; // Assign 5 to x
    
    elem = document.getElementById("demo"); // Find an element
    elem.innerHTML = x;                     // Display x in the element
    
    var x; // Declare x
     `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `74. “document load” a “document ready”? `,
    answer: `$(document).ready(function() {
        // executes when HTML-Document is loaded and DOM is ready
        console.log("document is ready");
      });
      
      
      $(window).load(function() {
        // executes when complete page is fully loaded, including all frames, objects and images
        console.log("window is loaded");
      }); `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `75.What is same origin policy ? `,
    answer: `The same-origin policy is a browser security feature that restricts how documents and scripts on one origin can interact with resources on another origin.

    A browser can load and display resources from multiple sites at once. You might have multiple tabs open at the same time, or a site could embed multiple iframes from different sites. If there is no restriction on interactions between these resources, and a script is compromised by an attacker, the script could expose everything in a user's browser.
    
    The same-origin policy prevents this from happening by blocking read access to resources loaded from a different origin. "But wait," you say, "I load images and scripts from other origins all the time." Browsers allow a few tags to embed resources from a different origin. This policy is mostly a historical artifact and can expose your site to vulnerabilities such as clickjacking using iframes. You can restrict cross-origin reading of these tags using a Content Security Policy.
    
    What's considered same-origin? #
    An origin is defined by the scheme (also known as the protocol, for example HTTP or HTTPS), port (if it is specified), and host. When all three are the same for two URLs, they are considered same-origin. For example, http://www.example.com/foo is the same origin as http://www.example.com/bar but not https://www.example.com/bar because the scheme is different. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `76. What is the ternary operator `,
    answer: `Means triple or 3 parts. ***** condition ? expression_1 : expression_2;
    The JavaScript ternary operator is the only operator that takes three operands.
    
    The condition is an expression that evaluates to a Boolean value, either true or false. If the condition is true, the ternary operator returns expression_1, otherwise it returns the expression_2. `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `77. Array.prototype.forEach() `,
    answer: `The forEach() method executes a provided function once for each array element. *************** array1.forEach(element => console.log(element)); ***** `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `78.Array.prototype.filter() `,
    answer: `The filter() method creates a new array with all elements that pass the test implemented by the provided function. **************** 
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6); `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `79. Array.prototype.find()`,
    answer: `The find() method returns the value of the first element in the provided array that satisfies the provided testing function. *****************
    const array1 = [5, 12, 8, 130, 44];

    const found = array1.find(element => element > 10);
    
    console.log(found);`,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `80. Array.prototype.indexOf()`,
    answer: `The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. *****************
    const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1 `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `81. Array.prototype.join()`,
    answer: `The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator. ****************
    const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water" `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `82. Array.prototype.map()`,
    answer: `The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. *****************
    const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
 `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `83. Array.prototype.pop()`,
    answer: `The pop() method removes the last element from an array and returns that element. This method changes the length of the array.****************
    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
 `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `84. Array.prototype.push()`,
    answer: `The push() method adds one or more elements to the end of an array and returns the new length of the array. ****************
    const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// expected output: 4
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
 `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `85. Array.prototype.reduce()`,
    answer: `The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. *************
    const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
 `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `86. Array.prototype.shift()`,
    answer: `The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array. *************
    const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
 `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `87. Array.prototype.slice()`,
    answer: `The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

****************   const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]
  `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `88. Array.prototype.splice()`,
    answer: `The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. *************
    const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"] `,
  },
  {
    id: "j1",
    language: "JavaScript",
    question: `89. Array.prototype.unshift()`,
    answer: `The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array. *************
    const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
 `,
  },
  {
    id: "r1",
    language: "React",
    question: `1. What is React?`,
    answer: `React is an open-source frontend JavaScript library which is used for building user interfaces especially for single page applications. It is used for handling view layer for web and mobile apps. React was created by Jordan Walke, a software engineer working for Facebook. React was first deployed on Facebook's News Feed in 2011 and on Instagram in 2012.`,
  },
  {
    id: "r2",
    language: "React",
    question: `2. What are the major features of React?`,
    answer: `The major features of React are:

    It uses VirtualDOM instead of RealDOM considering that RealDOM manipulations are expensive.
    Supports server-side rendering.(SSR)
    Follows Unidirectional data flow or data binding.
    Uses reusable/composable UI components to develop the view.`,
  },
  {
    id: "r3",
    language: "React",
    question: `3. What is JSX?`,
    answer: `JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of 
    JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. 
    This file makes applications robust and boosts its performance. `,
  },
  {
    id: "r3",
    language: "React",
    question: `4. What is the difference between Element and Component?`,
    answer: `An Element is a plain object describing what you want to appear on the screen in terms of the DOM nodes or other components. Elements can contain other Elements in their props. Creating a React element is cheap. Once an element is created, it is never mutated.
    Whereas a component can be declared in several different ways. It can be a class with a render() method. Alternatively, in simple cases, it can be defined as a function. In either case, it takes props as an input, and returns a JSX tree`,
  },
  {
    id: "r1",
    language: "React",
    question: `5. How to create components in React?`,
    answer: `Function Components: This is the simplest way to create a component. Those are pure JavaScript functions that accept props object as first parameter and return React elements. Class Components: You can also use ES6 class to define a component.`,
  },
  {
    id: "r2",
    language: "React",
    question: `6. When to use a Class Component over a Function Component?`,
    answer: `If the component needs state or lifecycle methods then use class component otherwise use function component. However, from React 16.8 with the addition of Hooks, you could use state , lifecycle methods and other features that were only available in class component right in your function component.`,
  },
  {
    id: "r3",
    language: "React",
    question: `7. What is state in React?`,
    answer: `State of a component is an object that holds some information that may change over the lifetime of the component. State is similar to props, but it is private and fully controlled by the component. i.e, It is not accessible to any component other than the one that owns and sets it. We should always try to make our state as simple as possible and minimize the number of stateful components.`,
  },
  {
    id: "r3",
    language: "React",
    question: `8. What are props in React?`,
    answer: `Props is the shorthand for Properties in React. 
    They are read-only components which must be kept pure i.e. immutable. 
    They are always passed down from the parent to the child components throughout the application. 
    A child component can never send a prop back to the parent component.
    This help in maintaining the unidirectional data flow and are generally
     used to render the dynamically generated data.`,
  },
  {
    id: "r1",
    language: "React",
    question: `9. What is the difference between state and props? `,
    answer: `Both props and state are plain JavaScript objects. While both of them hold information that influences the output of render, they are different in their functionality with respect to component. Props get passed to the component similar to function parameters whereas state is managed within the component similar to variables declared within a function.`,
  },
  {
    id: "r2",
    language: "React",
    question: `10. Why should we not update the state directly?`,
    answer: ` you try to update state directly then it won't re-render the component. nstead use setState() method. It schedules an update to a component's state object. When state changes, the component responds by re-rendering. `,
  },
  {
    id: "r3",
    language: "React",
    question: `11. What is the difference between HTML and React event handling?`,
    answer: `In HTML, the event name should be in lowercase:

    <button onclick='activateLasers()'>
    Whereas in React it follows camelCase convention:
    
    <button onClick={activateLasers}>`,
  },
  {
    id: "r3",
    language: "React",
    question: `12. How to bind methods or event handlers in JSX callbacks? `,
    answer: `1. Binding in Constructor: In JavaScript classes, the methods are not bound by default. The same thing applies for React event handlers defined as class methods. Normally we bind them in constructor. 
    2.Arrow functions in callbacks `,
  },
  {
    id: "r3",
    language: "React",
    question: `13. What are inline conditional expressions? `,
    answer: `You can use either if statements or ternary expressions which are available from JS to conditionally render expressions. Apart from these approaches, you can also embed any expressions in JSX by wrapping them in curly braces and then followed by JS logical operator &&.
    {
      messages.length > 0 && !isLogin?
        <h2>
            You have {messages.length} unread messages.
        </h2>
        :
        <h2>
            You don't have unread messages.
        </h2>
  } `,
  },
  {
    id: "r3",
    language: "React",
    question: `14. What is "key" prop and what is the benefit of using it in arrays of elements?`,
    answer: `A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed.

    Most often we use ID from our data as key `,
  },
  {
    id: "r3",
    language: "React",
    question: `15. What is the use of refs?`,
    answer: `The ref is used to return a reference to the element. They should be avoided in most cases, however, they can be useful when you need a direct access to the DOM element or an instance of a component  `,
  },
  {
    id: "r3",
    language: "React",
    question: `16. How to create refs?`,
    answer: `Refs are created using React.createRef() method and attached to React elements via the ref attribute. In order to use refs throughout the component, just assign the ref to the instance property within constructor.

    class MyComponent extends React.Component {
      constructor(props) {
        super(props)
        this.myRef = React.createRef()
      }
      render() {
        return <div ref={this.myRef} />
      }
    }`,
  },
  {
    id: "r3",
    language: "React",
    question: `17.What is Virtual DOM?  `,
    answer: `Document Object Model. A virtual DOM is a lightweight JavaScript object which originally is just the copy of the real DOM. It is a node tree that lists the elements, their attributes and content as Objects and their properties. React’s render function creates a node tree out of the React components. It then updates this tree in response to the mutations in the data model which is caused by various actions done by the user or by the system.
    This Virtual DOM works in three simple steps.
    
    Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation.Virtual DOM 1 - What Is ReactJS? - Edureka
    Then the difference between the previous DOM representation and the new one is calculated.Virtual DOM 2 - React Interview Questions - Edureka
    Once the calculations are done, the real DOM will be updated with only the things that have actually changed. Virtual DOM 3 - React Interview Questions - Edureka `,
  },
  {
    id: "r3",
    language: "React",
    question: `18. What do you know about controlled and uncontrolled components?`,
    answer: `Controlled Components - 1. They do not maintain their own state, 2. Data is controlled by the parent component, 3.3. They take in the current values through props and then notify the changes via callbacks. Example: handleChange(event) {
      this.setState({value: event.target.value.toUpperCase()})
    }
    Uncontrolled Components- 1. They maintain their own state, 2. Data is controlled by the DOM, 3.3. Refs are used to get their current values. Example: <input type="text" ref={this.input} />  `,
  },
  {
    id: "r3",
    language: "React",
    question: `19. What is Lifting State Up in React?`,
    answer: `When several components need to share the same changing data then it is recommended to lift the shared state up to their closest common ancestor. That means if two child components share the same data from its parent, then move the state to parent instead of maintaining local state in both of the child components. `,
  },
  {
    id: "r3",
    language: "React",
    question: `20. What are the different phases of component lifecycle? `,
    answer: `The component lifecycle has three distinct lifecycle phases:

    Mounting: The component is ready to mount in the browser DOM. This phase covers initialization from constructor(), getDerivedStateFromProps(), render(), and componentDidMount() lifecycle methods.
    
    Updating: In this phase, the component get updated in two ways, sending the new props and updating the state either from setState() or forceUpdate(). This phase covers getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate() and componentDidUpdate() lifecycle methods.
    
    Unmounting: In this last phase, the component is not needed and get unmounted from the browser DOM. This phase includes componentWillUnmount() lifecycle method.
    
    It's worth mentioning that React internally has a concept of phases when applying changes to the DOM. They are separated as follows
    
    Render The component will render without any side-effects. This applies for Pure components and in this phase, React can pause, abort, or restart the render.
    
    Pre-commit Before the component actually applies the changes to the DOM, there is a moment that allows React to read from the DOM through the getSnapshotBeforeUpdate().
    
    Commit React works with the DOM and executes the final lifecycles respectively componentDidMount() for mounting, componentDidUpdate() for updating, and componentWillUnmount() for unmounting. `,
  },
  {
    id: "r3",
    language: "React",
    question: `21.What are the lifecycle methods of React? `,
    answer: `getDerivedStateFromProps: Invoked right before calling render() and is invoked on every render. This exists for rare use cases where you need derived state. Worth reading if you need derived state.
    componentDidMount: Executed after first rendering and here all AJAX requests, DOM or state updates, and set up event listeners should occur.
    shouldComponentUpdate: Determines if the component will be updated or not. By default it returns true. If you are sure that the component doesn't need to render after state or props are updated, you can return false value. It is a great place to improve performance as it allows you to prevent a re-render if component receives new prop.
    getSnapshotBeforeUpdate: Executed right before rendered output is committed to the DOM. Any value returned by this will be passed into componentDidUpdate(). This is useful to capture information from the DOM i.e. scroll position.
    componentDidUpdate: Mostly it is used to update the DOM in response to prop or state changes. This will not fire if shouldComponentUpdate() returns false.
    componentWillUnmount It will be used to cancel any outgoing network requests, or remove all event listeners associated with the component. `,
  },
  {
    id: "r3",
    language: "React",
    question: `22. What are Higher-Order Components? `,
    answer: `A higher-order component (HOC) is a function that takes a component and returns a new component. Basically, it's a pattern that is derived from React's compositional nature.

    We call them pure components because they can accept any dynamically provided child component but they won't modify or copy any behavior from their input components.
    
    const EnhancedComponent = higherOrderComponent(WrappedComponent)
    HOC can be used for many use cases:
    
    Code reuse, logic and bootstrap abstraction.
    Render hijacking.
    State abstraction and manipulation.
    Props manipulation. `,
  },
  {
    id: "r3",
    language: "React",
    question: `23.How to create props proxy for HOC component? `,
    answer: `You can add/edit props passed to the component using props proxy pattern like this:

    function HOC(WrappedComponent) {
      return class Test extends Component {
        render() {
          const newProps = {
            title: 'New Header',
            footer: false,
            showFeatureX: false,
            showFeatureY: true
          }
    
          return <WrappedComponent {...this.props} {...newProps} />
        }
      }
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `24. What is context?`,
    answer: `Context provides a way to pass data through the component tree without having to pass props down manually at every level.

    For example, authenticated user, locale preference, UI theme need to be accessed in the application by many components.
    
    const {Provider, Consumer} = React.createContext(defaultValue) `,
  },
  {
    id: "r3",
    language: "React",
    question: `25. What is children prop?`,
    answer: `Children is a prop (this.props.children) that allow you to pass components as data to other components, just like any other prop you use. Component tree put between component's opening and closing tag will be passed to that component as children prop.

    There are a number of methods available in the React API to work with this prop. These include React.Children.map, React.Children.forEach, React.Children.count, React.Children.only, React.Children.toArray.
    
    A simple usage of children prop looks as below,
    
    const MyDiv = React.createClass({
      render: function() {
        return <div>{this.props.children}</div>
      }
    })
    
    ReactDOM.render(
      <MyDiv>
        <span>{'Hello'}</span>
        <span>{'World'}</span>
      </MyDiv>,
      node
    ) `,
  },
  {
    id: "r3",
    language: "React",
    question: `26. How to write comments in React? `,
    answer: `{/* Single-line comments(In vanilla JavaScript, the single-line comments are represented by double slash(//)) */} `,
  },
  {
    id: "r3",
    language: "React",
    question: `27. What is the purpose of using super constructor with props argument? `,
    answer: `A child class constructor cannot make use of this reference until super() method has been called. The same applies for ES6 sub-classes as well. The main reason of passing props parameter to super() call is to access this.props in your child constructors.

    Passing props:
    
    class MyComponent extends React.Component {
      constructor(props) {
        super(props)
    
        console.log(this.props) // prints { name: 'John', age: 42 }
      }
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `28. What is reconciliation? `,
    answer: `When a component's props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called reconciliation. `,
  },
  {
    id: "r3",
    language: "React",
    question: `29. What would be the common mistake of function being called every time the component renders? `,
    answer: `You need to make sure that function is not being called while passing the function as a parameter.

    render() {
      // Wrong: handleClick is called instead of passed as a reference!
      return <button onClick={this.handleClick()}>{'Click Me'}</button>
    }
    Instead, pass the function itself without parenthesis: `,
  },
  {
    id: "r3",
    language: "React",
    question: `30.Why React uses className over class attribute? `,
    answer: `class is a keyword in JavaScript, and JSX is an extension of JavaScript. That's the principal reason why React uses className instead of class. Pass a string as the className prop.

    render() {
      return <span className={'menu navigation-menu'}>{'Menu'}</span>
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `31. What are fragments? `,
    answer: `It's common pattern in React which is used for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.  Fragments are a bit faster and use less memory by not creating an extra DOM node. This only has a real benefit on very large and deep trees.
    Some CSS mechanisms like Flexbox and CSS Grid have a special parent-child relationships, and adding divs in the middle makes it hard to keep the desired layout.
    The DOM Inspector is less cluttered.`,
  },
  {
    id: "r3",
    language: "React",
    question: `32. What are stateless components? `,
    answer: `If the behaviour is independent of its state then it can be a stateless component. You can use either a function or a class for creating stateless components. But unless you need to use a lifecycle hook in your components, you should go for function components. There are a lot of benefits if you decide to use function components here; they are easy to write, understand, and test, a little faster, and you can avoid the this keyword altogether. `,
  },
  {
    id: "r3",
    language: "React",
    question: `33. What are stateful components? `,
    answer: `If the behaviour of a component is dependent on the state of the component then it can be termed as stateful component. Hooks let you use state and other React features without writing classes. `,
  },
  {
    id: "r3",
    language: "React",
    question: `34. How to apply validation on props in React? `,
    answer: `PropTypes.number
    PropTypes.string
    PropTypes.array
    PropTypes.object
    PropTypes.func
    PropTypes.node
    PropTypes.element
    PropTypes.bool
    PropTypes.symbol
    PropTypes.any.  import PropTypes from 'prop-types'   class User extends React.Component {
      static propTypes = {
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired
      }
    
      render() {
        return (
          <>
            <h1>{{this.props.name}}</h1>
            <h2>{{this.props.age}}</h2>
          </>
        )
      }
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `35. What are error boundaries? `,
    answer: `Error boundaries are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

    A class component becomes an error boundary if it defines a new lifecycle method called componentDidCatch(error, info) or static getDerivedStateFromError()  `,
  },
  {
    id: "r3",
    language: "React",
    question: `36. What is the use of react-dom package? `,
    answer: `The react-dom package provides DOM-specific methods that can be used at the top level of your app. Most of the components are not required to use this module. Some of the methods of this package are:

    render()
    hydrate()
    unmountComponentAtNode()
    findDOMNode()
    createPortal() `,
  },
  {
    id: "r3",
    language: "React",
    question: `37. What is the purpose of render method of react-dom? `,
    answer: `This method is used to render a React element into the DOM in the supplied container and return a reference to the component. If the React element was previously rendered into container, it will perform an update on it and only mutate the DOM as necessary to reflect the latest changes. `,
  },
  {
    id: "r3",
    language: "React",
    question: `38. How to use styles in React? `,
    answer: `The style attribute accepts a JavaScript object with camelCased properties rather than a CSS string. `,
  },
  {
    id: "r3",
    language: "React",
    question: `39. How do you conditionally render components? `,
    answer: `In some cases you want to render different components depending on some state. {address
      ? <p>{address}</p>
      : <p>{'Address is not available'}</p>
    } `,
  },
  {
    id: "r3",
    language: "React",
    question: `40. Why we need to pass a function to setState()? `,
    answer: `The reason behind for this is that setState() is an asynchronous operation. React batches state changes for performance reasons, so the state may not change immediately after setState() is called. That means you should not rely on the current state when calling setState() since you can't be sure what that state will be. The solution is to pass a function to setState(), with the previous state as an argument. By doing this you can avoid issues with the user getting the old state value on access due to the asynchronous nature of setState().

    Let's say the initial count value is zero. After three consecutive increment operations, the value is going to be incremented only by one.
    *******************
    // assuming this.state.count === 0
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    this.setState({ count: this.state.count + 1 })
    // this.state.count === 1, not 3
    *******************
    If we pass a function to setState(), the count gets incremented correctly.
    *******************
    this.setState((prevState, props) => ({
      count: prevState.count + props.increment
    }))
    // this.state.count === 3 as expected `,
  },
  {
    id: "r3",
    language: "React",
    question: `41. What is strict mode in React? `,
    answer: `React.StrictMode is a useful component for highlighting potential problems in an application. Just like <Fragment>, <StrictMode> does not render any extra DOM elements. It activates additional checks and warnings for its descendants.  `,
  },
];
