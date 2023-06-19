import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import { selectIsLoggedIn } from './redux/authSelectors';
import RegisterForm from './components/RegisterForm/RegisterForm';

const Login = lazy(() => import('./pages/login'));

const App: React.FC = () => {
  // const [todos, setTodos] = useState<IItem[]>([]);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  console.log('app', isLoggedIn);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<Navigate to="/login" />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterForm />} />
          {/* <Route path="calculator" element={<Calculator />} /> */}
          {/* <Route path="diary" element={<Diary />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
        {/* чи зробити тут сторінку 404? в path * */}
      </Routes>
    </>
  );
};

export default App;
