import axios from "axios";
import authHeader from "../services/authHeader";

export default axios.create({
    baseURL: process.env.REACT_APP_MFS_URL,
    responseType: "json",
});

export let config = {
    headers: authHeader()
}