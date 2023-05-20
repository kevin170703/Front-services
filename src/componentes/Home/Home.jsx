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

export default function Home() {
  const distpach = useDispatch();
  let services = useSelector((state) => state.posts);
  const [detailService, setDetailService] = useState();
  const [loader, setLoader] = useState(true);
  const [filters, setFilters] = useState({
    country: "",
  });

  function sendFilters(e) {
    e.preventDefault();
    services = services.filter(
      (service) => service.location.country === filters.country
    );
  }

  useEffect(() => {
    setLoader(true);
    distpach(getServices()).then(() => setLoader(false));
  }, [distpach]);

  if (loader) return <div className={style.loader}></div>;

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
              <form className={style.filters} onSubmit={(e) => sendFilters(e)}>
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
