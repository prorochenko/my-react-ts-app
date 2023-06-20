import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AuthNav.module.scss';

const NavItems = styled(NavLink)`
  color: #9b9faa;
  text-decoration: none;
  &.active {
    color: #000;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #9b9faa;
  }
`;

export const AuthNav = () => {
  return (
    <div className={css.navBar}>
      <NavItems to="login" className={css.button}>
        Login
      </NavItems>
      <NavItems to="register" className={css.button}>
        Registration
      </NavItems>
    </div>
  );
};
