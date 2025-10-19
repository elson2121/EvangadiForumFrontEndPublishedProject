import axios from "axios"
const axiosinstance = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://evangadiforum-f3ys.onrender.com/api",
});
export default axiosinstance