export default function  Items({totalitem}){
return(
    <div className="Itemdiv">
{/*array so bcz of that map works */}
        {totalitem.map(item => 
        <div  className="totalitemcl">
         <img
         src={item.image}
         ></img>   
        <p >{item.name}</p>
        <p>{item.price}</p>
        
        </div>
        )}
    </div>
)
} 

/**
 .map() returns an array of JSX.
React takes that array, converts each JSX into real DOM nodes, and inserts them into the page.
 */

/*
JSX wants EXPRESSIONS, not STATEMENTS.
bcz of that for, while do while , forin, forof not alloowed
array.map is allowed 
🧠 What does that mean?
🔹 Expression

👉 Produces a value

Examples:

2 + 3
"hello"
user.name
array.map(...)
condition ? A : B
condition && A
These return something.
🔹 Statement
👉 Controls flow, returns nothing
Examples:
if (x > 0) {}
for (...) {}
while (...) {}
let x = 5
These do not return values.
*/







/*
function Items({ totalitem }) {}
function Items({ items }) {}
{ totalitem } is pulled directly from props
No need to write props.totalitem again and again




////////
function Items(props) {
  props.items
}
  React passes props like this:
props = {
  totalitem: cart
}

props is a single object
You must access values using props.keyName




When you write:
function Items({ totalitem }) {}
JavaScript converts it to:
function Items(props) {
  const totalitem = props.totalitem;
}
*/