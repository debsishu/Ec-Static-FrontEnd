import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PlusSquare, TrendingUp } from "react-feather";
import { UserContext } from "../../context/Context";
import axios from "axios";

function AllPosts({ posts, addHeight, setPosts }) {
  const user = useContext(UserContext);

  function isLiked(post) {
    const array = post.likeCount;
    const username = user.username;
    console.log(array.includes(username));
    return array.includes(username);
  }

  async function handleLikeIncrease(index) {
    const postID = posts[index]._id;
    var options = {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}increaselike`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      data: { id: postID },
    };

    const post = posts[index];
    const likeArray = posts[index].likeCount;
    likeArray.push(user.username);
    Object.assign(post.likeCount, likeArray);
    setPosts(
      posts.map((item, thisIndex) => {
        return thisIndex === index ? post : item;
      })
    );
    
    try {
      await axios.request(options);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <MainDiv
      style={{
        height: addHeight ? "87vh" : "",
      }}
    >
      {posts.map((post, index) => (
        <Parent>
          {post.imageURL !== undefined && (
            <Image>
              <img src={post.imageURL} alt={post.postTitle} />
            </Image>
          )}
          <PostBody>
            <div>
              <Heading>
                <SubHeading>
                  <Link
                    to={`/club/${post.clubID}`}
                    className="clubName font-size"
                  >
                    e\{post.clubID}
                  </Link>
                  <p className="font-size">
                    <span>{post.username}</span> posted
                  </p>
                </SubHeading>
                <p className="font-size">{post.date}</p>
              </Heading>
              <h3>{post.postTitle}</h3>
              {post.imageURL !== undefined && (
                <p className="post-content">
                  {post.postContent.substring(0, 320)}...
                </p>
              )}
              {post.imageURL === undefined && (
                <p className="post-content">
                  {post.postContent.substring(0, 400)}...
                </p>
              )}
            </div>
            <Button>
              <PlusSquare width={15} strokeWidth={3} />
              view post
            </Button>
          </PostBody>
          {isLiked(post) ? (
            <LikeDisabled>
              <div>
                <TrendingUp width={20} />
                <p>{post.likeCount.length}</p>
              </div>
            </LikeDisabled>
          ) : (
            <Likes onClick={() => handleLikeIncrease(index)}>
              <div>
                <TrendingUp width={20} />
                <p>{post.likeCount.length}</p>
              </div>
            </Likes>
          )}
        </Parent>
      ))}
    </MainDiv>
  );
}

const LikeDisabled = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #237bff;
    padding: 0.4rem;
    border-radius: 0.4rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const MainDiv = styled.div`
  /* height: 87vh; */
  overflow: auto;
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Likes = styled.div`
  cursor: pointer;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #323232;
    padding: 0.4rem;
    border-radius: 0.4rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.6rem 1.3rem;
  background-color: #323232;
  border: 1px solid #424242;
  border-radius: 0.5rem;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
`;

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  align-items: start;

  h3 {
    font-weight: 800;
    margin-bottom: 0.6rem;
  }

  .post-content {
    color: #cbcbcb;
    font-size: 0.9rem;
    font-weight: 400;
    text-align: justify;
  }
`;

const Parent = styled.div`
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 1rem;
  background-color: #1e1e1e;
  border: 1px solid #323232;
  border-radius: 0.5rem;
  align-content: start;

  .font-size {
    text-decoration: none;
    font-size: 0.85rem;
  }
`;

const SubHeading = styled.div`
  display: flex;
  gap: 1rem;
  p {
    font-weight: 400;
  }

  span {
    font-weight: 600;
  }

  .clubName {
    color: #cbcbcb;
    font-weight: 300;
  }
`;

const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6rem;
`;

const Image = styled.div`
  img {
    width: 20rem;
    aspect-ratio: 16 / 12;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

export default AllPosts;
