import axios from "axios";
import { baseUrl } from "./baseUrl";

export const get = async (route) => {
  try {
    let token = localStorage.getItem("token");
    let response = await axios.get(baseUrl + route, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (err) {
    console.error(err.message);
  }
};

export const post = async (route, body) => {
  try {
    let token = localStorage.getItem("token");
    let response = await axios.get(baseUrl + route, body, {
      headers: {
        Authorization: token,
      },
    });
    return response;
  } catch (err) {
    console.error(err.message);
  }
};
