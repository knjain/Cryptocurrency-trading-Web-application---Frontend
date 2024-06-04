import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
// import jwt from 'jsonwebtoken';

const PrivateRoutes = () => {
  const user_data = localStorage.getItem('user_data');

  const auth = user_data ? JSON.parse(user_data).token : null;

  // const isTokenExpired = (token) => {
  //   try {
  //     const decoded = jwt.decode(token);
  //     if (decoded.exp < Date.now() / 1000) {
  //       return true; 
  //     }
  //     return false;
  //   } catch (error) {
  //     return true; 
  //   }
  // };

  // useEffect(() => {
  //   if (auth && isTokenExpired(auth)) {
  //     localStorage.removeItem('user_data');
  //   }
  // }, [auth]);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
