import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", { name, email, password });
      navigate("/login");
    } catch (err) {
        console.error(err.response?.data || err.message);
        alert(err.response?.data?.message || "Registration failed");
      }

  };

  return (
  <div className="container">
    <h2>Register</h2>
    <form onSubmit={handleRegister}>
      <input placeholder="Name" value={name}
        onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  </div>
);

};


export default Register;
