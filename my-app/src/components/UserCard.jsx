export function UserCard({ data }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "8px 0" }}>
      <h4>Name: {data.name}</h4>
      <p>Desc: {data.desc}</p>
      <p>Price: ₹{data.price}</p>
    </div>
  );
}
