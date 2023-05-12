import React from "react";
import style from "./Modal.module.css";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";

export default function Modal({ setShow, show }) {
  return (
    <div
      className={style.contentAll}
      style={{ display: show ? "flex" : "none" }}
    >
      <div className={style.toaster}>
        <button onClick={() => setShow(false)}>
          <IoClose size="25" color="#999" />
        </button>
        <h5>Debes Iniciar sesion o registrarte para publicar servicios</h5>
        <div className={style.contentButtons}>
          <Link to="/login" className={style.buttonLogin}>
            Iniciar sesion
          </Link>
          <Link to="/register" className={style.buttonRegister}>
            Registrarme
          </Link>
        </div>
      </div>
    </div>
  );
}
