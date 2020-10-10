// console.log() is used to print in Javascript 
// although it's not javascript it's part of the
// vast library of API's provided to us
console.log("Hello JavaScript!");

// javascript is case-sensitive
// that is a varibale something is different from Something

something = 5;
Something = 10;
console.log(something);
console.log(Something);


// Identifiers is a sequnce of characters that can be used to identify a variable, a function,an object
// It can start with a letter,the dollar $ sign or an underscore _,and it can contain digits.
// example - test,TEst,test1,_test,$test

// every line is optionally terminated by a semicolons.

// Declaring varibles
const a = 10;
// a = 5;  this is not allowed as javascript does not allows reassiging of the variable

let b = 0;
b = 1;

/*
const	 	 does	 not	 mean	 "constant"	 in	 the	 way	 some	 other	 languages	 like	 C
mean.	 In	 particular,	 it	 does	 not	 mean	 the	 value	 cannot	 change	 -	 it	 means	 it
cannot	be	reassigned.	If	the	variable	points	to	an	object	or	an	array	(we'll	see
more	about	objects	and	arrays	later)	the	content	of	the	object	or	the	array	can
freely	change.
*/


/*
Once	you	assign	a	value	with	some	type	to	a	variable,	you	can	later	reassign
the	variable	to	host	a	value	of	any	other	type,	without	any	issue.
*/

// Primitive Types
// Numbers,Strings,Booleans,Symbols
// there are two special types null and undefined

// Expressions
// An	 expression	 is	 a	 single	 unit	 of	 JavaScript	 code	 that	 the	 JavaScript	 engine
// can	evaluate,	and	return	a	value.

2
0.002
'something'
true
false
this
undefined


const three = 1+2;
const four = three+1;


// If	 you	 divide	 by	 zero,	 JavaScript	 does	 not	 raise	 any	 error	 but	 returns	 the
// Infinity	 	value	(or	 	-Infinity	 	if	the	value	is	negative).

// A	 reminder	 by	 zero	 is	 always	NaN	 ,a	 special	 value	 that	 means	 "Not a Number" 

// === checks for equality and !== for inequality


// strings

'A String'
"Another String"

const name = 'Yash';

console.log(name);
// string has a property length which tells about the length of the string
console.log(name.length); 


/* Template	 literals	 are	 also	 great	 because	 they	 provide	 an	 easy	 way	 to
interpolate	variables	and	expressions	into	strings.
You	do	so	by	using	the	 	${...}	 	syntax: */

const val =	'test'
const string =	`something ${val}`;
console.log(string);
console.log(`string ${1+2+3}`);

// inside	the	 	${}	 	you	can	add	anything,	even	expressions.


// Arrays
// methods to define array
const arr = [];
const arr1 = Array();

const b_arr = [1,2,3];
const b1 = Array.of(1,2,3);

const c = Array.of(1,2,3);

const zero_array = Array(12).fill(0);


// adding a at the end of array using push method
b_arr.push(4);

// adding at the front of the array using unshift function
b_arr.unshift(0);
b_arr.unshift(-2,-1);
console.log(b_arr);


// pop function removes an element from the back of the array
b_arr.pop()
// shift function removes an element from the front of the array
b_arr.shift()
console.log(b_arr);


// concat function is used to concat two arrays;
const c_arr = b_arr.concat(b1);
console.log(c_arr);


// concatanation using spread operator
const d_arr = [...b_arr, ...b1];
console.log(d_arr);


// loops in javascript

const list = ['a','b','c'];
let i = 0;

// while loop
while(i < list.length)
{
    console.log(list[i]);
    console.log(i);
    i = i+1;
}


// for loop
for(i = 0 ; i < list.length ; i++)
{
    console.log(list[i]);
    console.log(i);
}


// for of loop
for(const value of list)
{
    console.log(value);
}
