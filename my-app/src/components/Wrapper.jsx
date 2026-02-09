export function Wrapper({ title, children }) {
  return (
    <div style={{ border: "2px solid black", padding: "12px", marginTop: "10px" }}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}
