import "../styles/login.css";
import { useState } from "react";
import { secretSantaApi } from "../api/api";
import { Link } from "react-router-dom";

const createUserApi = (form) => {
  return secretSantaApi.post("/users", form);
};

const redirect = location.search ? location.search.split("=")[1] : "/";

const Login = ({ setNewUser }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="login-screen">
      <div className="login-showcase"></div>
      <div className="login">
        <h2>Welcome to Secret Santa App!</h2>

        <form method="post" className="login-form">
          <label htmlFor="uname">
            <b>Full Name: </b>
          </label>
          <input
            type="text"
            placeholder="Enter full name"
            name="uname"
            required
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
            value={form.name}
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
          />
          <div className="login-buttons">
            <button
              type="button"
              onClick={async () => {
                await createUserApi(form);
                setNewUser(form.email);
              }}
              className="login-btn"
            >
              <Link to={redirect ? `/user?redirect=${redirect}` : "/user"}>
                Login
              </Link>
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
