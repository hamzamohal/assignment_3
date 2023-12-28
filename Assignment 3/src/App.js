import React, { useState } from 'react';
import './App.scss';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './Pages/Calculator/Calculator';
import calculate from './Utils/calculate';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Quotes from './Pages/Quotes/Quotes';

const App = () => {
  const [params, setParams] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (item) => {
    setParams((prevState) => calculate(prevState, item));
    if (params.total && item === '.') {
      setParams((prevState) => ({ ...prevState, total: null }));
    }
  };

  const { total, next, operation } = params;
  const screenText = `${total ?? ''} ${operation ?? ''} ${next ?? ''}`;
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/calculator" element={<Calculator screenText={screenText} calculate={(item) => handleClick(item)} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
