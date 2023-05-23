import React from "react";
import style from "./NavBar.module.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchName } from "../../redux/actions";

import { CiSearch } from "react-icons/ci";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { CiUser } from "react-icons/ci";

export default function Navbar({ landing, services }) {
  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [nameSearch, setNameSearch] = useState("");
  const [showMenuPhone, setShowMenuPhone] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function dataSearch(e) {
    e.preventDefault();
    dispatch(searchName(nameSearch));
    setNameSearch("");
    setShowMenuPhone(false);
  }

  return (
    <div className={style.contentTotal}>
      <Modal setShow={setShowModal} show={showModal} />
      <div className={style.buttonsMenu}>
        <HiBars3
          size="30"
          className={style.butonMenu}
          style={{
            display: showMenuPhone ? "none" : "flex",
            color: services ? "#000" : "#fff",
          }}
          onClick={() => setShowMenuPhone(true)}
        />

        <HiXMark
          size="30"
          className={style.butonMenu}
          style={{
            display: showMenuPhone ? "flex" : "none",
          }}
          onClick={() => setShowMenuPhone(false)}
        />
      </div>

      {/* ------------------------------------------- */}

      <div className={showMenuPhone ? style.contentVistPhone : style.content}>
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

        {!user.length ? (
          <div className={style.sesionAndPosts}>
            <NavLink to="/login" className={style.sesion}>
              Iniciar sesion
            </NavLink>
            <Link to="/register" className={style.registerButton}>
              Registrarse
            </Link>
          </div>
        ) : (
          <NavLink to="/profile">
            <CiUser size="40" className={style.logoProfile} />
          </NavLink>
        )}
      </div>
    </div>
  );
}
