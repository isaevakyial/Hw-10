import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function PostPage() {
  const { id } = useParams();
  const [postPageData, setPostPageData] = useState(null);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        setPostPageData(data);
      } catch (error) {
        console.error("Error fetching comment data:", error);
      }
    };
    fetchCommentData();
  }, [id]);

  if (!postPageData) {
    return <div>Loading...</div>;
  }

  return (
    <Con>
      <h1>Post Page</h1>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          <tr key={postPageData.id}>
            <td>{postPageData.id}</td>
            <td>{postPageData.title}</td>
            <td>{postPageData.body}</td>
          </tr>
        </tbody>
      </Table>
    </Con>
  );
}

export default PostPage;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    text-align: center;
    padding: 8px;
    width: 200px;
    height: 80px;
    border-top: 1px solid #fff;
    border-bottom: none;
  }
  td {
    font-size: 20px;
    font-weight: 500;
  }
  margin-right: 15rem;
`;

const Con = styled.div`
  display: flex;
  flex-direction: column;
`;
