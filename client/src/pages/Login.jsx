import "../styles/login.css";

const Login = () => {
  return (
    <div className="login-screen">
      <div className="login-showcase"></div>
      <div className="login">
        <h2>Welcome to Secret Santa App!</h2>

        <form className="login-form">
          <label htmlFor="uname">
            <b>Full Name: </b>
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            name="uname"
            required
          />

          <label htmlFor="eml">
            <b>Email: </b>
          </label>
          <input type="email" placeholder="Enter email" name="eml" required />
          <div className="login-buttons">
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>

          {/* <div className="login-buttons">
            <button type="button" className="signup-btn">
              Signup
            </button>
            <span>
              Forgot <a href="#">password?</a>
            </span>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default Login;
