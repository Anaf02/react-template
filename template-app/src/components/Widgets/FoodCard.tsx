import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

interface FoodCardProps {
  imgSrc?: string;
  title: string;
  body: string;
  id: number;
}

function FoodCard({
  imgSrc = "holder.js/100px180",
  title,
  body,
  id,
}: FoodCardProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/food/${id}`);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgSrc} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Link to={`/food/${id}`}>
          <Button variant="primary">Go somewhere</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
