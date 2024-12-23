// import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
// import BalancePage from "./pages/BalancePage/BalancePage";
import { useDispatch, useSelector } from "react-redux";
import { lazy, Suspense, useEffect } from "react";
import { fetchUserApi } from "./redux/users/operations";
// import { selectLoading, selectError } from './redux/users/selectors';
// import DailyPage from "./pages/DailyPage/DailyPage";
// import PoolsPage from "./pages/PoolsPage/PoolsPage";
// import InvitePage from "./pages/InvitePage/InvitePage";
import RefLinkWrap from "./components/refLinkWrap/refLinkWrap";
// import TasksPage from "./pages/TasksPage/TasksPage";
import Inviter from "./components/Inviter/Inviter";
import { selectMenuToggle } from "./redux/users/selectors";
import { PrivateRoute } from "./components/PrivateRoute";
import Loader from "./components/Loader/Loader";
// import LoginPage from "./pages/LoginPage/LoginPage";
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const BalancePage = lazy(() => import("./pages/BalancePage/BalancePage"));
const DailyPage = lazy(() => import("./pages/DailyPage/DailyPage"));
const PoolsPage = lazy(() => import("./pages/PoolsPage/PoolsPage"));
const InvitePage = lazy(() => import("./pages/InvitePage/InvitePage"));
const TasksPage = lazy(() => import("./pages/TasksPage/TasksPage"));

function App() {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector(selectMenuToggle);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchUserApi(23456));
    // dispatch(fetchDailyWeBalanceApi(23456));
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="balance"
            element={
              <PrivateRoute component={<BalancePage />} redirectTo="/login" />
            }
          />
          <Route
            path="daily"
            element={
              <PrivateRoute component={<DailyPage />} redirectTo="/login" />
            }
          />
          <Route
            path="pools"
            element={
              <PrivateRoute component={<PoolsPage />} redirectTo="/login" />
            }
          />
          <Route
            path="invite"
            element={
              <PrivateRoute component={<InvitePage />} redirectTo="/login" />
            }
          />
          <Route
            path="tasks"
            element={
              <PrivateRoute component={<TasksPage />} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
      {location.pathname === "/invite" && <RefLinkWrap />}
      {menuIsOpen && <Inviter />}
    </Suspense>
  );
}

export default App;
