import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export async function search(param: string) {
  const data = await axiosClient.get(`/search/users?q=${param}`, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
    },
  });
  return data;
}
