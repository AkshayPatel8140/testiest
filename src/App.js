import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LogIn } from '../src/pages/Login.tsx';
import { Dashboard } from '../src/pages/Dashboard.tsx';
import { Header } from './components/Header.tsx';
import { SignUp } from '../src/pages/Signup.tsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
