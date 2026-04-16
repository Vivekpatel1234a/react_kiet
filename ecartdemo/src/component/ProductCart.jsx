import { Link } from "react-router-dom";

export default function ProductCart({ product, addToCart, setAmount }) {
  return (
    <div>
      {/* CLICKABLE PART */}
      <Link to={`/item/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-img"
        />
        <h4>{product.name}</h4>
      </Link>

      <p>Rs. {product.price}</p>

      {/* BUTTON (no navigation) */}
      <button
        onClick={() => {
          addToCart(product);
          setAmount((prev) => prev + product.price);
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
