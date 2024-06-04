import { baseURL } from "../constants/Constant";
import axiosInstance from "./axiosInstance";
import axios from "axios";

export function uploadFile(id, fileFormData) {
  return axios.post(`${baseURL}/api/upload/${id}`, fileFormData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
export function sendMessage(data) {
  return axiosInstance.post(`/api/chats/message`, data);
}
