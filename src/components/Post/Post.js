import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { TrendingUp } from "react-feather";
import { UserContext } from "../../context/Context";
import { Link } from "react-router-dom";

function Post({ post, setPost }) {
  const user = useContext(UserContext);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [loadingComments, setLoadingComments] = useState(true);
  const [comments, setComments] = useState();

  async function handleShowLike() {
    setShowComments(true);
    setLoadingComments(true);

    var options = {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}getcomments`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      data: { postID: post._id },
    };
    try {
      const { data } = await axios.request(options);
      setComments(data);
    } catch (e) {
      console.log("No comments found");
    }

    setLoadingComments(false);
  }

  function isLiked() {
    const array = post.likeCount;
    const username = user.username;
    return array.includes(username);
  }

  async function handleLikeIncrease() {
    const postID = post._id;
    var options = {
      method: "POST",
      url: `${process.env.REACT_APP_BACKEND_URL}increaselike`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${localStorage.getItem("token")}`,
      },
      data: { id: postID },
    };
    setLiked(true);
    try {
      await axios.request(options);
    } catch (e) {
      console.log(e);
    }
    console.log(post);
  }
  return (
    <Parent>
      <PostInformation>
        <PostHeading>
          <div>
            <h1>{post.postTitle}</h1>
            <p>
              <span>{post.username}</span> posted
            </p>
          </div>
          <PostStat>
            <div>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                }}
                to={`/club/${post.clubID}`}
              >
                e\{post.clubID}
              </Link>
              <p>On {post.date}</p>
            </div>
            {isLiked() || liked ? (
              <LikeDisabled>
                <div>
                  <TrendingUp width={20} />
                  <p>
                    {liked ? post.likeCount.length + 1 : post.likeCount.length}
                  </p>
                </div>
              </LikeDisabled>
            ) : (
              <Likes onClick={() => handleLikeIncrease()}>
                <div>
                  <TrendingUp width={20} />
                  <p>{post.likeCount.length}</p>
                </div>
              </Likes>
            )}
          </PostStat>
        </PostHeading>
        {post.imageURL !== undefined && (
          <Image
            style={{
              background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.7)), url(${post.imageURL})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <img src={post.imageURL} alt={post.postTitle} />
          </Image>
        )}
        <p>{post.postContent}</p>
      </PostInformation>
      <CommentsParent>
        {showComments && <h3>Comments</h3>}
        {!showComments && (
          <CommentButton>
            <button onClick={handleShowLike}>Show Comments</button>
          </CommentButton>
        )}
        {showComments &&
          !loadingComments &&
          Array.isArray(comments) &&
          comments.map((comment) => (
            <CommentBox>
              <p className="header">
                <span>{comment.username}</span> posted on {comment.date}
              </p>
              <p>{comment.commentContent}</p>
            </CommentBox>
          ))}
        {showComments && !loadingComments && !Array.isArray(comments) && (
          <p>No comments found</p>
        )}
        {showComments && loadingComments && <p>Loading</p>}
      </CommentsParent>
    </Parent>
  );
}

const CommentBox = styled.div`
  background-color: #1e1e1e;
  border: 1px solid #323232;
  border-radius: 0.4rem;
  padding: 0.8rem 1.2rem;
  margin-bottom: 1rem;

  p {
    font-size: 0.9rem;
  }

  .header {
    color: #c5c5c5;
    font-weight: 200;
    margin-bottom: 0.3rem;
    span {
      font-weight: 600;
    }
  }
`;

const CommentsParent = styled.div`
  background-color: #1e1e1e;
  border: 1px solid #323232;
  border-radius: 0.5rem;
  padding: 1rem 1.2rem;
  color: white;
  margin-top: 1rem;

  h3 {
    margin-bottom: 1rem;
  }
`;

const CommentButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: #237bff;
    border: none;
    outline: none;
    padding: 0.8rem 2rem;
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    border-radius: 0.4rem;
    cursor: pointer;
  }
`;

const Parent = styled.div`
  height: 87vh;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const PostStat = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  img {
    width: 25rem;
    aspect-ratio: 16 / 11;
    object-fit: cover;
    border-radius: 0.3rem;
  }
`;

const PostInformation = styled.div`
  background-color: #1e1e1e;
  border: 1px solid #323232;
  border-radius: 0.5rem;
  padding: 1rem 1.2rem;
  color: white;

  p {
    font-size: 0.9rem;
    text-align: justify;
  }
`;

const PostHeading = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  h1 {
    font-size: 1.6rem;
  }

  p {
    color: #d7d7d7;
    font-size: 0.85rem;
    font-weight: 200;
  }

  span {
    font-weight: 600;
  }
`;

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
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
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
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
  }
`;

export default Post;
