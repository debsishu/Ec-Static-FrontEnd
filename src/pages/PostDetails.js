import React, { useEffect, useContext } from "react";
import Nav from "../components/Navigation/Nav";
import axios from "axios";
import { UserContext } from "../context/Context";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import ClubModal from "../components/Home/ClubModal";
import styled from "styled-components";
import "react-loading-skeleton/dist/skeleton.css";

// Skeleton Imports
import NavSkeleton from "../components/skeletons/NavSkeleton";
import Post from "../components/Post/Post";

function PostDetails() {
  const postID = useParams().postID;

  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [navLoading, setNavLoading] = useState(true);
  const [postLoading, setPostLoading] = useState(true);
  const [postData, setPostData] = useState();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    } else {
      secureCookie();
      getPostData();
    }
  }, []);

  async function secureCookie() {
    setNavLoading(true);
    const { data } = await axios.post(
      process.env.REACT_APP_BACKEND_URL + "checktoken",
      { token: localStorage.getItem("token") }
    );
    user.setUsername(data.username);
    user.setName(data.name);
    user.setProfileImage(data.profileImageURL);
    setNavLoading(false);
  }

  async function getPostData() {
    setPostLoading(true);
    var options = {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}findpost`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      data: { postID: postID },
    };

    const { data } = await axios.request(options);
    setPostData(data);
    setPostLoading(false);
  }

  const dummyClubs = ["programming", "dance", "drama", "art", "debate"];

  return (
    <div>
      {navLoading && <NavSkeleton />}
      {!navLoading && <Nav />}
      {postLoading && <p>Still loading</p>}
      {!postLoading && (
        <Parent>
          <ClubModal clubs={dummyClubs} title={"Joined Clubs"} />
          <Post post={postData} setPost={setPostData} />
          <ClubModal clubs={dummyClubs} title={"Popular Clubs"} />
        </Parent>
      )}
    </div>
  );
}

const Parent = styled.div`
  margin: 1rem 5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export default PostDetails;
