import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RTLLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import "assets/css/Plugins.css";


//Old imports

import {
  firebaseListeners,
  userDataListeners,
} from "./firebase/firebase-listeners";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { auth } from "./firebase/firebase";
import NftPage from "views/admin/nfts/page";


const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const {allCircles} = useSelector((state) => state.allCircles)
  const currentUser = auth?.currentUser;


  useEffect(
    () => {
      firebaseListeners(dispatch);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    () => {
      if (currentUser) {
        //userDataListeners(dispatch, user?.uid);
      }
    },
    // eslint-disable-next-line
    [currentUser]
  );

  return (
    <Routes>
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RTLLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/admin/nfts/:circleID"  element={<NftPage/>} />
    </Routes>
  );
};

export default App;
