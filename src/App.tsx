import { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import ECommerce from './pages/Dashboard/ECommerce';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Loader from './common/Loader';
import routes from './routes';
import { getCookie } from './utils/storage/cookie-storage';
import { Storage } from './contstants/storage';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

function App() {
  const isLoggedIn = getCookie(Storage.token);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // setTimeout(() => setLoading(false), 1);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        containerClassName="overflow-auto"
      />
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        {isLoggedIn && isLoggedIn !=null? (
          <Route element={<DefaultLayout />}>
            <Route index element={<ECommerce />} />
            {routes.map((route, index) => {
              const { path, component: Component } = route;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Suspense fallback={<Loader />}>
                      <Component />
                    </Suspense>
                  }
                />
              );
            })}
          </Route>
        ) : (
          <Route index path="/sign-in" element={<SignIn />} />
        )}
      </Routes>
    </>
  );
}

export default App;
