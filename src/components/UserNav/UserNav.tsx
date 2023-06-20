import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { setStatusUser } from '../../redux/authSlice';
import { selectIsLoggedIn } from '../../redux/authSelectors';

import css from './UserNav.module.scss';

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

export const UserMenu = () => {
  const username = 'John';
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(setStatusUser(false));
  };

  return (
    <div className={css.navBar}>
      <button onClick={handleLogout} className={css.button}>
        Logout
      </button>
      <p>Hello, {username}!</p>
    </div>
  );
};
