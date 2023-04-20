import React, { useEffect, useContext } from "react";
import Nav from "../components/Navigation/Nav";
import axios from "axios";
import { UserContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AllPosts from "../components/Home/AllPosts";
import ClubModal from "../components/Home/ClubModal";
import styled from "styled-components";
import 'react-loading-skeleton/dist/skeleton.css'

// Skeleton Imports
import NavSkeleton from "../components/skeletons/NavSkeleton";
import HomeSkeleton from "../components/skeletons/HomeSkeleton";

function Home() {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [homeLoading, setHomeLoading] = useState(false);
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      secureCookie();
      getAllPosts();
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

  async function getAllPosts() {
    setHomeLoading(true);
    const { data } = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "allposts"
    );
    setPostsData(data.post);
    setHomeLoading(false);
  }

  const dummyClubs = ["programming", "dance", "drama", "art", "debate"];

  return (
    <div>
      {loading && <NavSkeleton />}
      {!loading && <Nav />}
      {homeLoading && <HomeSkeleton />}
      {!homeLoading && (
        <HomeDiv>
          <ClubModal clubs={dummyClubs} title={"Joined Clubs"} />
          <AllPosts posts={postsData} />
          <ClubModal clubs={dummyClubs} title={"Popular Clubs"} />
        </HomeDiv>
      )}
    </div>
  );
}

const HomeDiv = styled.div`
  margin: 1rem 5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export default Home;
