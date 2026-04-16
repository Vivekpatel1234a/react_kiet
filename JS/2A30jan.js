// print even number;
/*for(let i=1; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}*/

import { useEffect } from "react";

// by array  in same line 
/*
let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        console.log(arr[i]);}
}
const person={key:"Hello"};
person.key="Bye";
console.log(person.key);// Bye no error bcz we are not changing the reference of object person we are changing the value of key property of object person


*
const arr=["html","css","js","react"];
console.log(arr); // [ 'html', 'css', 'js', 'react' ]
arr.push("nodejs");
console.log(arr); // [ 'html', 'css', 'js', 'react', 'nodejs' ] 
//arr=["python","java"];
// TypeError: Assignment to constant variable.
//console.log(arr);// it gives error bcz we are changing the reference of arr which is declared as const
*/
/*
const Sales="Toyota";

function carType(name){
    return name==="Honda"?name:"Sorry we dont sell this car";
}

const car={carn:"City", getCar:carType("Honda"),Special:Sales};
console.log(car.carn);
console.log(car.getCar);
console.log(car.Special);

//Special:Sales is a variable call
//getCar:carType("Honda") is a function call

// for  each loop 

const arr=["html","css","js","react"];
/*
for(i of arr){
    console.log(i); // it gives index 0 1 2 3
}

//or

arr.forEach((element)=>{   // element jo hai vo values ko catch(hold) kr rha hai
    console.log(element); // it gives value html css js react
});

*
//it  means for each iterate over the array and give the value and we use console for prnting the value



//increase each value by 3 using foreach

*//*
 let number=[1,2,3,4,5];
// numbers.forEach((num,index,arr)=>{
//     arr[index]=num+3;
// });
for(i in number){
number[i]=number[i]+3;
}

for(const val of number)  console.log(val);




const numbers=["red","green","blue"];
for(const i in numbers){
    console.log(i,numbers[i]);
    /*
0 red
1 green
2 blue
    
}

//forof

for(const color of numbers){
    console.log(color); 
}
/*
red 
green 
blue


const user={name:"Robins",age:25,hobby:"Coding"};
for(const idx in user){
    console.log(idx,user[idx]);
}

//user.idx nhi work krega bcz idx to index hai but hme key chahiye  means user.name or user.age or user.hobby then work 

//for(const val of user) console.log(val);


greet("vivek");
function greet(name){
    
    console.log(`Hello ${name}`);
}

*/
/*
const factorial=function(n){
    if(n==0 || n==1) return 1;
    else{
        return n*factorial(n-1);
    }
}

console.log(factorial);//[Function: factorial]
console.log(factorial(5)); //120

/*
js run on browser

so hm apne browser pr run krna chhate hai so we use node js



*/

/*
1.traditional->slower and higher
npx create-react-app myapp


2. faster and lighter
npm create vite@latest myapp
*/


let promise=new Promise((resolve,reject)=>{
    let success=true;
   if(success) resolve("Accepted");
   else reject("Rejected");
})

//consuming promise
// promise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// })



///////////FETCH/////////////////////
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((newres)=>{
    let newobj={};
 newres.map(element => {
     console.log(element.id+" -> "+ element.name);
     newobj[element.id]=element.name;
       
    });
    return newobj;
})
.then((ele)=>{
    console.log(ele);
})
.catch()

