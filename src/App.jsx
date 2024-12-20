// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BalancePage from "./pages/BalancePage/BalancePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserApi } from "./redux/users/operations";
// import { selectLoading, selectError } from './redux/users/selectors';
import DailyPage from "./pages/DailyPage/DailyPage";
import PoolsPage from "./pages/PoolsPage/PoolsPage";
import InvitePage from "./pages/InvitePage/InvitePage";
import RefLinkWrap from "./components/refLinkWrap/refLinkWrap";
import TasksPage from "./pages/TasksPage/TasksPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserApi(23456));
    // dispatch(fetchDailyWeBalanceApi(23456));
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="balance" element={<BalancePage />} />
          <Route path="daily" element={<DailyPage />} />
          <Route path="pools" element={<PoolsPage />} />
          <Route path="invite" element={<InvitePage />} />
          <Route path="tasks" element={<TasksPage />} />
        </Route>
      </Routes>
      <RefLinkWrap />
    </>
  );
}

export default App;
