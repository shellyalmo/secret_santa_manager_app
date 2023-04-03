import "../styles/login.css";
import { useState } from "react";
import { secretSantaApi } from "../api/api";
import { useNavigate } from "react-router-dom";

/**
 *
 * @param {{email: string, password}} form
 * @returns
 */
const login = (form) => {
  let config = {
    data: form,
  };
  return secretSantaApi.post("/auth/login", config);
};

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: "",
    email: "",
  });

  return (
    <div className="login-screen">
      <div className="login-showcase"></div>
      <div className="login">
        <h2>Welcome to Secret Santa App!</h2>

        <form method="post" className="login-form">
          <label htmlFor="eml">
            <b>Email: </b>
          </label>
          <input
            type="email"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
            placeholder="Enter email"
            name="eml"
            value={form.email}
            required
          />
          <label htmlFor="password">
            <b>Password: </b>
          </label>
          <input
            type="password"
            placeholder="Hunter2"
            name="password"
            required
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            value={form.password}
          />
          <div className="login-buttons">
            <button
              type="button"
              onClick={async () => {
                try {
                  const result = await login(form);
                  if (result.status === 200) {
                    navigate("/user");
                  } else {
                    alert("fail");
                  }
                } catch (error) {
                  alert("fail");
                }
              }}
              className="login-btn"
            >
              Login
              {/* <Link
                to={redirect ? `/user/:id?redirect=${redirect}` : "/user/:id"}
              >
                Login
              </Link> */}
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
