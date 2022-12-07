import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Details } from './components/Details/Details';

export function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Details />
    </div>
  );
}
