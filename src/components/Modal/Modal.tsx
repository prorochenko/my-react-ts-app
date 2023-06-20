import { createPortal } from 'react-dom';
import { FaBeer } from 'react-icons/fa';

import { useEffect, useCallback, MouseEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectShowModal } from '../../redux/authSelectors';
import { setStatusModal } from '../../redux/authSlice';
import css from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root') || document.createElement('div');

interface KeyboardEvent {
  key: string;
  code: any;
}

const ModalUniversal = () => {
  const dispatch = useDispatch();
  const isShowModal = useSelector(selectShowModal);

  const onClose = useCallback(() => {
    dispatch(setStatusModal(false));
  }, [dispatch]);

  const handleBackdropClick: MouseEventHandler<HTMLDivElement> = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const escKeyDown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', escKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', escKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [escKeyDown]);

  return createPortal(
    <div className={css.Modal__backdrop} onClick={handleBackdropClick}>
      <div className={css.Modal__content}>
        <button className={css.btnCloseMob} onClick={onClose}>
          CLOSE
        </button>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalUniversal;
