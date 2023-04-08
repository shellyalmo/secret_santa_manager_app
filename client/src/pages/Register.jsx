import "../styles/login.css";
import { useState } from "react";
import { secretSantaApi } from "../api/api";
import { useNavigate } from "react-router-dom";

/**
 *
 * @param {{email: string, password: string, name: string}} form
 * @returns
 */
const register = (form) => {
  let config = {
    data: form,
  };
  return secretSantaApi.post("/auth/register", config);
};

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: "",
    email: "",
    name: "",
  });

  return (
    <div className="login-screen">
      <div className="login-showcase"></div>
      <div className="login">
        <h2>Welcome to Secret Santa App!</h2>

        <form method="post" className="login-form">
          <label htmlFor="name">
            <b>Full Name: </b>
          </label>
          <input
            type="text"
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            placeholder="Enter full name"
            name="name"
            value={form.name}
            required
            autoComplete="name"
          />
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
            placeholder="Hunter2"
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
              onClick={async () => {
                try {
                  const result = await register(form);
                  if (result.status === 200) {
                    localStorage.setItem("token", result.data.token);
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
