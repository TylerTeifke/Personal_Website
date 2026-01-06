import Home from './pages/Home'
import Personal from './pages/Personal';
import University from './pages/University';
import About from './pages/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Personal" element={<Personal/>}/>
          <Route path="/University" element={<University/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
