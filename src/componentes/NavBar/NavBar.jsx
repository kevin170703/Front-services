import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./NavBar.module.css";
import { CiSearch } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { searchName } from "../../redux/actions";
import { useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";
import logoServices from "../../assets/LogoServices.png";
import Modal from "../Modal/Modal";

export default function Navbar({ landing, services }) {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navegation = useNavigate();
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
            <img src={logoServices} alt="" />
            Services
          </NavLink>
          <NavLink
            className={style.publishServices}
            onClick={() => setShowModal(true)}
          >
            Publicar servicios
          </NavLink>
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
            <NavLink
              to="/login"
              className={style.sesion}
              style={services ? { color: "#000" } : { color: "#fff" }}
            >
              Iniciar sesion
            </NavLink>
          ) : (
            <NavLink to="/profile">
              <IoPersonOutline
                size="30"
                className={style.logoProfile}
                style={services ? { color: "#000" } : { color: "#fff" }}
              />
            </NavLink>
          )}
          {!user.length && (
            <button
              // to="/createPublic"
              className={style.registerButton}
              style={
                services
                  ? { color: "#9329d0", borderColor: "#9329d0" }
                  : { color: "#fff" }
              }
            >
              Registrarse
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
