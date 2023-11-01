import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Comment = () => {
  const [comment, setComment] = useState([]);

  const getApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/comments");
      const data = await res.json();
      setComment(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApi();
  }, [comment]);

  return (
    <Con>
      <h1>Comment</h1>
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {comment?.map(({ id, name, email, body }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Con>
  );
};

export default Comment;

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
