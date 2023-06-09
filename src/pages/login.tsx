import React, { useEffect, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authSelectors';

import { LoginForm } from '../components/LoginForm/LoginForm';

export default function Login() {
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
      <meta name="description" content="Login page" />
      <title>Login</title>
      <LoginForm />
    </div>
  );
}
