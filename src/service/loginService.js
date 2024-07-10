import axiosInstance from "../api/axiosInstance";

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post("/auth/signin", {
      username,
      password,
    });
    const token = response.data.data;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    console.error("Error during authentication", error);
    throw error;
  }
};
