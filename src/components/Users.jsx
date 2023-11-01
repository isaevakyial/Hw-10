import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Users = () => {
  const [user, setUser] = useState([]);
  const getApi = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getApi();
  }, [user]);

  return (
    <Con>
      <h1>User</h1>
      <Table>
        <thead>
          <tr>
            <th>name</th>
            <th>username</th>
            <th>id</th>
          </tr>
        </thead>
        <tbody>
          {user?.map(({ name, username, id }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{username}</td>
              <td>{id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Con>
  );
};

export default Users;

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
