import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectIsLoggedIn } from '../redux/authSelectors';
import { ContactsForm } from '../components/ContactsForm/ContactsForm';
export default function Contacts() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
      return;
    }
  }, [navigate, isLoggedIn]);

  return (
    <div>
      <meta name="description" content="Login page" />
      <title>Login</title>
      <ContactsForm />
    </div>
  );
}
