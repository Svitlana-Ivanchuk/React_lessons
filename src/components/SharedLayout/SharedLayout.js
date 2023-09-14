import { Outlet } from 'react-router-dom';
//import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import Header from '../Header/Header';
//import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>

      {/*<Toaster />*/}
    </>
  );
};
