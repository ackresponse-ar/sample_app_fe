import axios from "axios";

const http = axios.create({
  baseURL: "http://<backend-loadbalancer-ip>/api",
  timeout: 5000,
});


export const CallBackend = async ()=> {
    const res = await http.get("/backend-call")  
    return res?.data;
}