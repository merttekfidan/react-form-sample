import axios from "axios";
const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
export async function getPost() {
  return await instance.get("/posts");
}

export async function postPost(params) {
  return await instance.post("/posts", params);
}
