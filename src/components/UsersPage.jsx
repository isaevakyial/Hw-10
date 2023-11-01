import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function UsersPage() {
  const { id } = useParams();
  const [userPageData, setUserPageData] = useState(null);

  useEffect(() => {
    const fetchCommentData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        const data = await response.json();
        setUserPageData(data);
      } catch (error) {
        console.error("Error fetching comment data:", error);
      }
    };
    fetchCommentData();
  }, [id]);

  if (!userPageData) {
    return <div>Loading...</div>;
  }

  return (
    <Con>
      <h1>User Page</h1>
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          <tr key={userPageData.id}>
            <td>{userPageData.name}</td>
            <td>{userPageData.username}</td>
            <td>{userPageData.id}</td>
          </tr>
        </tbody>
      </Table>
    </Con>
  );
}

export default UsersPage;

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
