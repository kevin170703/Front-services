import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import style from "./Landing.module.css";
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import { useState } from "react";

export default function Landing() {
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={style.contetAll}>
      <Modal setShow={setShowModal} show={showModal} />
      <NavBar landing={true} />
      <div className={style.backgroundCircleSecundary}></div>
      <div className={style.backgroundCirclePrincipal}></div>
      <div className={style.content}>
        <div className={style.contentText}>
          <h1>Services</h1>
          <h5>Conectando Personas y Servicios</h5>
          <Link to="/home" className={style.buttonServices}>
            Servicios
          </Link>
        </div>
      </div>
    </div>
  );
}
