import axios from "axios";
export const api = axios.create({
  baseURL: "http://192.168.0.8:3000" // sendo melhor utilizar o endereço da internet para o aparelho móvel não se perder
})