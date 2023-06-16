import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Routes>

        </div>
      </Router>
    </>
  );
}

export default App;
