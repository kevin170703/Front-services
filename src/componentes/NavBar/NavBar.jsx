import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { searchName } from "../../redux/actions";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Modal from "../Modal/Modal";
import { CiUser } from "react-icons/ci";

export default function Navbar({ landing, services }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [nameSearch, setNameSearch] = useState("");
  const [phoneVist, setPhoneVist] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function dataSearch(e) {
    e.preventDefault();
    dispatch(searchName(nameSearch));
    setNameSearch("");
    setPhoneVist(false);
  }

  return (
    <div className={style.contentTotal}>
      <Modal setShow={setShowModal} show={showModal} />
      <div className={style.buttons}>
        <HiBars3
          size="30"
          className={phoneVist === true ? style.butonMenuNone : style.butonMenu}
          onClick={() => setPhoneVist(true)}
        />

        <HiXMark
          size="30"
          className={
            phoneVist === false ? style.butonMenuNone : style.butonMenu
          }
          onClick={() => setPhoneVist(false)}
        />
      </div>
      <div className={style.navegationSec}>
        <NavLink
          to="/"
          className={landing === true ? style.border : style.inicio}
        >
          inicio
        </NavLink>
        <NavLink
          to="/home"
          className={services === true ? style.border : style.service}
        >
          Buscar servicios
        </NavLink>
      </div>

      {/* ------------------------------------------- */}

      <div className={phoneVist === true ? style.contentNone : style.content}>
        <div className={style.navegation}>
          <NavLink to="/" className={style.inicio}>
            Services
          </NavLink>
          {!user.length ? (
            <NavLink
              className={style.publishServices}
              onClick={() => setShowModal(true)}
            >
              Publicar servicios
            </NavLink>
          ) : (
            <NavLink className={style.publishServices} to="/createPublication">
              Publicar servicios
            </NavLink>
          )}
        </div>
        {services && (
          <form className={style.form} onSubmit={(e) => dataSearch(e)}>
            <input
              type="text"
              placeholder="Carpintero, Plomero..."
              value={nameSearch}
              onChange={(e) => setNameSearch(e.target.value)}
            />
            <button type="submit">{<CiSearch size="30" />}</button>
          </form>
        )}

        <div className={style.sesionAndPosts}>
          {user[0]?.msj || !user.length ? (
            <NavLink to="/login" className={style.sesion}>
              Iniciar sesion
            </NavLink>
          ) : (
            <NavLink to="/profile">
              <CiUser size="35" className={style.logoProfile} />
            </NavLink>
          )}
          {!user.length && (
            <Link to="/register" className={style.registerButton}>
              Registrarse
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
