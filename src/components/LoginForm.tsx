import { useState } from "react";
import useAuth from "../hooks/useAuth";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { login as loginService } from "../services/auth";

function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      const data = await loginService({
        username,
        password,
      });

      console.log(data.token);

      login(data.token);

      navigate("/vehicle-list");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login__container">
      <h1 className="login__title">
        Login to <span>GPS.ID TMS</span> Account
      </h1>

      <p className="login__subtitle">
        Please enter your email and password to continue
      </p>

      <form className="login__form" onSubmit={handleSubmit}>
        <div className="login__field">
          <label className="login__label" htmlFor="email">
            Email address:
          </label>

          <input
            className="login__input"
            id="email"
            type="text"
            placeholder="esteban_schiller@gmail.com"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="login__field">
          <div className="login__field-header">
            <label className="login__label" htmlFor="password">
              Password
            </label>

            <a className="login__forgot" href="#">
              Forgot Password?
            </a>
          </div>

          <input
            className="login__input"
            id="password"
            type="password"
            placeholder="• • • • • •"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label className="login__remember">
          <input type="checkbox" className="login__checkbox-input" />
          <span className="login__checkbox-custom"></span>
          Remember password
        </label>

        <button className="login__button" type="submit">
          Sign In
        </button>
      </form>

      <p className="login__footer">
        Don't have an account? <a href="#">Create Account</a>
      </p>
    </div>
  );
}

export default LoginForm;
