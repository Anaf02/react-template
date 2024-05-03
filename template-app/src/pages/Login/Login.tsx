import { Button, Form } from "react-bootstrap";
import { useSimpleAuth } from "../../components/Context/AuthContextWithoutToken/useSimpleAuthHook";
import { SimpleLoginModel } from "../../components/Context/AuthContextWithoutToken/SimpleLoginModel";
import { useAxios } from "../../components/Context/AuthContextWithoutToken/SimpleAxiosContextWithAuth";
import { useEffect, useState } from "react";
import { SimpleUserModel } from "../../components/Context/AuthContextWithoutToken/SimpleUserModel";


function Login() {
  const { login } = useSimpleAuth()
  const [userId, setUserId] = useState<string>("1")

  const handleSubmit = (formData: any) => {
    formData.preventDefault();
    console.log(userId)
    const loginModel: SimpleLoginModel = { userId: parseInt(userId) }

    login(loginModel)
  }

  const { axiosApi } = useAxios()

  const [users, setUsers] = useState<SimpleUserModel[]>([])
  useEffect(() => {
    axiosApi.get<SimpleUserModel[]>("users").then((res) => {
      setUsers(res.data)
    })
  }, [])

  return (
    <>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Control
          as="select"
          value={userId}
          onChange={e => {
            setUserId(e.target.value);
          }}
        >
          {users.map((user) => {
            return <option value={user.id}>{`${user.firstName} ${user.lastName}`}</option>
          })}
        </Form.Control>
        <Button type="submit">Submit</Button>
      </Form>

    </>
  );
}

export default Login;
