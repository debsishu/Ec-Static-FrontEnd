import React from "react";
import styled from "styled-components";

function JoinedClubs() {
  return (
    <Box>
      <Title>Joined Clubs</Title>
      <Club>
        <Name>e\programming</Name>
        <Button>visit</Button>
      </Club>
      <Club>
        <Name>e\dance</Name>
        <Button>visit</Button>
      </Club>
      <Club>
        <Name>e\drama</Name>
        <Button>visit</Button>
      </Club>
      <Club>
        <Name>e\art</Name>
        <Button>visit</Button>
      </Club>
      <Club>
        <Name>e\debate</Name>
        <Button>visit</Button>
      </Club>
    </Box>
  );
}

const Box = styled.div`
  border: 1px solid #3f3f3f;
  padding: 1.4rem 1.4rem;
  background-color: #1e1e1e;
  border-radius: 10px;
  height: 290px;
  width: 269px;
`;

const Title = styled.div`
  color: #fff;
  text-decoration: underline;
  font-size: 18;
  font-weight: 500;
  padding-top: 1rem;
  padding-bottom: 1.2rem;
  font-family: "Euclid Circular A", sans-serif;
`;

const Club = styled.div`
  color: #fff;
  display: flex;
  font-size: 16;
  padding-bottom: 0.8rem;
  font-weight: normal;
  font-family: "Euclid Circular A", sans-serif;
`;

const Name = styled.div`
  color: #fff;
  font-size: 16;

  margin-right: auto;
  font-weight: normal;
  font-family: "Euclid Circular A", sans-serif;
`;

const Button = styled.div`
  margin-left: auto;
  border: 2px solid #3f3f3f;
  padding: 0.1rem 1rem;
  border-radius: 5px;
`;

export default JoinedClubs;
