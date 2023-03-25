import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import SignUp from "views/auth/SignUp";
import ForgetPassword from "views/auth/ForgetPassword";
const App = () => {
  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      {/* <Route path="auth/sign-up" element={<SignUp />} />
      <Route path="auth/forget-password" element={<ForgetPassword />} /> */}
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;
