import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid black;
  background-color: tomato;

  > nav {
    display: flex;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  padding: 5px;
  :hover {
    color: green;
  }
`;
