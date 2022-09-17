import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Login() {
  return (
    <Parent>
      <Left>
        <img src="./assets/login-image.png" alt="Log In" />
      </Left>
      <Right>
        <Bubbles>
          <div className="left-bubble"></div>
          <div className="right-bubble"></div>
        </Bubbles>
        <div className="child">
          <Title>
            <div>
              <h1> Welcome back to </h1>
              <img src="./assets/Logo.svg" alt="Logo Here" />
            </div>
          </Title>
          <Box>
            <Inputs>
              <div className="input-fields">
                <p>Username</p>
                <input type="text" placeholder="Please Enter Your Username" />
              </div>
              <div className="input-fields">
                <p>Password</p>
                <input
                  type="password"
                  placeholder="Please Enter Your Password"
                />
              </div>
              <div className="input-fields">
                <Buttons>
                  <div>
                    <p>
                      Forgot Password?{" "}
                      <Link
                        style={{ color: "#67A4FF", fontWeight: "500" }}
                        to="/login"
                      >
                        Click Here
                      </Link>
                    </p>

                    <p>
                      Don't have an Account?{" "}
                      <Link
                        style={{ color: "#67A4FF", fontWeight: "500" }}
                        to="/signup"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>

                  <button>Login</button>
                </Buttons>
              </div>
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

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: -2rem;

  button {
    outline: none;
    border: none;
    color: white;
    font-size: 0.9rem;
    font-family: "Euclid Circular A", sans-serif;
    padding: 0.8rem 1.8rem;
    background-color: #237bff;
    border-radius: 0.2rem;
    cursor: pointer;
    font-weight: 500;
  }

  p {
    margin-bottom: 1.2rem;
    font-weight: 300;
  }
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

const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .child {
    width: 55%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;

  div {
    display: flex;
    align-items: center;
    h1 {
      font-family: "Gilroy-Bold", sans-serif;
      color: white;
    }
    img {
      height: 2.6rem;
      margin-left: 1rem;
      margin-top: 0.2 rem;
    }
  }
`;

const Inputs = styled.div`
  input {
    width: 100%;
    background-color: #2d2d2d;
    outline: none;
    border: 1px solid #404040;
    padding: 0.8rem 1rem;
    font-size: 1rem;
    color: white;
    border-radius: 0.3rem;
    margin-top: 0.4rem;
    font-family: "Euclid Circular A", sans-serif;
  }

  input::placeholder {
    font-size: 0.9rem;
    margin-bottom: 1.4rem;
  }

  p {
    font-size: 0.9rem;
  }

  .input-fields {
    margin-bottom: 1.4rem;
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
    width: 33rem;
    margin-left: 15rem;
  }
`;

export default Login;
