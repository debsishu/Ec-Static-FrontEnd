import React from 'react';
import { Link , useParams } from 'react-router-dom';
import styled from "styled-components";
import { TrendingUp } from "react-feather";

function FullPost({ posts }) {
  const { postId } = useParams();
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <MainDiv>
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
                    <p className="clubName font-size">e\{post.clubID}</p>
                    <p className="font-size">
                        <span>{post.username}</span> posted
                    </p>
                    </SubHeading>
                    <p className="font-size">{post.date}</p>
                </Heading>
                <h3>{post.postTitle}</h3>
                {post.imageURL !== undefined && (
                    <p className="post-content">{post.postContent.substring(0, 320)}...</p>
                )}
                {post.imageURL === undefined && (
                    <p className="post-content">{post.postContent.substring(0, 400)}...</p>
                )}
                </div>
                
            </PostBody>
            <Likes>
                <div>
                <TrendingUp width={20} />
                <p>{post.likeCount}</p>
                </div>
            </Likes>
            </Parent>
            <CommentSection>
                {post.comments.map((comment) => (
                    <CommentParent>
                        <CommentHeader>
                            {comment.imageURL !== undefined && (
                                <Image>
                                <img src={comment.imageURL} alt={comment.Title} />
                                </Image>
                            )}
                            <p className="font-size">
                                <span>{comment.username}</span> posted
                            </p>
                        </CommentHeader>
                        <CommentBody>
                            <p>{comment.body}</p>
                        </CommentBody>
                    </CommentParent>         
                ))}
            </CommentSection>
        </MainDiv>
  );
}

const CommentSection = styled.div``;

const CommentParent = styled.div``;

const CommentHeader = styled.div``;

const CommentBody = styled.div``;

const MainDiv = styled.div`
  height: 87vh;
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
    background-color: #237bff;
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
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

export default FullPost;
