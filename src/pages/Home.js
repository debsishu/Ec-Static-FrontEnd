import React, { useEffect } from "react";
import Nav from "../components/Navigation/Nav";
import axios from "axios";

function Home() {
  useEffect(() => {
    secureCookie();
  }, []);

  async function secureCookie() {
    const { data } = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "checktoken",
      { token: localStorage.getItem("token") }
    );
    console.log(data);
  }
  return (
    <div>
      <Nav />
    </div>
  );
}

export default Home;
