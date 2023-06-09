import React from "react";
import style from "./DetailService.module.css";
import { CiLocationOn, CiUser, CiBadgeDollar } from "react-icons/ci";

export default function DetailService({
  title,
  servicesFor,
  location,
  contact,
  price,
  details,
}) {
  return (
    <div className={style.contentAll}>
      <h5>{title}</h5>

      <div className={style.location}>
        <CiLocationOn size="30" />
        <p>
          {location.country}, {location.state}, {location.city}
        </p>
      </div>

      <div className={style.contentInfoUser}>
        <div className={style.contentPriceUserHour}>
          <CiUser size="30" />
          <p>{servicesFor}</p>
        </div>

        <div className={style.contentPriceUserHour}>
          <CiBadgeDollar size="30" />
          <p>{price}</p>
        </div>
      </div>
      <p className={style.detailText}>{details}</p>
      <a
        href={`https://wa.me/${contact}`}
        target="_blank"
        className={style.buttonContanct}
      >
        Contactar
      </a>
    </div>
  );
}
