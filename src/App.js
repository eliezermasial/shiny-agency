
import {Routes, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/';
import Survey from './pages/Survey';
import Header from './components/Header';

function App() {
  return (
      <Routes>
        <Route path="/" element={<> <Header /> <Home /> </>} />
        <Route path="/survey/:questNbr" element={<> <Header />  <Survey /> </>} />
      </Routes>
  );
}

export default App;
