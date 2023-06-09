import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import { Outlet } from 'react-router-dom';
import LoadingComponent from '../Loader/Loader';
import { Suspense } from 'react';

import css from './HomePages.module.scss';

export const HomePage: React.FC = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log('login', isLoggedIn);

  return (
    <>
      <div className={css.mainBox}>
        <h1 className={css.title}>The dullest pencil is better than the sharpest memory</h1>
        <div className={css.box}>
          <div className={css.box__picture}></div>
        </div>
      </div>
    </>
  );
};
