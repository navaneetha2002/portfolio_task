import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/auth/check", {
        withCredentials: true, // Ensures cookies are sent if authentication is session-based
      })
      .then((response) => {
        if (response.data.authenticated) {
          navigate("/dashboard");
        } else {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error("Authentication check failed:", error);
        navigate("/login");
      });
  }, [navigate]);

  const handleLogout = () => {
    axios
      .post("http://localhost:8080/api/auth/logout", {}, { withCredentials: true })
      .then(() => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("username");
        navigate("/login");
      })
      .catch((error) => console.error("Logout failed:", error));
  };

  return (
    <div>
      <h2>Welcome to the Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
