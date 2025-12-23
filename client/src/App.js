import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("token")
  );

  return (
    <BrowserRouter>
      <Navbar setIsAuth={setIsAuth} isAuth={isAuth} />

      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />

        <Route
          path="/login"
          element={
            !isAuth ? <Login setIsAuth={setIsAuth} /> : <Navigate to="/dashboard" />
          }
        />

        <Route
          path="/register"
          element={
            !isAuth ? <Register /> : <Navigate to="/dashboard" />
          }
        />

        <Route
          path="/dashboard"
          element={
            isAuth ? <Dashboard /> : <Navigate to="/login" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
