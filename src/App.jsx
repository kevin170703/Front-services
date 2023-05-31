import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
const Landing = lazy(() => import("./componentes/Landing/Landing"));
const Home = lazy(() => import("./componentes/Home/Home"));
const Login = lazy(() => import("./componentes/Login/Login"));
const Register = lazy(() => import("./componentes/Register/Register"));
const CreatePublic = lazy(() =>
  import("./componentes/CreatePublic/CreatePublic")
);
const Profile = lazy(() => import("./componentes/Profile/Profile"));

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Cargando</div>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createPublication" element={<CreatePublic />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
