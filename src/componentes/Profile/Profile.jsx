import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Profile.module.css";
import { logOut, getServices, editUser } from "../../redux/actions";
import { useNavigate, NavLink } from "react-router-dom";
import CardServices from "../CardServices/CardServices";
import { useEffect } from "react";
import { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";

import { CiLocationOn, CiMail, CiUser } from "react-icons/ci";

export default function Profile() {
  const user = useSelector((state) => state.user);
  let posts = useSelector((state) => state.posts);
  const usersPosts = !posts.length
    ? 0
    : posts.filter((element) => element.idUser === user[0].id);

  const dispatch = useDispatch();
  const navegate = useNavigate();
  const [dataEditUser, setDataEditUser] = useState({
    newName: "",
    newLastname: "",
    idUser: user[0]?.id,
  });

  function handelLogOut() {
    dispatch(logOut());
    navegate("/");
  }

  function handelStateData(e) {
    e.preventDefault();
    setDataEditUser({ ...dataEditUser, [e.target.name]: e.target.value });
  }

  function handelEditProfile(e) {
    e.preventDefault();
    dispatch(editUser(dataEditUser));
  }

  useEffect(() => {
    dispatch(getServices());
  }, [dispatch]);

  return (
    <div className={style.contentAll}>
      <div className={style.backgroundCircle}></div>
      <NavLink to="/">
        <CiCircleChevLeft size="40" className={style.back} />
      </NavLink>
      <div>
        <div className={style.contentInfo}>
          <div className={style.contentProfileInfo}>
            <CiUser size="30" className={style.imageProfile} />
            <div className={style.contentInfoProfile}>
              <div className={style.contentUserName}>
                <h5
                  className={style.nameUser}
                >{`${user[0].name} ${user[0].lastName}`}</h5>
              </div>

              <div className={style.dataUser}>
                <CiMail size="30" />
                <span className={style.data}>{user[0].email}</span>
              </div>
              <div className={style.dataUser}>
                <CiLocationOn size="30" />
                <span className={style.data}>{user[0].location}</span>
              </div>
            </div>

            <button onClick={() => handelLogOut()} className={style.logOut}>
              Cerrar sesion
            </button>
          </div>

          <div
            className={
              !usersPosts.length
                ? style.contentPublicsNone
                : style.contentPublics
            }
          >
            <h6>Tus pulicaciones</h6>
            {!usersPosts.length ? (
              <h4>Aún no has publicando un servicio.</h4>
            ) : (
              usersPosts.map((element, index) => {
                return (
                  <CardServices
                    title={element.title}
                    servicesFor={element.nameUser}
                    location={element.location.country}
                    price={element.rangePrice}
                    contact={element.phoneNumber}
                    id={element.id}
                    key={index}
                    delate={true}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
