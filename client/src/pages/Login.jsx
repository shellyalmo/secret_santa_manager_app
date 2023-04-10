import "../styles/login.css";
import { useState } from "react";
import { secretSantaApi } from "../api/api";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

/**
 *
 * @param {{email: string, password}} form
 * @returns
 */
const loginRequest = (form) => {
  let config = {
    data: form,
  };
  return secretSantaApi.post("/auth/login", config);
};

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();

  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: "",
    email: "",
  });

  const loginClickHandler = async () => {
    try {
      const result = await loginRequest(form);
      if (result.status === 200) {
        localStorage.setItem("token", result.data.token);
        navigate("/user");
      } else {
        messageApi.open({
          type: "error",
          content: "Couldn't login",
        });
      }
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Couldn't login",
      });
    }
  };

  return (
    <div className="login-screen">
      {contextHolder}
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
            autoComplete="off"
          />
          <label htmlFor="password">
            <b>Password: </b>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            required
            onChange={(e) => {
              setForm({ ...form, password: e.target.value });
            }}
            value={form.password}
            autoComplete="off"
          />
          <div className="login-buttons">
            <button
              type="button"
              onClick={loginClickHandler}
              className="login-btn"
            >
              Login
            </button>
          </div>

          <div className="login-buttons">
            <button
              type="button"
              className="signup-btn"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            {/* <span>
              Forgot <a href="#">password?</a>
            </span> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
