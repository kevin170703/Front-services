import React from "react";
import style from "./Register.module.css";
import fondo from "../../assets/undraw_text_field_htlv.svg";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { createAccount } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { BiLeftArrowAlt } from "react-icons/bi";
import { useValidateErrors } from "../../assets/hooks/useValidateForm";
import Swal from "sweetalert2";

export default function Register() {
  const dispatch = useDispatch();
  const { validateErrors, errors } = useValidateErrors();
  const [dataRegister, setDataRegister] = useState({
    name: "",
    lastName: "",
    password: "",
    email: "",
    location: "",
  });

  function handelLoginData(e) {
    e.preventDefault();
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
    validateErrors({ ...dataRegister, [e.target.name]: e.target.value });
  }

  function sendDataUser(e) {
    e.preventDefault();
    dispatch(createAccount(dataRegister));
    setDataRegister({
      name: "",
      lastName: "",
      password: "",
      phoneNumber: "",
      location: "",
    });
  }

  return (
    <div className={style.contentAll}>
      <NavLink to="/">
        <BiLeftArrowAlt size="40" className={style.back} />
      </NavLink>
      <div className={style.backgroundCircle}>
        <h2>Services</h2>
        <p>Conectando Personas y Servicios</p>
      </div>
      <div className={style.content}>
        <form className={style.inputs} onSubmit={(e) => sendDataUser(e)}>
          <h1>Registrate</h1>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={dataRegister.name}
              onChange={(e) => handelLoginData(e)}
            />
            {errors.name && <p className={style.errors}>{errors.name}</p>}
          </div>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="lastName"
              placeholder="Apellido"
              value={dataRegister.lastName}
              onChange={(e) => handelLoginData(e)}
            />
            {errors.lastName && (
              <p className={style.errors}>{errors.lastName}</p>
            )}
          </div>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="email"
              placeholder="Correo electrinico"
              value={dataRegister.email}
              onChange={(e) => handelLoginData(e)}
            />
            {errors.email && <p className={style.errors}>{errors.email}</p>}
          </div>
          <div className={style.contentInputs}>
            <input
              type="text"
              name="location"
              placeholder="Ubicacion"
              value={dataRegister.location}
              onChange={(e) => handelLoginData(e)}
            />
            {errors.location && (
              <p className={style.errors}>{errors.location}</p>
            )}
          </div>
          <div className={style.contentInputPassword}>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={dataRegister.password}
              onChange={(e) => handelLoginData(e)}
            />
            {errors.password && (
              <p className={style.errors}>{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className={style.buttonCreateAccount}
            disabled={errors.exist}
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}
