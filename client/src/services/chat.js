import axios from "../lib/axios";

export const sendMessage = async (message) => {
  const response = await axios.post("api/v1/chat", { message });
  return response.data;
};
