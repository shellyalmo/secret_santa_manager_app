import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-screen">
      <div className="login-showcase"></div>
      <div className="login">
        <h2>Welcome to Secret Santa App!</h2>

        <form className="login-form">
          <label htmlFor="uname">
            <b>Username: </b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label htmlFor="psw">
            <b>Password: </b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <div className="login-buttons">
            <button type="submit">Login</button>
          </div>

          <div>
            <button type="button">Signup</button>
            <span>
              Forgot <a href="#">password?</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
