import axios from "axios";
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./componentes/Loader/Loader";
const Landing = lazy(() => import("./componentes/Landing/Landing"));
const Services = lazy(() => import("./componentes/Services/Services"));
const Login = lazy(() => import("./componentes/Login/Login"));
const Register = lazy(() => import("./componentes/Register/Register"));
const CreateService = lazy(() =>
  import("./componentes/CreateService/CreateService")
);
const Profile = lazy(() => import("./componentes/Profile/Profile"));

axios.defaults.baseURL = import.meta.env.VITE_API || "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createService" element={<CreateService />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
