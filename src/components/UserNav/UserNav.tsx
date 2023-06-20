import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItems = styled(NavLink)`
  color: #9b9faa;
  text-decoration: none;
  &.active {
    color: #212121;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #9b9faa;
  }
`;

export const UserMenu = () => {
  return (
    <div>
      <NavItems to="/login">Ogo</NavItems>
      <NavItems to="/register">Oro</NavItems>
    </div>
  );
};