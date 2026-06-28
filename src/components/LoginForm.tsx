import { useState } from "react";
import useAuth from "../hooks/useAuth";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { isAxiosError } from "axios";
import { login as loginService } from "../services/auth";

function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(value: string) {
    setUsername(value);
    if (error) setError("");
  }

  function handlePasswordChange(value: string) {
    setPassword(value);
    if (error) setError("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginService({
        username,
        password,
      });

      login(data.token, {
        username: data.username,
        fullname: data.fullname,
        email: data.email,
        phone: data.phone,
      });

      navigate("/vehicle-list");
    } catch (err) {
      if (isAxiosError(err) && err.response?.data?.message) {
        const message = err.response.data.message;
        setError(typeof message === "string" ? message : "Username atau password salah.");
      } else {
        setError("Username atau password salah. Silakan coba lagi.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login__container">
      <h1 className="login__title">
        Login to <span>GPS.ID TMS</span> Account
      </h1>

      <p className="login__subtitle">
        Please enter your username and password to continue
      </p>

      <form className="login__form" onSubmit={handleSubmit}>
        {error && (
          <p className="login__error" role="alert">
            {error}
          </p>
        )}

        <div className="login__field">
          <label className="login__label" htmlFor="username">
            Username
          </label>

          <input
            className="login__input"
            id="username"
            type="text"
            placeholder="esteban_schiller@gmail.com"
            value={username}
            onChange={(e) => handleUsernameChange(e.target.value)}
            autoComplete="username"
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
            onChange={(e) => handlePasswordChange(e.target.value)}
            autoComplete="current-password"
          />
        </div>

        <label className="login__remember">
          <input type="checkbox" className="login__checkbox-input" />
          <span className="login__checkbox-custom"></span>
          Remember password
        </label>

        <button className="login__button" type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <p className="login__footer">
        Don't have an account? <a href="#">Create Account</a>
      </p>
    </div>
  );
}

export default LoginForm;
