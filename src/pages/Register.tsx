import React, { useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authSelectors';

import RegisterForm from '../components/RegisterForm/RegisterForm';

export default function Register() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/');
      return;
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      <meta name="description" content="Register page" />
      <title>Register</title>
      <RegisterForm />
    </div>
  );
}
