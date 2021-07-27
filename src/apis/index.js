import axios from "axios";

// const PROD_BASE_URL = "https://multivendor-ecommerce-restapi.herokuapp.com/";
const DEV_URL = "http://localhost:8000/";

const api = axios.create({
  baseURL: DEV_URL,
});

export { api };
