export default function Header({ cartCount, setSearchText }) {
  return (
    <div className="header">
      <img src="https://img-cdn.publive.online/fit-in/1200x675/filters:format(webp)/afaqs/media/post_attachments/c9d7799868e9d5111913aa57ea7ba80c16bdb82d2d81d497b656f0173dcef7cd.jpg" alt="" />
      <h2>React Demo App</h2>

      <input
        type="search"
        placeholder="Search product..."
        onChange={(e) => setSearchText(e.target.value)}
      />

      <p>Cart Item: {cartCount}</p>
    </div>
  );
}