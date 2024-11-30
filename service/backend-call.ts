import axios from "axios";

const http = axios.create({
  baseURL: "http://sample-app-be.argocd.svc.cluster.local/api",
  timeout: 5000,
});


export const CallBackend = async ()=> {
    const res = await http.get("/backend-call")  
    return res?.data;
}