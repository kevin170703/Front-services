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
      <div className={style.content}>
        <div className={style.contentText}>
          <h1>
            <span>services</span> para encontrar y publicar
          </h1>
          <h5>Servicios</h5>
        </div>
        <div>
          <Link to="/home" className={style.buttonServices}>
            Servicios
          </Link>
          <button
            onClick={() => setShowModal(true)}
            className={style.buttonNewService}
          >
            Publicar
          </button>
        </div>
      </div>
    </div>
  );
}
