import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RecuperarCuenta from "./pages/RecuperarCuenta";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          {/* Define your routes here */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element ={<Register />} />
          <Route path="/recuperar-cuenta" element={<RecuperarCuenta />} />
          {/* Add more routes as needed */}
          {/* Default route */}
          <Route index path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
