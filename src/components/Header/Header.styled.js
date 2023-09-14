import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  gap: 15px;
  padding: 15px;
  border-bottom: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #f4f4fd;

  &.active {
    color: white;
    background-color: #4d5ae5;
  }
`;
