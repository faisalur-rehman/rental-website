// import { api } from "./index";
import axios from "axios";

// const DEV_URL = "http://localhost:8000/";
const PROD_URL = "https://multivendor-ecommerce-restapi.herokuapp.com/";
const api = axios.create({
  baseURL: PROD_URL,
});

const config = {
  headers: {
    Authorization: localStorage.getItem("token"),
  },
};

const fileConfig = {
  headers: {
    Authorization: localStorage.getItem("token"),
    "Content-Type": "multipart/form-data",
  },
};

export function signUp(data) {
  return api.post("/user/register", { ...data });
}

export function signIn(data) {
  return api.post("/user/login", { ...data });
}
export function userProfile() {
  return api.get("/user/profile", config);
}

export function addNewProduct(data) {
  return api.post("/product/add", data, fileConfig);
}
export function getAllProducts() {
  return api.get("/product/user-get-all", config);
}
export function adminAllProducts() {
  return api.get("/product/admin-get-all", config);
}
export function getSingleProduct(id) {
  return api.post("/product/get-single", { productId: id }, config);
}
export function rentProduct(data) {
  return api.post("/rental-history/add", { ...data }, config);
}
export function getVendorRentHistory() {
  return api.get("/rental-history/vendor-get", config);
}
export function getRenterRentHistory() {
  return api.get("/rental-history/renter-get", config);
}
export function getAllRentHistory() {
  return api.get("/rental-history/admin-get", config);
}
export function searchProduct(data) {
  return api.post("/product/search", { ...data }, config);
}
export function transferMoney(data) {
  return api.post("/user/transfer-payment", { ...data }, config);
}
