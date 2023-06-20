import { HomePage } from '../components/HomePage/HomePage';
import { Outlet } from 'react-router-dom';
import LoadingComponent from '../components/Loader/Loader';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <meta name="description" content="Home page" />
      <title>Home</title>
      <HomePage />
    </div>
  );
}
