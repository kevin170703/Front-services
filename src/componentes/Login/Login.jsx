import React from "react";
import style from "./Login.module.css";
import { NavLink } from "react-router-dom";
import { login } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import Swal from "sweetalert2";

export default function Login() {
  const distpach = useDispatch();
  const [loginData, setLoginData] = useState({ password: "", email: "" });

  function handelLoginData(e) {
    e.preventDefault();
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  async function handelLoginSend(e) {
    e.preventDefault();
    const response = await distpach(login(loginData));
    if (!response.payload) {
      Swal.fire({
        icon: response.type,
        title: response.msj,
        width: "600",
        confirmButtonColor: "#ff4081",
      });
      return setLoginData({ password: "", email: "" });
    }
    Swal.fire({
      icon: "success",
      title: "Iniciaste sesión correctamente",
      showConfirmButton: false,
      width: "600",
    });
    setTimeout(function () {
      window.location.href = "/";
    }, 2000);
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
              name="email"
              placeholder="Email"
              value={loginData.email}
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
