import { Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Shape from "../components/Shape";
import useAuth from "../hooks/useAuth";

function Login() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login">
      <div className="login__wallpaper" aria-hidden="true">
        <Shape size="1150px" top="-550px" left="-150px" rotate={255} />
        <Shape size="1150px" bottom="-430px" left="-250px" rotate={75} />
        <Shape size="1700px" bottom="-570px" right="-900px" rotate={10} />
        <Shape size="1700px" top="-1200px" right="-800px" rotate={195} />
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
