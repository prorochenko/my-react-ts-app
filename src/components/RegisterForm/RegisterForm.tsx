import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusUser } from '../../redux/authSlice';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import css from './RegisterForm.module.scss';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);

  const handleLogin = () => {
    dispatch(setStatusUser(true));
  };

  return (
    <div className={css.mainBox}>
      <input type="text" />
      <button type="button" onClick={handleLogin}>
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
