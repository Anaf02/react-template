import { useEffect, useState } from "react";
import { useAxios } from "../../components/Context/AxiosContext";

function Home() {
  const { axiosApi } = useAxios();
  const [dice, setDice] = useState<number>(-1);
  const [food, setFood] = useState<string>("");
  let id = 4;
  useEffect(() => {
    axiosApi.get<number>("rolldice").then((res) => setDice(res.data));
    axiosApi.get<string>(`food/${id}`).then((res) => setFood(res.data));
  });

  return (
    <>
      <h1>Home</h1>
      {dice}
      <br></br>
      {id}
      <br></br>
      {food}
      <br></br>
    </>
  );
}

export default Home;
