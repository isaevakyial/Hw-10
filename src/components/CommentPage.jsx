import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function CommentPage() {
  const { id } = useParams();
  const [commentPageData, setCommentPageData] = useState(null);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/comments/${id}`
        );
        const data = await response.json();
        setCommentPageData(data);
      } catch (error) {
        console.error("Error fetching comment data:", error);
      }
    };
    fetchCommentData();
  }, [id]);

  if (!commentPageData) {
    return <div>Loading...</div>;
  }

  return (
    <Con>
      <h1>Comment Page</h1>
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          <tr key={commentPageData.id}>
            <td>{commentPageData.name}</td>
            <td>{commentPageData.email}</td>
            <td>{commentPageData.body}</td>
          </tr>
        </tbody>
      </Table>
    </Con>
  );
}

export default CommentPage;

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
