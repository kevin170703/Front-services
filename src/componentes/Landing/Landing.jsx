import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import style from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={style.contetAll}>
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
          <Link to="/createPublication" className={style.buttonPosts}>
            Publicar
          </Link>
        </div>

        {/* <div className={style.contentImg}>
          <img src={fondo} alt="" />
        </div>
        <div className={style.wave}></div> */}
      </div>
    </div>
  );
}
