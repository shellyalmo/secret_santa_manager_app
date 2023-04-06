import axios from "axios";

const secretSantaApi = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export { secretSantaApi };
