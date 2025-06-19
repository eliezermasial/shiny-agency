import {Routes, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/';
//import Survey from './pages/Survey';
import Results from './pages/Results';
import Error from './components/Error';
import Header from './components/Header';
import Freelances from './pages/Freelances';
import Quiz from './pages/Quiz/';

function App() {
  return (
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/logo" />
        <Route path="/" element={<> <Header /> <Home /> </>} />
        <Route path="/results" element={<> <Header /> <Results /> </>} />
        <Route path="/quiz" element={<> <Header /> <Quiz /> </>} />
        <Route path="/freelances" element={<> <Header />  <Freelances /> </>} />
      </Routes>
  );
}

export default App;
