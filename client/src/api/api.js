import axios from "axios";

const secretSantaApi = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5000/api/v1"
      : "https://secret-santa-manager-app.onrender.com/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
    authorization: localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : undefined,
  },
});

export { secretSantaApi };
