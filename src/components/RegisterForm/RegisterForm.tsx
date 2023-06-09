import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLoggedIn } from '../../redux/authSelectors';
import css from './RegisterForm.module.scss';
import { setStatusUser } from '../../redux/authSlice';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const fullName = form.elements.namedItem('Full-Name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;
    console.log(
      'fullName',
      fullName.value,
      'email:',
      emailInput.value,
      'password:',
      passwordInput.value
    );
    dispatch(setStatusUser(true));
    form.reset();
  };

  return (
    <div className={css.mainBox}>
      <div className={css.elements}>
        <p className={css.title}>Create Account</p>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className={css.inputList}>
            <label htmlFor="Full Name">
              <input
                className={css.input}
                id="Full-Name"
                required
                type="text"
                placeholder="Full Name"
              />
            </label>
            <label htmlFor="email">
              <input
                required
                id="email"
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
                id="password"
                className={css.input}
                type="password"
                name="password"
                placeholder="Password"
              />
            </label>
          </div>
          <button className={css.button} type="submit">
            Register
          </button>
          <div className={css.bottomTextBox}>
            <p className={css.bottomTextBox__text}>Already have an account ?</p>
            <NavLink className={css.bottomBtn} to="/login">
              Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
