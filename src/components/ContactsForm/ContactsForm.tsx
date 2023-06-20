import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import LoadingComponent from '../Loader/Loader';
import { selectIsLoggedIn } from '../../redux/authSelectors';

import css from './ContactsForm.module.scss';

export const ContactsForm: React.FC = () => {
  return (
    <>
      <div className={css.mainBox}>
        <h1 className={css.header}>Contacts</h1>
        <div className={css.box}>
          <div className={css.box__picture}></div>
        </div>
      </div>
    </>
  );
};
