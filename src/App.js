import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Profile from './components/Profile';
import ProjectDetails from './components/ProjectDetails';
import Login from "./Login";
import Dashboard from "./Dashboard";
import AdminPanel from "./AdminPanel";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/api/auth/check" element={<Dashboard />} />
        <Route path="*" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
    </Router>
  );
};

export default App;
