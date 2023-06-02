import React from "react";
import style from "./Filters.module.css";
import useFilters from "../../hooks/useFilters";
import countries from "../../assets/countries.json";

export default function Filters() {
  const { applyFilters, filters, setFilters } = useFilters();
  return (
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
      <button type="submit" className={style.buttonSubmit}>
        Aplicar
      </button>
      <button
        className={style.buttonUndo}
        onClick={() => setFilters({ country: "" })}
      >
        deshacer
      </button>
    </form>
  );
}
