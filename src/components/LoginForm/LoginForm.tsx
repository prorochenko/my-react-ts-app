import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setStatusUser } from '../../redux/authSlice';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import css from './LoginForm.module.scss';

export const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;
    console.log('email:', emailInput.value, 'password:', passwordInput.value);
    dispatch(setStatusUser(true));
    form.reset();
  };

  return (
    <div className={css.mainBox}>
      <div className={css.elements}>
        <p className={css.title}>Log in</p>
        <form onSubmit={handleSubmit} autoComplete="off">
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
          <button className={css.button} type="submit">
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
