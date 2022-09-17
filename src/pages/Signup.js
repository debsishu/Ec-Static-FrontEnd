import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Signup() {
  return (
    <Parent>
      <Left>
        <img src="./assets/signup-image.png" alt="Sign Up" />
      </Left>
      <Right>
        <Bubbles>
          <div className="left-bubble"></div>
          <div className="right-bubble"></div>
        </Bubbles>
        <div className="child">
          <Title>
            <div>
              <h1>Welcome to</h1>
              <img src="./assets/Logo.svg" alt="Logo Here" />
            </div>
          </Title>
          <Box>
            <Inputs>
              <div className="input-fields">
                <p>Name</p>
                <input type="text" placeholder="Please Enter your name" />
              </div>
              <div className="input-fields">
                <p>Username</p>
                <input type="text" placeholder="Please Enter your username" />
              </div>
              <div className="input-fields">
                <p>E-Mail</p>
                <input type="email" placeholder="Please Enter your E-Mail" />
              </div>
              <div className="input-fields">
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Please Enter your passowrd"
                />
              </div>
              <Buttons>
                <p>
                  Already Have Account,{" "}
                  <Link
                    style={{
                      color: "#67A4FF",
                      fontWeight: "500",
                    }}
                    to="/login"
                  >
                    Login
                  </Link>
                </p>
                <button>Sign Up</button>
              </Buttons>
            </Inputs>
          </Box>
        </div>
      </Right>
    </Parent>
  );
}

const Parent = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Bubbles = styled.div`
  z-index: -1;
  .left-bubble {
    position: absolute;
    left: 86.34%;
    right: -20.02%;
    top: -10.21%;
    bottom: 58.1%;

    background: #221a32;
    filter: blur(146.369px);
    border-radius: 429.985px;
  }

  .right-bubble {
    position: absolute;
    left: 19.1%;
    right: 42.13%;
    top: 54.34%;
    bottom: -14.32%;
    background: #112036;
    filter: blur(168.5px);
    border-radius: 495px;
  }
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    outline: none;
    border: none;
    color: white;
    font-family: "Euclid Circular A", sans-serif;
    font-size: 0.9rem;
    padding: 0.8rem 1.8rem;
    background-color: #237bff;
    border-radius: 0.3rem;
  }
`;

const Inputs = styled.div`
  input {
    width: 100%;
    background-color: #2d2d2d;
    outline: none;
    border: 1px solid #404040;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    color: white;
    border-radius: 0.3rem;
    margin-top: 0.4rem;
    font-family: "Euclid Circular A", sans-serif;
  }

  p {
    font-size: 0.9rem;
  }

  input::placeholder {
    font-size: 0.9rem;
  }

  .input-fields {
    margin-bottom: 1.2rem;
  }
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .child {
    width: 60%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  div {
    display: flex;
    align-items: center;
    h1 {
      font-family: "Gilroy-Bold", sans-serif;
      color: white;
    }
    img {
      margin-left: 1rem;
      margin-top: 0.2rem;
      height: 2.6rem;
    }
  }
`;

const Box = styled.div`
  background-color: #1e1e1e;
  color: white;
  padding: 2rem 2.5rem;
  border-radius: 0.4rem;
`;

const Left = styled.div`
  width: 600px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #94d6ff 0%,
    #419ed7 69.27%,
    #328bc2 84.37%,
    #3eb5ff 100%
  );

  img {
    width: 40rem;
    margin-left: 7rem;
  }
`;

export default Signup;
