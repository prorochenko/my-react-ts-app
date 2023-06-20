import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import { AuthNav } from '../AuthNav/AuthNav';
import RegisterForm from '../RegisterForm/RegisterForm';
import { UserMenu } from '../UserNav/UserNav';

export const AppBar: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <div>
        {/* <Navigation /> */}
        {isLoggedIn && <UserMenu />}
        {!isLoggedIn && <AuthNav />}
      </div>
    </header>
  );
};
