import "../styles/login.css";

function LoginForm() {
  return (
    <div className="login__container">
      <h1 className="login__title">
        Login to <span>GPS.ID TMS</span> Account
      </h1>

      <p className="login__subtitle">
        Please enter your email and password to continue
      </p>

      <form className="login__form">
        <div className="login__field">
          <label className="login__label" htmlFor="email">
            Email address:
          </label>

          <input
            className="login__input"
            id="email"
            type="text"
            placeholder="esteban_schiller@gmail.com"
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
