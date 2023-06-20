import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setStatusUser } from '../../redux/authSlice';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import css from './LoginForm.module.scss';

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log('login', isLoggedIn);

  const handleLogin = () => {
    dispatch(setStatusUser(true));
  };

  return (
    <div className={css.mainBox}>
      <div className={css.elements}>
        <p className={css.title}>Log in</p>
        <form autoComplete="off">
          <div className={css.inputList}>
            <label htmlFor="email">
              <input
                required
                className={css.input}
                autoComplete="email"
                id="email"
                type="email"
                name="email"
                placeholder="E-mail Address "
              />
            </label>
            <label htmlFor="password">
              <input
                required
                id="password"
                className={css.input}
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
          </div>
          <button className={css.button} type="button" onClick={handleLogin}>
            Login
          </button>
          <div className={css.bottomTextBox}>
            <p className={css.bottomTextBox__text}>Don't have an account?</p>

            <NavLink className={css.bottomBtn} to="/Register">
              Register
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
