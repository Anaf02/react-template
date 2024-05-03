import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import FoodCard from "../../components/Widgets/FoodCard";
import { useAxios } from "../../components/Context/AuthContextWithoutToken/SimpleAxiosContextWithAuth";
interface Food {
  id: number;
  name: string;
}

function Home() {
  const { axiosApi } = useAxios();
  const [dice, setDice] = useState<number>(-1);
  // const [food, setFood] = useState<string>("");
  const [foods, setFoods] = useState<Food[]>([]);

  let id = 4;
  useEffect(() => {
    axiosApi.get<number>("rolldice").then((res) => setDice(res.data));
    // axiosApi.get<string>(`food/${id}`).then((res) => setFood(res.data));
    axiosApi.get<Food[]>("food").then((res) => setFoods(res.data));
  }, []);

  return (
    <>
      <h1>Home</h1>
      {dice}
      <br></br>
      {id}
      <br></br>
      <br></br>
      <div>
        <p>Foods:</p>

        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
          {foods.map((food) => (
            <Col key={food.id}>
              <FoodCard
                title={food.name}
                body={`Id: ${food.id}`}
                id={food.id}
              />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Home;
