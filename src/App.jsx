import Home from "./componentes/Home/Home";
import { Routes, Route } from "react-router-dom";
import Landing from "./componentes/Landing/Landing";
import Login from "./componentes/Login/Login";
import Register from "./componentes/Register/Register";
import CreatePublic from "./componentes/CreatePublic/CreatePublic";
import Profile from "./componentes/Profile/Profile";
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createPublication" element={<CreatePublic />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
