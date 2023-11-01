import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Post = () => {
  const [post, setPost] = useState([]);
  const getApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPost(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApi();
  }, [post]);

  return (
    <Con>
      <h1>Post</h1>
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {post?.map(({ id, title, body }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Con>
  );
};

export default Post;

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
