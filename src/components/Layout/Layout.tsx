import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
// import { RightSideBar } from './RightSideBar/RightSideBar';
// import css from './Layout.module.scss';
import LoadingComponent from '../Loader/Loader';
import css from './Layout.module.scss';
import { HomePage } from '../HomePage/HomePage';
import { selectIsLoggedIn } from '../../redux/authSelectors';
import { ContactsForm } from '../ContactsForm/ContactsForm';

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.background}>
      <AppBar />
      <div className={css.elements}>
        {!isLoggedIn && <HomePage />}
        {isLoggedIn && <ContactsForm />}
        <Suspense fallback={<LoadingComponent />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
