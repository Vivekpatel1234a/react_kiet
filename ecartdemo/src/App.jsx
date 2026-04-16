import { useState } from 'react'
import './App.css'
import Header from './component/Header.jsx'
import ProductList from './component/ProductList.jsx';
import Cart from './component/Cart.jsx'
import Items from './component/Items.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from './component/ItemDetail.jsx';
function App() {
  const [cart,setCart]=useState([]);
  const [totalAmount,setAmount]=useState(0);
  const [searchText,setSearchText]=useState("");

  const product = [ //array ke andr object 
    {
      id:1,
      name:"laptop",
      price:50000,
      image:'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/13-laptop-platinum-right-render-fy25:VP4-1260x795?fmt=png-alpha'
    },
    {
      id:2,
      name:"mobile",
      price:37999,
      image:'https://5.imimg.com/data5/SELLER/Default/2023/6/312836839/UK/XE/SQ/4630526/apple-iphone-14-pro-128gb-gold-mobile-phone-500x500.jpg'
    },
    {
      id:3,
      name:"charger",
      price:5999,
      image:'https://www.portronics.com/cdn/shop/files/Portronics_Adapto_100_Multiport_100w_Charger.png?v=1738651493'
    }
  ]

  function addToCart(Product){
    setCart([...cart,Product]); // to add the product to the cart array by creating a new array with the existing cart items and the new product
    
    //setAmount(totalAmount=>totalAmount+Product.price)    
  }
 // function removefromCart(index){
  //  const updateCart=cart.filter((_,i)=>i!=index);
  //  setCart(updateCart);
 // }
  //const totalAmount=cart.reduce(((total,index)=>total+index.price,0));



   const filteredProducts = product.filter((item) =>
  item.name.toLowerCase().includes(searchText.toLowerCase())
);
 return (
  <BrowserRouter>
    <div>
      <Header cartCount={cart.length} setSearchText={setSearchText} />

      <Routes>

        {/* HOME PAGE */}
        <Route path="/" element={
          <>
            <ProductList
              products={filteredProducts}
              addToCart={addToCart}
              setAmount={setAmount}
              cart={cart}
            />
            <Cart totAmt={totalAmount}/>
            <p className="cart-title">Items In The Cart:</p>
            <Items totalitem={cart}/>
          </>
        } />

        {/* ITEM DETAIL PAGE */}
        <Route 
          path="/item/:id" 
          element={<ItemDetail products={product} addToCart={addToCart} />} 
        />

      </Routes>
      
    </div>
  </BrowserRouter>
)
}

export default App
