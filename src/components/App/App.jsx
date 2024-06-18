import { Toaster } from 'react-hot-toast';
import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";


import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PrivateRoute from '../PrivateRoute/PrivateRoute.jsx'
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute.jsx'
import { refreshUser } from '../../redux/auth/operations.js';
import { selectIsRefreshing } from '../../redux/auth/selectors.js';


const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage.jsx'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage.jsx'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage.jsx'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Layout>
      <Toaster />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
      </Routes>
    </Layout>
  )
}

export default App;