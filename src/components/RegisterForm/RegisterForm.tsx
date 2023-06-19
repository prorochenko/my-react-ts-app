import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusUser } from '../../redux/authSlice';
import { selectIsLoggedIn } from '../../redux/authSelectors';

const RegisterForm: React.FC = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log(isLoggedIn);

  const handleLogin = () => {
    dispatch(setStatusUser(true));
  };

  return (
    <div>
      <input type="text" />
      <button type="button" onClick={handleLogin}>
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
