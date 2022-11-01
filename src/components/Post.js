import React from "react";
import styled from "styled-components";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { FaRegComments } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";

function Post() {
  return (
    <div>
      <Box>
        <Picture>
          <img
            src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            height={171}
            width={247}
          />
        </Picture>
        <Content>
          <Header>
            <Community>e\programming</Community>
            <Author>Posted by u\youwillnevercatme</Author>
            <Time>45 mins ago</Time>
          </Header>
          <Body>
            <Title>A single person answered 76k questions about SQL </Title>
            <Details>
              A single person answered 76k questions about SQL on StackOverflow.
              Averaging 22.8 answers per day, every day, for the past 8.6 years.
              Gordon Linoff hit one million reputation points on Stack Overflow
              in August 2020 (now one year later he's at 1.17M).......
            </Details>
          </Body>
          <Footer>
            <Button1>
              <ButContainer>
                <BsPlusCircleFill />
                <Text>view more</Text>
              </ButContainer>
            </Button1>
            <Button2>
              <ButContainer>
                <FaRegComments />
                <Text>comments</Text>
              </ButContainer>
            </Button2>
          </Footer>
        </Content>
        <Votes>
          <Upvote>
            <Text>2</Text>
            <ImArrowUp />
          </Upvote>
          <Downvote>
            <Text>0</Text>
            <ImArrowDown />
          </Downvote>
        </Votes>
      </Box>
    </div>
  );
}

const Box = styled.div`
  border: 1px solid #3f3f3f;
  padding: 1.4rem 1.4rem;
  display: flex;
  background-color: #1e1e1e;
  border-radius: 10px;
  height: 279px;
  width: 854px;
`;

const Picture = styled.div`
  padding: 2rem 0rem;
  .img {
  }
`;

const Content = styled.div`
  padding: 0rem 1rem;
`;

const Header = styled.div`
  display: flex;
`;

const Community = styled.div`
  color: #fff;
  padding-right: 0.5rem;
  font-size: 14;
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 500;
`;

const Author = styled.div`
  color: #cbcbcb;
  padding: 0rem 0.25rem;
  font-size: 14;
  font-family: "Euclid Circular A", sans-serif;
  font-weight: normal;
`;

const Time = styled.div`
  color: #cbcbcb;
  padding: 0rem 0.25rem;
  font-size: 14;
  font-family: "Euclid Circular A", sans-serif;
  font-weight: normal;
`;

const Body = styled.div``;

const Title = styled.div`
  color: #fff;
  padding-top: 1rem;
  font-size: 16;
  font-family: "Euclid Circular A", sans-serif;
  font-weight: 500;
`;

const Details = styled.div`
  color: #cbcbcb;
  padding-top: 1rem;
  font-size: 14;
  font-family: "Euclid Circular A", sans-serif;
  font-weight: normal;
`;

const Footer = styled.div`
  padding-top: 1rem;
  display: flex;
`;

const Votes = styled.div`
  padding: 0.2rem 0.6rem;
`;

const Text = styled.div`
  font-size: 12;
  font-family: "Euclid Circular A", sans-serif;
`;

const Upvote = styled.div`
  color: #fff;
  display: flex;
  padding-bottom: 0.8rem;
`;

const Downvote = styled.div`
  color: #fff;
  display: flex;
`;

const ButContainer = styled.div`
  display: flex;
`;

const Button1 = styled.div`
  background-color: #237bff;
  border: 1px solid #3f3f3f;
  color: white;
  padding: 0.6rem 1.3rem;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

const Button2 = styled.div`
  background-color: 171717;
  border: 1px solid #3f3f3f;
  color: white;
  border-radius: 10px;
  padding: 0.6rem 1.3rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

export default Post;
