import axios from "axios";

// const PROD_BASE_URL = "https://timer-management-app.herokuapp.com";
const DEV_BASE_URL = "https://multivendor-ecommerce-restapi.herokuapp.com/";

const api = axios.create({
  baseURL: DEV_BASE_URL,
});

export { api };
