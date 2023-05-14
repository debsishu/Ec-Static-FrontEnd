import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

function ClubSkeleton() {
  return (
    <Parent>
      <div
        style={{
          width: "28%",
          padding: "1rem",
          backgroundColor: "#1E1E1E",
          border: "1px solid #323232",
          borderRadius: "0.5rem",
          color: "white",
        }}
      >
        <h3
          style={{
            marginBottom: "1rem",
          }}
        >
          About This Club
        </h3>
        {[...Array(5)].map((x, i) => (
          <Skeleton
            width={"100%"}
            height={"100%"}
            baseColor={"#323232"}
            highlightColor={"#3F3F3F"}
            style={{
              marginBottom: "1rem",
            }}
          />
        ))}
      </div>

      {/* Post Skeleton */}
      <div
        style={{
          width: "100%",
        }}
      >
        <div>
          <Skeleton
            width={"100%"}
            height={"200px"}
            baseColor={"#323232"}
            highlightColor={"#3F3F3F"}
            style={{
              marginBottom: "0.5rem",
            }}
            borderRadius={"0.5rem"}
          />
          <div
            style={{
              margin: "1rem 5rem",
            }}
          >
            <div>
              <Skeleton
                width={"50%"}
                height={"20px"}
                baseColor={"#323232"}
                highlightColor={"#3F3F3F"}
                style={{
                  marginBottom: "0.5rem",
                }}
              />
              <Skeleton
                width={"30%"}
                height={"20px"}
                baseColor={"#323232"}
                highlightColor={"#3F3F3F"}
                style={{
                  marginBottom: "0.5rem",
                }}
              />
            </div>
          </div>
        </div>
        {[...Array(4)].map(() => (
          <div
            style={{
              padding: "1rem",
              width: "100%",
              backgroundColor: "#1E1E1E",
              border: "1px solid #323232",
              borderRadius: "0.5rem",
              marginBottom: "1rem",
            }}
          >
            <Skeleton
              width={"20%"}
              height={"20px"}
              baseColor={"#323232"}
              highlightColor={"#3F3F3F"}
              style={{
                marginBottom: "0.5rem",
              }}
            />
            <Skeleton
              width={"100%"}
              height={"30px"}
              baseColor={"#323232"}
              highlightColor={"#3F3F3F"}
              style={{
                marginBottom: "0.5rem",
              }}
            />
            <Skeleton
              width={"100%"}
              height={"15px"}
              baseColor={"#323232"}
              highlightColor={"#3F3F3F"}
              count={4}
              style={{
                marginBottom: "0.5rem",
              }}
            />
            <Skeleton
              width={"70%"}
              height={"15px"}
              baseColor={"#323232"}
              highlightColor={"#3F3F3F"}
              style={{
                marginBottom: "1rem",
              }}
            />
            <Skeleton
              width={"16%"}
              height={"40px"}
              baseColor={"#323232"}
              highlightColor={"#3F3F3F"}
              style={{
                marginBottom: "0.5rem",
              }}
            />
          </div>
        ))}
      </div>

      <div
        style={{
          width: "28%",
          padding: "1rem",
          backgroundColor: "#1E1E1E",
          border: "1px solid #323232",
          borderRadius: "0.5rem",
          color: "white",
        }}
      >
        <h3
          style={{
            marginBottom: "1rem",
          }}
        >
          Joined Clubs
        </h3>
        {[...Array(5)].map((x, i) => (
          <Skeleton
            width={"100%"}
            height={"100%"}
            baseColor={"#323232"}
            highlightColor={"#3F3F3F"}
            style={{
              marginBottom: "1rem",
            }}
          />
        ))}
      </div>
    </Parent>
  );
}

const Parent = styled.div`
  margin: 1rem 5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
`;

export default ClubSkeleton;
