import ProductCart from './ProductCart';

export default function ProductList({ products, addToCart, setAmount ,cart }) {
  return (
    <div className='productcartcss'>
      {products.map(product => (
        <ProductCart
          key={product.id}
          product={product}
          addToCart={addToCart}
          setAmount={setAmount}
           cart={cart} 
        />
        
        
      ))}
    </div>
  );
}
