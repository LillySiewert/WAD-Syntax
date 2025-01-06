/* 
    JS integration in html external & internal with script 

    external: <script type="text/javascript" src="src/js/script.js"></script>
        - bottom of <body>
        OR
        - in <head> with defer
    internal: <script> ... </script>
*/

window.onload = function() {
    document.querySelector("h1").style.fontSize = '90px';
}

console.log("message") //for testing
console.error("error") //reports error line number
console.log(["error","message"]) //array log in table
console.table({firstMessage:"error", secondMessage:"message"}) //object log in table

/* 
    Declaring & initializing variables 
    Dynamic typing = do not need to specifify type
*/

let name1 // declaring – use let instead of var
name1 = "John" // initializing
let name2 = "John" // declaring and initializing
name1 = "Paolo" // Updating

/* 
    Constants
    declared & initialized -> value not changable 
    not redeclarable
*/

const constantType = "Hello"

/*
    Data Types
*/

console.log(typeof 1000); //Number
console.log(typeof "WAD"); //String
console.log(typeof {name: "Sarah", age: 17}); // Object
console.log(typeof [10, 15, 17]); //Array -> Object, is considered as object
console.log(typeof true); //Boolean
console.log(typeof function(){}); //Function
console.log(typeof null); //Null -> Object, is considered as object
console.log(typeof Undefined); //Undefined

/*
    Numbers & Operations
*/

let a = 3.14; // A number with decimals
let b = 3; // A number without decimals

let c = 123e5; // A extra large number, 12300000
let d = 123e-5; // A extra small number, 0.00123

let x = 5;
let y = 6;
console.log(x + y); // Addition, 11
console.log(x - y); // Subtraktion, -1
console.log(x * y); // Multiplication, 30
console.log(x / y); // Division, 0.8333333333
console.log(x %y); // Remainder, 5
console.log(x **y); // Exponent, 15625
console.log(x ++); // Increment, 6
console.log(y --); // Decrement, 5

/*
    Comparision & Logical Operators
*/

x = 5;
console.log(x == 5); // equal to, true
console.log(x == "5"); // true
console.log(x ===5); // equal value & type, true
console.log(x === "5"); // false
console.log(x !=8); // logical not, true
console.log(x !== "5"); // not equal value or not equal type, true
console.log(x < 5); // false
console.log(x < 5); // false
console.log(x >= 5); // true
console.log(x >= 5); //true

console.log(true && true); // logical and, true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false
console.log(true || true); // logial or, true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false
console.log(!true); // logical not, false

/*
    String
    methods & properties
*/

//const declaration and initialization
console.log("Web App. Development");
console.log('Web App. Development');
console.log(`Web App. “Development”`);

//Escape character
console.log('\"WAD\"'); 
    // “WAD”

// \n newline
console.log("New\n Line.");
    /*
    New
    Line.
    */

a = "Web Application";
console.log(a.length); // length of String, 15

console.log(a.slice(0,3)); // substring(start, end), substr(start,length), Web

c = a.replace("Web Application","WAD")
console.log(c); // WAD

console.log(c.toLowerCase()); // wad
console.log(c.toUpperCase()); // WAD

b = "Development";
c = a.concat(" ", b);
console.log(c); // Web Appl. Development
console.log("WAD" +""+ "wad"); // WAD wad
d =  " trim " ;
console.log(d); // trim
console.log(d.trim()); //trim
console.log(d.trimStart()); //trim
console.log(d.trimEnd()); // trim

/*
    Array
    methods & properties
*/

let shopping =['bread','milk','eggs'];
let sequence = [1, 1, 2, 3, 5, 8, 13];
let random = ['tree', 795, [0, 1, 2]];
shopping[0]; // returns "bread"
shopping[0] = 'noodles'; //["noodles", "milk", "eggs"]
shopping.length; // returns 3

let shopping=['bread','milk','cheese'];
shopping.push('eggs'); //adds new element to end of array --> ['bread', 'milk', 'cheese', 'eggs']
shopping.pop(); //remove element from the end of array --> ['bread', 'milk', 'cheese'] -> 'eggs'

shopping.unshift('eggs'); //adds new element to beginning of array --> ['eggs‘, 'bread', 'milk', 'cheese']

shopping=['bread','cheese','eggs'];
shopping.splice(1, 2, "apples"); //removes & adds elements --> array.splice(index, number of element to be removed, item1, item2, item3, to be added)
                                // [‘bread‘, 'apples']

shopping=["eggs","bread","cheese"];
shopping.sort(); // ['bread', 'cheese', 'eggs']
shopping.reverse(); // ['eggs‘, 'cheese', 'bread']
shopping=["eggs","bread","cheese"];
shopping.indexof("eggs"); // 0

/*
    Objects
*/

const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    gender: 'male',
    interests: ['music', 'skiing'],
    bio: function() {
        alert(this.name[0] + ' ' +
        this.name[1]);
    }
};

person.bio();
console.log(person.age);
console.log(person["gender"]);
person.age = 34;
console.log(person.age); // 34

let human = new Object({ // create an object
    name: 'John',
    age: 21,
});

human.gender = 'male';

let newHuman1 = Object.create(human); // use an existing object as the prototype
let newHuman2 = Object.assign(human); // copies all enumerable own properties from one or more source objects

