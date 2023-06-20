import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalUniversal from '../Modal/Modal';
import { Button } from '@chakra-ui/react';
import { selectShowModal } from '../../redux/authSelectors';
import { setStatusModal } from '../../redux/authSlice';
import LoadingComponent from '../Loader/Loader';
import { selectIsLoggedIn } from '../../redux/authSelectors';

import css from './ContactsForm.module.scss';

const notify = () => toast('Good Job! 👏');

export const ContactsForm: React.FC = () => {
  const isShowModal = useSelector(selectShowModal);
  const dispatch = useDispatch();

  const onOpenModal = () => {
    dispatch(setStatusModal(true));
  };

  return (
    <>
      {isShowModal && <ModalUniversal />}
      <div className={css.mainBox}>
        <h1 className={css.header}>Phonebook</h1>
        <div className={css.contactsMenu}>
          <div className={css.box}>
            <h2>Contacts</h2>
            <label>
              <h2 className={css.title}>Filter</h2>
              <input
                className={css.input__box}
                placeholder="Enter your name"
                // onChange={onChange}
                // value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
          </div>
          <div className={css.box}>
            <h2>Add contact</h2>
            <label>
              <h2 className={css.title}>Name</h2>
              <input
                className={css.input__box}
                placeholder="Enter your name"
                // onChange={onChange}
                // value={name}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              <h2 className={css.title}>Number</h2>
              <input
                className={css.input__box}
                placeholder="Enter your number"
                // onChange={onChange}
                // value={number}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <button className={css.btn} type="button">
              Add contact
            </button>
          </div>
        </div>
        <button className={css.btn} type="button" onClick={notify}>
          press me
        </button>
        <button className={css.btn} onClick={onOpenModal}>
          Modal Window
        </button>
        <div>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};
