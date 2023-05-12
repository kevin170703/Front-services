import React from "react";
import style from "./CardServices.module.css";
import { FaMoneyBillWave } from "react-icons/fa";
import { delatePost } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function CardServices({
  title,
  servicesFor,
  location,
  contact,
  price,
  id,
  delate,
  type,
}) {
  const dispatch = useDispatch();
  const typeColor = {
    insideHome: "#029CF5",
    outsideHome: "#4FC45D",
    general: "#E47E5E",
  };

  function handelDelatePost() {
    dispatch(delatePost({ idPost: id }));
    setTimeout(function () {
      window.location.reload(true);
    }, 1200);
  }
  return (
    <div className={style.content}>
      <div
        className={style.typeColor}
        style={{ background: typeColor[type] }}
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
