// import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/AppBar/Layout/Layout'
import BalancePage from './pages/BalancePage/BalancePage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchUserApi } from './redux/users/operations';
import { selectLoading, selectError } from './redux/users/selectors';

function App() {

  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);
  // const isError = useSelector(selectError);
  // useEffect(()=> {
  //   dispatch(fetchUserApi(23456));
  // }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='balance' element={<BalancePage />} />
      </Route>
    </Routes>
  );
}

export default App
