import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../../components/Context/AuthContextWithoutToken/SimpleAxiosContextWithAuth";

function Foods() {
  const { axiosApi } = useAxios();
  const [dice, setDice] = useState<number>(-1);
  const [food, setFood] = useState<string>();

  let { id } = useParams();

  useEffect(() => {
    axiosApi.get<number>("rolldice").then((res) => setDice(res.data));
    axiosApi.get<string>(`food/${id}`).then((res) => setFood(res.data));
  }, []);

  return (
    <>
      {dice}
      <br></br>
      {id}
      <br></br>
      {food}
    </>
  );
}

export default Foods;