/*
    Conditionals & Switch & Ternary
*/

if(true){

} else if (false){

} else {

}

switch(a){
    case 0: /* ... */ break;
    /* ... */
    default: /* ... */ 
}

authenticated ? renderApp() : renderLogin();
// comparing it with the if statement
if (authenticated) { renderApp(); } else {renderLogin();}

/*
    Loops
    - for
    - for/in --> through properties of object
    - for/of --> through values of iterable object
    - while
    - do/while
*/

for(i=0; i<10; i++) {
    console.log(i);
    if (i == 9){
        break;
    }
    if (i == 7){
        continue;
    }
}

for(key in object){
    /* ... */
}

for(variable of iterable){
    /* ... */
}

while(i<10){
    i++
}

do {
    i++
}
while(i<10);

/*
    Functions
*/

function sayMyName(name ='No name was passed'){ //default value can be set if no value / undefined is passed
    return name
}

/*
    Anonymous Functions
*/
let sayMyName = function(name) {
    return name;
}

sayMyName("John");

/*
    Arror Functions
*/
let funArrow = (fName, lName)=> {
    return `My name is ${fName} ${lName}`;
}

funArrow("John", "Arrow");

/*
    Callback Functions
    - passed to another function as argument
    --> invoked inside outer function to complete task
*/

let calledFun = ()=> {
    console.log('Hello');
}

function synchCallBck(string, callback) {
    callback();
    console.log(string);
}

synchCallBck('World', calledFun)
    // Hello
    // World

/*
    Higher Order Functions
*/

let numArr = [1, 2, 3, 4, 5];
arrMap = numArr.map((a) => a + 1); // array.map(function(currentValue, index, arr), thisValue)
console.log(arrMap); // [2, 3, 4, 5, 6]
arrFilter=numArr.filter((a) =>a % 2 === 0); // array.filter(function(currentValue, index, arr), thisValue)
console.log(arrFilter); // [2, 4]
arrReduce = numArr.reduce ((acc, cur) => acc + cur); //array.reduce(function(accumulator, currentValue), initialValue)
console.log(arrReduce); // 15
arrforEach = numArr.forEach((a) => console.log(a)); // 1 2 3 4 5  // array.forEach(function(currentValue, index, arr), thisValue)
console.log(arrforEach); //undefined

/*
    Object Constructor Function
*/
function Person(first, last, age, salary){
    this.name = {first : first,
    last : last};
    this.age = age;
    this.salary = salary;
}

const bob = new Person('Bob','Smith', 32, 2300);
console.log(bob);
console.log(bob.bio());

/*
    Regular Expressions
    - (X|Y) any of the alternatives separated with "|", X, Or Y
    - [0-9] any number from 0 to 9
    - [^0-9] any character that is not 0 To 9
    - [a-z] any lowercase character from a to z
    - [^a-z] any character that is not a lowercase character from A to Z
    - [A-Z] any uppercase character from a to z
    - [^A-Z] any character that is not an uppercase character from A to Z
    - [abc] Find any of the characters between the brackets
    - [^abc] Find any characters that is not between the brackets
    - . matches any character, except newline or line terminators.
    - \w matches word characters. [a-z, A-Z, 0-9, and Underscore]
    - \W matches Non word characters
    - \d matches digits from 0 to 9.
    - \D matches non-digit characters.
    - \s matches whitespace character.
    - \S matches non whitespace character.
    - \b matches at the beginning or end of a word.
    - \B matches NOT at the beginning/end of a word.
    - n+ any string that contains at least one n
    - n* any string that contains zero or more occurrences of n
    - n? any string that contains zero or one occurrences of n
    - n{x} a string containing x numbers of n
    - n{x,y} a string containing a range from x to y numbers of n
    - n{x,} a string containing at least x numbers of n
    - ^ a string starting with something
    - $ a string ending with something
    - ?= a string followed by some “string”
    - ?! a string not followed by some “string”
    - ^ a string starting with something
    - $ a string ending with something
    - ?= a string followed by some “string”
    - ?! a string not followed by some “string”
*/

let str2 = "Web2022App";
let regex2 = /[beW][0-2]0[0-2][0-2][A-Z][a-z][a-z]/;
console.log(regex2.test(str2)); // true
let str3 = "Web 2022 App";
let regex3 = /.\w\w\s\d\d\d\d\s[A-Z][a-z]\S/;
console.log(regex3.test(str3)); // true
let regex4 = /\bWeb\s\d\d\d\d\s\bApp/;
console.log(regex4.test(str3)); // true
let regex5 = /\w+\s\d+\s\w+/;
console.log(regex5.test(str3)); // true
let regex6 = /\w{3}\s\d{4}\s\w{3}/;
console.log(regex6.test(str3)); // true
let regex7 = /^Web\s\d{4}\s\w{2}p$/;
console.log(regex7.test(str3)); // true
let regex8 = /^Web\s\d{4}\s\w{2}(?=p)/;
console.log(regex8.test(str3)); // true
let regex9 = /^Web\s\d{4}\s\w{2}p$/;
console.log(regex9.test(str3)); // true
let regex10 = /^Web\s\d{4}\s\w{2}(?=p)/;
console.log(regex10.test(str3)); // true