import React from 'react'
import styled from "styled-components";


function Login() {
  return (
    <div>
        <SearchBar>
          <input
            type="text"
            placeholder="Please Enter Your Username"
          />
        </SearchBar>
        <SearchBar>
          <input
            type="text"
            placeholder="Please Enter Your Password"
          />
        </SearchBar>
    </div>
  )
}

const SearchBar = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: left;
  margin-left: 30rem;
  margin-top: 5rem;
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
export default Login