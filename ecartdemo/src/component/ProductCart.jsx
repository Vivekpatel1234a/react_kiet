export default function ProductCart({ product, addToCart, setAmount }) {
  return (
    <div>
      <img
        src={product.image}
        alt={product.name}
        className="product-img"
      />
      <h4>{product.name}</h4>
      <p>₹{product.price}</p>

      <button onClick={() =>{ addToCart(product),
        setAmount(prev => prev + product.price); 
        }}>
        Add to cart
      </button>
    </div>
  );
}


