import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    // If user is already logged in, redirect to admin page
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/admin");
    }
  }, [navigate]);





  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('Login form submitted');
    setLoading(true);

    const authHeader = "Basic " + btoa(username + ":" + password);
    console.log("Sending login request with data:", { username, password });
    console.log("Requesting login with the following headers:");
    console.log("Authorization:", authHeader);

    try {
      const response = await axios.post("http://localhost:8080/login", 
        { username, password }, 
        {
          auth: {
            username: username,
            password: password
        },
          withCredentials: true 
        }
      );

      if (response.status === 200) {
        localStorage.setItem("isLoggedIn", "true");
        //localStorage.setItem("username", username);
        navigate("/admin");
      } else {
        alert("Invalid credentials!");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed! Check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (

    
    <div className="login-form">

      <h2>Login</h2>
      <form onSubmit={handleLogin} className="login-container">
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
