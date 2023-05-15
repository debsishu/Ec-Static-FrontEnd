import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import { UserContext } from "../../context/Context";

function Nav() {
  const navigate = useNavigate();
  const { name, profileImage } = useContext(UserContext);

  function handleNavigate(path, isLogout) {
    if (isLogout) localStorage.removeItem("token");
    navigate(`/${path}`);
  }

  return (
    <div>
      <NavBar>
        <Link to="/">
          <img
            className="logo"
            src="./assets/Logo.svg"
            alt="Ec-Static Logo Here"
          />
        </Link>
        <SearchBar>
          <IconContext.Provider
            value={{
              color: "#939393",
              size: "1.3rem",
            }}
          >
            <FiSearch />
          </IconContext.Provider>
          <input
            type="text"
            placeholder="Type something to search from the posts"
          />
        </SearchBar>
        <Profile>
          <p>Hi, {name}</p>
          <div
            style={{
              float: "right",
            }}
            className="dropdown"
          >
            <img
              className="profile dropbtn"
              src={
                profileImage === undefined
                  ? "https://img.myloview.com/stickers/default-avatar-profile-in-trendy-style-for-social-media-user-icon-400-228654852.jpg"
                  : profileImage
              }
              alt="Profile Here"
            />
            <div class="dropdown-content">
              <p onClick={() => handleNavigate("profile", false)}>Profile</p>
              <p onClick={() => handleNavigate("login", true)}>Logout</p>
            </div>
          </div>
        </Profile>
      </NavBar>
    </div>
  );
}

const Profile = styled.div`
  display: flex;
  color: white;
  align-items: center;
  font-size: 0.9rem;
  p {
    font-size: 0.8rem;
  }

  .dropbtn {
    color: white;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }

  .dropdown {
    color: white;
    position: relative;
    display: inline-block;
    font-weight: 600;
  }

  .dropdown-content {
    color: white;
    display: none;
    position: absolute;
    right: 0;
    background-color: #1e1e1e;
    min-width: 110px;
    z-index: 1;
    border-radius: 0.5rem;
    border: 1px solid #323232;
  }

  .dropdown-content p {
    cursor: pointer;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: center;
  }

  .dropdown-content p:hover {
    background-color: #292929;
    border-radius: 0.3rem;
    border: 1px solid #323232;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem 5rem;
  background-color: #1e1e1e;
  .logo {
    height: 1.7rem;
  }

  .profile {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 1rem;
    margin-top: 0.1rem;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0.2rem 1rem;
  border-radius: 0.5rem;
  background-color: #2d2d2d;
  width: 35vw;

  input {
    width: 100%;
    padding: 0.6rem;
    margin-left: 0.2rem;
    background-color: #2d2d2d;
    font-family: "Satoshi", sans-serif;
    border: none;
    outline: none;
    color: white;
    font-size: 1rem;
  }

  input::placeholder {
    font-size: 0.85rem;
  }
`;

export default Nav;
