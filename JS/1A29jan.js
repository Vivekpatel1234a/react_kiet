// let a=10,b=10;
// console.log(a+b);


// var a=10,b=10; //
// console.log(a+b);


// const a=10,b=10; // scope of const is same as let and it is immutable we cannot change the value of const
// console.log(a+b);


// {let a=10,b=10;}//let is blocked scope , so if we try to access outside the block it will give erro -> not defined
// console.log(a+b); //error a is not defined , bcz let is block scope


// {var a=10,b=10;}// var is function scope (global) , so if we try to access outside the block it will not give error
// console.log(a+b); // 20  // var is mutable we can change the value of var



// const a=10,b=10; // const is blocked scope , so if we try to access outside the block it will give erro -> not defined
// console.log(a+b); // 20
// a=20;     // const is immutable we cannot change the value of const
// console.log(a+b); //it gives error Assignment to constant variable. bcz we cannot change the value of const




// var a=10,b=20;
// console.log(a+b); //30
// a=30;     // var is mutable we can change the value of var
// console.log(a+b); //50




// let a=10,b=20;
// console.log(a+b); //30
// a=30;     // var is mutable we can change the value of var
// console.log(a+b); //50




/*
let is block scoped and mutable
const is block scoped and immutable
var is function scoped and mutable
*/




/*
console.log(a); // it gives error Cannot access 'a' before initialization , it is because of temporal dead zone of let
let a=10; 

/*

console.log(a); // it gives undefined  , because of hoisting of var
var a=10;



console.log(a);  // it gives error Cannot access 'a' before initialization , it is because of temporal dead zone of const
const a=10;*/


// let i
// for( i=1; i<=5; i++){
//     console.log(i); //
// }


// console.log(5=='5') // true , it checks only value not type
// console.log(5==='5') // false , it checks value and type both 


/*
let num=10;// number
let str='hello'; // string
let arr=[1,2,3];//array
let obj={name:"Robin",age:30}; //object
let a;
let emp=null; // null
let isok=true; // boolean


console.log(typeof num); //number
console.log(typeof str); //string
console.log(typeof arr); //object bcz array is a type of object in javascript
console.log(typeof obj); //object bcz obj is object, means object is a collection of key value pairs
console.log(typeof a); //undefined  bcz a is not defined
console.log(typeof emp); //object   bcz null is a type of object in javascript (this is a bug in javascript)
console.log(typeof isok); //boolean bcz isok is boolean
*/


//Function to sum two numbers
function sum(n1,n2){
    return n1+n2; // we can not return two values from function , we can return only one value bcz of 
     
}



//arrow function 
//const sum=(n1,n2)=> n1+n2;   //n1 n2 are parameters , they are parameterts which can take values when function is called or it catches values when function is called



let n1=10;
let n2=20;
//add=sum(n1,n2); //
// here sum is function name and n1 n2 are arguments, arguments are values which are passed to function when it is called
//console.log("Sum is: "+add); // Sum is: 30
console.log(sum(n1,n2)); // we use this when 



//  () for functions and {} for blocks and [] for arrays


var a=10;
for(a=10; a>=1;){
    ///some stmt
    // some stmt

    a--;
}  // it is different from normal for loop it does 