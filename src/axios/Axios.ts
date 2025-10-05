import axios from "axios";

// const AXIOSBASEURL = axios.create({
//   baseURL: "http://localhost:5000/",
// });
const AXIOSBASEURL = axios.create({
  baseURL: "https://portfolio-server-navy.vercel.app/",
});

export default AXIOSBASEURL;
export const base_url = "http://localhost:4000/api/v1";
