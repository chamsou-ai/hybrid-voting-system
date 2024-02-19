import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await axios.post("http://localhost:2000/get/login", inputs);
    if(res.data.error)
    setCurrentUser(null);
    else{
        setCurrentUser(res.data);
      }
  };

  const sign  = async (inputs) => {
    const res = await axios.post("http://localhost:2000/get/sign",inputs);
  }

  const logout = async (inputs) => {
    await axios.post("http://localhost:2000/get/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user",JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, sign }}>
      {children}
    </AuthContext.Provider>
  );
};