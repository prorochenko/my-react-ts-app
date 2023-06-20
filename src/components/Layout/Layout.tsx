import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
// import { RightSideBar } from './RightSideBar/RightSideBar';
// import css from './Layout.module.scss';
import LoadingComponent from '../Loader/Loader';
import css from './Layout.module.scss';
import { HomePage } from '../HomePage/HomePage';

const Layout = () => {
  return (
    <div className={css.background}>
      <AppBar />
      <div className={css.elements}>
        <HomePage />
        <Suspense fallback={<LoadingComponent />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default Layout;
