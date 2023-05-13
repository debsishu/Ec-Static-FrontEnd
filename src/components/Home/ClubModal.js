import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ClubModal({ clubs, title }) {
  return (
    <Parent>
      <h3>{title}</h3>
      {clubs.map((name) => (
        <Links>
          <p>e\{name}</p>
          <Button to={`/e/${name}`}>visit</Button>
        </Links>
      ))}
    </Parent>
  );
}

const Parent = styled.div`
  h3 {
		font-weight: 600;
    margin-bottom: 1rem;
  }

  background-color: #1e1e1e;
  border: 1px solid #323232;
  border-radius: 0.5rem;
  color: white;
  padding: 1.3rem;
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  margin-top: 0.5rem;

  p {
    font-weight: 300;
    font-size: 0.9rem;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
	color: white;
  background-color: #323232;
  border: 1px solid #424242;
	padding: 0.2rem 0.8rem;
	border-radius: 0.3rem;
`;

export default ClubModal;
