import LoginForm from "../components/LoginForm";
import Shape from "../components/Shape";

function Login() {
  return (
    <div className="login">
      <Shape size="1150px" top="-550px" left="-150px" rotate={255} />
      <Shape size="1150px" bottom="-430px" left="-250px" rotate={75} />
      <Shape size="1700px" bottom="-570px" right="-900px" rotate={10} />
      <Shape size="1700px" top="-1200px" right="-800px" rotate={195} />
      <LoginForm />
    </div>
  )
}

export default Login;