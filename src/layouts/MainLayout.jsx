import { Outlet } from "react-router-dom";
import Menu from "../components/Menu";
import styled from "styled-components";

const MainLayout = () => {
  return (
    <COn>
      <Menu />
      <Outlet />
    </COn>
  );
};

export default MainLayout;

const COn = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;
