import React from "react";
import style from "./Login.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";

export default function Login() {
  const user = useSelector((state) => state.user);
  const distpach = useDispatch();
  const [loginData, setLoginData] = useState({ password: "", phoneNumber: "" });

  function handelLoginData(e) {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handelLoginSend(e) {
    e.preventDefault();
    distpach(login(loginData));
    setLoginData({ password: "", phoneNumber: "" });
  }

  return (
    <div className={style.contentAll}>
      <NavLink to="/">
        <CiCircleChevLeft size="40" className={style.back} />
      </NavLink>
      <div className={style.backgroundCircle}>
        <h2>Services</h2>
        <p>Conectando Personas y Servicios</p>
      </div>
      <div className={style.content}>
        <form className={style.inputs} onSubmit={(e) => handelLoginSend(e)}>
          <h1>Iniciar sesion</h1>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Numero de telefono"
              value={loginData.phoneNumber}
              onChange={(e) => handelLoginData(e)}
            />
          </div>
          <div className={style.contentInputs}>
            <input
              type="password"
              name="password"
              placeholder="Constraseña"
              value={loginData.password}
              onChange={(e) => handelLoginData(e)}
            />
          </div>
          <button type="submit" className={style.iniciar}>
            iniciar sesion
          </button>
          <p>
            ¿No tenes cuenta?{" "}
            {
              <NavLink to="/register" className={style.createAccount}>
                Crear cuenta
              </NavLink>
            }
          </p>
        </form>
      </div>
    </div>
  );
}
