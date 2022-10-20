import React, { useEffect, useContext } from "react";
import Nav from "../components/Navigation/Nav";
import axios from "axios";
import { UserContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

function Home() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      secureCookie();
    }
  }, []);

  async function secureCookie() {
    const { data } = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "checktoken",
      { token: localStorage.getItem("token") }
    );
    user.setUsername(data.username);
    user.setName(data.name);
    console.log(data);
  }
  return (
    <div>
      <Nav />
    </div>
  );
}

export default Home;
