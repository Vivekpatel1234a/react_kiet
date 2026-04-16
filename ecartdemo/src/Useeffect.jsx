/*import { useEffect, useState } from "react";

export default function Useeffect(){

const [arr,setArr] = useState([]);

useEffect(()=>{

fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())//here 
.then(data => {

   let names = data.map(user => user.name);
   setArr(names);

})

.catch(err => console.log(err))

},[])


return(
<>
<h1>My APP</h1>

<ul>
{
arr.map((e,i)=>(
<li key={i}>{e}</li>
))
}
</ul>

</>
)
}*/
//now we learn about axios
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // success
        setUsers(response.data);
      })
      .catch((error) => {
        // error
        console.log("Error aaya:", error);
      });
  }, []);

  return (
    <div>
      <h1>User List</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}