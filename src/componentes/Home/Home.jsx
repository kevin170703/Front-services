import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../redux/actions";
import { useEffect } from "react";
import CardServices from "../CardServices/CardServices";
import style from "./Home.module.css";
import NavBar from "../NavBar/NavBar";
import DetailService from "../DetailService/DetailService";
import { CiCircleAlert } from "react-icons/ci";
import countries from "../../assets/countries.json";
import useFilters from "../../hooks/useFilters";

export default function Home() {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.posts);
  const [detailService, setDetailService] = useState();
  const { applyFilters, filters, setFilters } = useFilters();
  const [loader, setLoader] = useState(true);
  const renderDetail = detailService || services[0];

  useEffect(() => {
    setLoader(true);
    dispatch(getServices()).then(() => setLoader(false));
  }, [dispatch]);

  useEffect(() => {
    setDetailService(null);
  }, [services]);

  if (loader)
    return (
      <div className={style.contentLoader}>
        <div className={style.loader}></div>
      </div>
    );

  return (
    <div className={style.contentAll}>
      <NavBar services={true} />
      <div className={style.backgroundCirclePrimary}></div>
      <div className={style.backgroundCircleSecundary}></div>
      <div className={style.content}>
        <div className={style.contentPosts}>
          {!services.length ? (
            <div className={style.contentMessageNotServices}>
              <h1>No se encontraron servicios.</h1>
              <CiCircleAlert className={style.logoInterrogation} size="120" />
            </div>
          ) : (
            <div>
              <form className={style.filters} onSubmit={(e) => applyFilters(e)}>
                <input
                  type="search"
                  list="listCounties"
                  placeholder="Pais"
                  value={filters.country}
                  onChange={(e) => setFilters({ country: e.target.value })}
                />

                <datalist id="listCounties">
                  {countries.map((country) => (
                    <option value={country.name} key={country.id}>
                      {country.name}
                    </option>
                  ))}
                </datalist>
                <button type="submit">Aplicar</button>
              </form>
              <div className={style.contentServices}>
                {services.map((element, index) => (
                  <div onClick={() => setDetailService(element)} key={index}>
                    <CardServices
                      title={element.title}
                      servicesFor={element.nameUser}
                      location={element.location.country}
                      price={element.rangePrice}
                      contact={element.phoneNumber}
                      key={index}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className={style.contentDetailService}>
          {renderDetail && (
            <DetailService
              title={renderDetail.title}
              servicesFor={renderDetail.nameUser}
              location={renderDetail.location}
              price={renderDetail.rangePrice}
              contact={renderDetail.phoneNumber}
              details={renderDetail.detail}
            />
          )}
        </div>
      </div>
    </div>
  );
}
