import React from "react";
import style from "./Landing.module.css";
import NavBar from "../NavBar/NavBar";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Landing() {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className={style.contetAll}>
      <Modal setShow={setShowModal} show={showModal} />
      <NavBar landing={true} />
      <div className={style.backgroundCircleSecundary}></div>
      <div className={style.backgroundCirclePrincipal}></div>
      <section className={style.contentText}>
        <h1>Services</h1>
        <h2>Conectando Personas y Servicios</h2>
        <Link to="/home" className={style.buttonServices}>
          Servicios
        </Link>
      </section>
    </header>
  );
}
