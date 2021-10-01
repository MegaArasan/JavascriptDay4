// 1.Declare four variables without assigning values and print them in console
var obj1,obj2,obj3,obj4;
console.log(obj1,obj2,obj3,obj4) // returns undefined

// 2.How to get value of the variable myvar as output
var myvar= 1;
console.log(myvar);

// 3. Declare variables to store your first name, last name,
//  marital status, country and age in multiple lines
let firstName = 'Mega'    // first name of a person
let lastName = 'Arasan'      // last name of a person
let country = 'India'       // country
let city = 'Tenkasi'         // capital city
let age = 22              // age in years
let isMarried = false
console.log(firstName, lastName, country, city, age, isMarried) 

// 4. Declare variables to store your first name, last name, marital status,
//  country and age in a single line
let name = 'Megam',     //name of a person
  job = 'Student',
  live = 'India';
  console.log(name,job,live)

// 5. Declare variables and assign string, boolean, undefined and null data types
let str="Mega"
let boo=true
let unde;
let obj=null
console.log(typeof(str),typeof(boo),typeof(unde),typeof(obj))

// 6. Convert the string to integer
let a="5",b="5"
console.log(parseInt(a)+parseInt(b))
console.log(Number(a)+Number(b))
console.log(+a+ +b)

// 7. Write 6 statement which provide truthy & falsey values
true?console.log("Truthy"):console.log("Falsy");//returns true
"Mega"?console.log("Truthy"):console.log("Falsy");//returns true
32?console.log("Truthy"):console.log("Falsy"); //returns true
0?console.log("Truthy"):console.log("Falsy");// returns false
undefined?console.log("Truthy"):console.log("Falsy");//returns false
false?console.log("Truthy"):console.log("Falsy");// returns false