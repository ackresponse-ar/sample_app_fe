import axios from "axios";

const http = axios.create({
  baseURL: "http://api.app.ackresponse.com/api",
  timeout: 5000,
});


export const CallBackend = async ()=> {
    const res = await http.get("/backend-call")  
    return res?.data;
}