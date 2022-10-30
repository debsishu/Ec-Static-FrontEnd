import React, { useEffect, useContext } from "react";
import Nav from "../components/Navigation/Nav";
import axios from "axios";
import { UserContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import NavSkeleton from "../components/skeletons/NavSkeleton";

function Home() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      secureCookie();
    }
  }, []);

  async function secureCookie() {
    setLoading(true);
    const { data } = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "checktoken",
      { token: localStorage.getItem("token") }
    );
    user.setUsername(data.username);
    user.setName(data.name);
    user.setProfileImage(data.profileImageURL);
    console.log(data);
    setLoading(false);
  }
  return (
    <div>
      {loading && <NavSkeleton />}
      {!loading && <Nav />}
    </div>
  );
}

export default Home;
