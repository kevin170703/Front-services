import { useState } from "react";
import { useDispatch } from "react-redux";
import { filtersCountry } from "../redux/actions";

export default function useFilters() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    country: "",
  });

  function applyFilters(e) {
    e.preventDefault();
    dispatch(filtersCountry(filters.country));
  }
  return { applyFilters, filters, setFilters };
}
