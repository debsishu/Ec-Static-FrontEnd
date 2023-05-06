import React, { useEffect, useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Navigation/Nav";
import styled from "styled-components";
import { UserContext } from "../context/Context";
import axios from "axios";
import NavSkeleton from "../components/skeletons/NavSkeleton";
import ClubModal from "../components/Home/ClubModal";
import AllPosts from "../components/Home/AllPosts";
import moment from "moment";

function Club() {
  const clubName = useParams().name;

  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [navLoading, setNavLoading] = useState(true);
  const [clubDataLoading, setClubDataLoading] = useState(true);
  const [clubPostLoading, setClubPostLoading] = useState(true);
  const [clubData, setClubData] = useState();
  const [clubPosts, setClubPosts] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/login");
    else {
      secureCookie();
      getClubInfo();
      getClubPosts();
    }
  }, []);

  async function getClubInfo() {
    setClubDataLoading(true);

    var options = {
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}clubdetails`,
      params: { clubID: clubName },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    };

    const { data } = await axios.request(options);
    setClubData(data);
    setClubDataLoading(false);
  }

  async function getClubPosts() {
    setClubPostLoading(true);

    var options = {
      method: "GET",
      url: `${process.env.REACT_APP_BACKEND_URL}clubposts`,
      params: { clubID: clubName },
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
    };
    const { data } = await axios.request(options);
    setClubPosts(data.posts);
    setClubPostLoading(false);
  }

  async function secureCookie() {
    setNavLoading(true);
    const { data } = await axios.post(
      process.env.REACT_APP_BACKEND_URL + `checktoken`,
      { token: localStorage.getItem("token") }
    );
    user.setUsername(data.username);
    user.setName(data.name);
    user.setProfileImage(data.profileImageURL);
    setNavLoading(false);
  }
  const dummyClubs = ["programming", "dance", "drama", "art", "debate"];

  return (
    <div>
      {navLoading && <NavSkeleton />}
      {!navLoading && <Nav />}
      {!clubPostLoading && (
        <HomeDiv>
          {!clubDataLoading && (
            <ClubInfoModal>
              <h3>About This Club</h3>
              <p>{clubData.ClubDescription}</p>
              <p className="members">
                {clubData.UserCount === 1
                  ? clubData.UserCount + " member"
                  : clubData.UserCount + " members"}
              </p>
              <p className="date">
                Created on{" "}
                {moment.utc(clubData.DateOfCreation).format("Do MMM YYYY")}
              </p>
            </ClubInfoModal>
          )}
          <ClubBanner>
            <div>
              <img
                className="club-banner"
                src={
                  clubData.ClubBanner !== undefined
                    ? clubData.ClubBanner
                    : "https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                }
                alt={clubData.ClubName}
              />
              <ClubDetails>
                <div className="club-info-parent">
                  <div className="club-info">
                    <img
                      className="club-logo"
                      src={clubData.ClubImage}
                      alt={clubData.clubName}
                    />
                    <div>
                      <h3>{clubData.ClubName}</h3>
                      <p>e\{clubData.ClubTag}</p>
                    </div>
                  </div>
                  <button>Joined</button>
                </div>
              </ClubDetails>
            </div>
            <AllPosts posts={clubPosts} />
          </ClubBanner>
          <ClubModal clubs={dummyClubs} title={"Joined Clubs"} />
        </HomeDiv>
      )}
    </div>
  );
}

const ClubBanner = styled.div`
  .club-banner {
    width: 100%;
    height: 15rem;
    border-radius: 0.5rem;
    object-fit: cover;
  }

  .club-logo {
    height: 6rem;
    width: 6rem;
    object-fit: cover;
    border-radius: 100%;
    border: 0.25rem white solid;
  }
`;

const ClubDetails = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 4rem;
  color: white;
  margin-bottom: 6rem;

  .club-info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .club-info-parent {
    position: absolute;
    top: -1.2rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      color: #cfcfcf;
      font-weight: 300;
      font-size: 0.9rem;
    }

    button {
      border: none;
      outline: none;
      color: white;
      background-color: #171717;
      border: 2px #4b4b4b solid;
      padding: 0.6rem 2rem;
      border-radius: 0.5rem;
      font-family: "Satoshi", sans-serif;
      font-size: 1rem;
    }
  }
`;

const HomeDiv = styled.div`
  margin: 1rem 5rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const ClubInfoModal = styled.div`
  h3 {
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    font-weight: 300;
  }

  .members,
  .date {
    font-weight: 500;
  }

  .date {
    text-align: center;
    background-color: #1e1e1e;
    border: 1px solid #3c3c3c;
    padding: 0.6rem;
    border-radius: 0.3rem;
    margin-bottom: 0;
  }

  background-color: #1e1e1e;
  border: 1px solid #323232;
  border-radius: 0.5rem;
  color: white;
  padding: 1.3rem;
`;

export default Club;
