import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Route, Routes } from 'react-router';
import './App.scss';
import socketService from "./services/socketService";

import Header from './components/header';
import DashboardPage from './pages/dashboard';
import GamePage from './pages/game';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import MarketPage from './pages/market';

function App() {

  
  // 싱글턴으로 소켓을 연결시키기 때문에 프로그램 종료시점이까지 socket은 사라지지 않음.
  const connectSocket = async () => {
    const socket = await socketService.connect("http://localhost:9000").catch((err) => {
      console.log("Error: ", err);
    });
  }
  useEffect(() => {
    connectSocket();
  }, []);

  

  //////////////////////////////////////////////////////////
  //   // 마운트 시점에 game으로 이동. 테스트용
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate('/game');
  // }, []);
  //////////////////////////////////////////////////////////

  return (
      <div className="App">
        <div className="appContainer">
          <Header />
          <div className="mainContainer" >
            <Routes>
              <Route path='/' element={<HomePage/>}/>  
              <Route path='/game' element={<GamePage/>}/>  
              <Route path='/market' element={<MarketPage/>}/>  
              <Route path='/dashboard' element={<DashboardPage/>}/>  
              <Route path='/login' element={<LoginPage/>}/>  
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
