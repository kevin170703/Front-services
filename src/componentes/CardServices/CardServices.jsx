import React from "react";
import style from "./CardServices.module.css";
import { FaMoneyBillWave } from "react-icons/fa";
import { delatePost } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function CardServices({
  title,
  servicesFor,
  location,
  contact,
  price,
  id,
  delate,
}) {
  const dispatch = useDispatch();
  const typeColor = {
    0: "#029CF5",
    1: "#4FC45D",
    2: "#E47E5E",
  };

  function handelDelatePost() {
    dispatch(delatePost({ idPost: id }));
    Swal.fire({
      icon: "success",
      title: "Publicacion eliminada correctamente",
      showConfirmButton: false,
      width: "600",
    });
    setTimeout(function () {
      window.location.reload(true);
    }, 1200);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return (
    <div className={style.content}>
      <div
        className={style.typeColor}
        style={{ background: typeColor[getRandomInt(3)] }}
      ></div>
      <div className={style.contentInfo}>
        <h5 className={style.title}>{title}</h5>
        <p>
          <b>Por </b>
          {servicesFor}
          <b> en </b>
          {location}
        </p>
      </div>
      <div className={style.contentContacts}>
        <p className={style.price}>${price}</p>
        {!delate ? (
          <a
            href={`https://wa.me/${contact}`}
            target="_blank"
            className={style.contanct}
          >
            Contactar
          </a>
        ) : (
          <button className={style.delate} onClick={() => handelDelatePost()}>
            Eliminar
          </button>
        )}
      </div>
    </div>
  );
}
