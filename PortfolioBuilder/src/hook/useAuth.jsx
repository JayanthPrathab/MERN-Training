// src/hooks/useAuth.js
import {jwtDecode} from "jwt-decode";

const useAuth = () => {
  const token = localStorage.getItem("token");

  if (!token) return { isAuthenticated: false };

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      localStorage.removeItem("token"); // Clear expired token
      return { isAuthenticated: false };
    }
    return {
      isAuthenticated: true,
      user: decoded, // you can extract name/email/id from this
    };
  } catch (err) {
    console.error("Token decode failed", err);
    return { isAuthenticated: false };
  }
};
export default useAuth;