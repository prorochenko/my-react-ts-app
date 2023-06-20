import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { selectIsLoggedIn } from './redux/authSelectors';

const Register = lazy(() => import('./pages/Register'));
const Login = lazy(() => import('./pages/Login'));
const Home = lazy(() => import('./pages/Home'));

const App: React.FC = () => {
  // const [todos, setTodos] = useState<IItem[]>([]);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log('app', isLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/Home" />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {/* <Route path="diary" element={<Diary />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        {/* чи зробити тут сторінку 404? в path * */}
      </Routes>
    </>
  );
};

export default App;
