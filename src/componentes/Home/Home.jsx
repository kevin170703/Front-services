import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../redux/actions";
import { useEffect } from "react";
import CardServices from "../CardServices/CardServices";
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import DetailService from "../DetailService/DetailService";
import { CiCircleAlert } from "react-icons/ci";

export default function Home() {
  const distpach = useDispatch();
  let services = useSelector((state) => state.posts);
  const [detailService, setDetailService] = useState();

  useEffect(() => {
    distpach(getServices());
  }, [distpach]);

  return (
    <div className={style.contentAll}>
      <NavBar services={true} />
      <div className={style.backgroundCirclePrimary}></div>
      <div className={style.backgroundCircleSecundary}></div>
      <div className={style.content}>
        <div className={style.contentPosts}>
          {!services.length ? (
            <div className={style.contentMessageNotServices}>
              <h1>Aún no se publicaron servicios en la plataforma.</h1>
              <CiCircleAlert className={style.logoInterrogation} size="120" />
            </div>
          ) : (
            <div>
              <div className={style.filters}>
                <select>
                  <option value="">Ubicacion</option>
                </select>
                <select>
                  <option value="">Tipo</option>
                </select>
              </div>

              {services.map((element, index) => (
                <div onClick={() => setDetailService(element)}>
                  <CardServices
                    title={element.title}
                    servicesFor={element.nameUser}
                    location={element.location}
                    price={element.rangePrice}
                    contact={element.phoneNumber}
                    type={"general"}
                    key={index}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        {detailService && (
          <DetailService
            title={detailService.title}
            servicesFor={detailService.nameUser}
            location={detailService.location}
            price={detailService.rangePrice}
            contact={detailService.phoneNumber}
            type={"general"}
          />
        )}
      </div>
    </div>
  );
}
