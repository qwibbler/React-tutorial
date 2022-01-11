import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import TodoContainer from './components/TodoContainer';
import About from "./pages/About"
import NotMatch from "./pages/NotMatch"

import './App.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<TodoContainer />}/>
      <Route path="/about" element={<About />}/>
      <Route path="*" element={<NotMatch />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
