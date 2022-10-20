import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import { UserContext } from "../../context/Context";

function Nav() {
  const { name } = useContext(UserContext);
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
          <Link to="/profile">
            <img
              className="profile"
              src="https://i.ibb.co/68fwhbt/shine-photos-Vkx-N5z-AVa7-A-unsplash.jpg"
              alt="Profile Here"
            />
          </Link>
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
    font-family: "Euclid Circular A", sans-serif;
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
