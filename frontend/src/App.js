import logo from './logo.svg';
import './App.css';

//Router
import {BrowserRouter, Routes, Route, Navigate} from  'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/Register' element={<Register />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
