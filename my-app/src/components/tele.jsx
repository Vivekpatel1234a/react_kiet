import "./tele.css";

export default function Header(props) {
  return ( 
    <>
      <header>
        <h1>{props.title}</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">Next Webpage</a>
        </nav>

        <h1>Welcome To Our First React App</h1>
      </header>
    </>
  );
}
//export default function Header(props)  props use kre yaa fir kuchh aur bhi koi problem nhi hai 
