import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusUser } from '../../redux/authSlice';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import css from './RegisterForm.module.scss';
import { NavLink } from 'react-router-dom';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);

  const handleLogin = () => {
    dispatch(setStatusUser(true));
  };

  return (
    <div className={css.mainBox}>
      <p className={css.title}>Create Account</p>
      <form autoComplete="off">
        <div className={css.inputList}>
          <label htmlFor="Full Name">
            <input className={css.input} required type="text" placeholder="Full Name" />
          </label>
          <label htmlFor="email">
            <input
              required
              className={css.input}
              autoComplete="email"
              type="email"
              name="email"
              placeholder="E-mail Address "
            />
          </label>
          <label htmlFor="password">
            <input
              required
              className={css.input}
              type="password"
              name="password"
              placeholder="Password"
            />
          </label>
        </div>
        <button className={css.button} type="button" onClick={handleLogin}>
          Register
        </button>

        <p>
          Already have an account ?
          <NavLink className={css.btnTransperent} to="/login">
            Login
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
