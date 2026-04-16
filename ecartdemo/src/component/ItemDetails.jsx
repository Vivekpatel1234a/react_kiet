import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Item ID: {id}</h2>
    </div>
  );
}

export default ItemDetail;