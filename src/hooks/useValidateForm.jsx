import { useRef } from "react";
import { useState } from "react";

export function useValidateErrors() {
  const [errors, setErrors] = useState({ exist: true });
  const isFirstInputName = useRef(true);
  const isFirstInputLastName = useRef(true);
  const isFirstInputEmail = useRef(true);
  const isFirstInputPassword = useRef(true);

  const isFirstInputTitle = useRef(true);
  const isFirstInputRangePrice = useRef(true);
  const isFirstInputCodePhoneNumber = useRef(true);
  const isFirstInputPhoneNumber = useRef(true);
  const isFirstInputDetailService = useRef(true);

  function validateErrors(dataUser) {
    let errors = {};
    const { name, lastName, email, location, password } = dataUser;

    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const userNameRegex = /^[a-zA-Z]+$/;
    const passwordRegex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

    if (isFirstInputName.current) {
      errors.exist = true;
      isFirstInputName.current = name === "";
    } else if (!name) {
      errors.name = "Debe ingresar un nombre ";
    } else if (!userNameRegex.test(name)) {
      errors.name = "Solo pude contener letras";
    }

    if (isFirstInputLastName.current) {
      errors.exist = true;
      isFirstInputLastName.current = lastName === "";
    } else if (!lastName) {
      errors.lastName = "Debe ingresar un nombre ";
    } else if (!userNameRegex.test(lastName)) {
      errors.lastName = "Solo pude contener letras";
    }

    if (isFirstInputEmail.current) {
      errors.exist = true;
      isFirstInputEmail.current = email === "";
    } else if (!email) {
      errors.email = "Debe ingresar su correo";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email invalido";
    }

    if (!location) {
      errors.exist = true;
    }

    if (isFirstInputPassword.current) {
      errors.exist = true;
      isFirstInputPassword.current = password === "";
    } else if (!password) {
      errors.password = "Debe ingresar una contraseña";
    } else if (!passwordRegex.test(password)) {
      errors.password = (
        <p>
          Minimo 8 caracteres Maximo 15 - Al menos una letra mayúscula <br />
          Al menos una letra minucula - No espacios en blanco
        </p>
      );
    }
    setErrors({ ...errors, exist: Object.keys(errors).length > 0 });
  }

  function validateErrosNewService(dataServices) {
    let errors = {};
    const {
      title,
      rangePriceOne,
      rangePriceTwo,
      codePhoneNumber,
      phoneNumber,
      detailsService,
      location,
    } = dataServices;

    if (isFirstInputTitle.current) {
      errors.exist = true;
      isFirstInputTitle.current = title === "";
    } else if (title === "") {
      errors.title = "Debes ingresar el titulo de tu publicacion";
    } else if (title.length > 25) {
      errors.title = "Maximo 26 caracteres";
    } else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(title)) {
      errors.title = "Ingrese un titulo valido";
    }

    if (isFirstInputRangePrice.current) {
      errors.exist = true;
      isFirstInputRangePrice.current =
        rangePriceOne === "" && rangePriceTwo === "";
    } else if (!rangePriceOne || !rangePriceTwo)
      errors.rangePrice = "Debes ingresar el rago de precios";
    else if (isNaN(rangePriceOne) || isNaN(rangePriceTwo))
      errors.rangePrice = "Solo se permiten numeros";

    if (isFirstInputPhoneNumber.current) {
      errors.exist = true;
      isFirstInputPhoneNumber.current = phoneNumber === "";
    } else if (!phoneNumber)
      errors.phoneNumber = "Debes ingresar tu numero de telefono";
    else if (!codePhoneNumber)
      errors.phoneNumber = "Debes ingresar el codigo de su pais";
    else if (isNaN(phoneNumber))
      errors.phoneNumber = "Solo se permiten numeros";
    else if (phoneNumber.length < 9)
      errors.phoneNumber = "Debe ingresar un numero correcto";

    if (!location.country || !location.state || !location.city) {
      errors.exist = true;
    }

    if (isFirstInputDetailService.current) {
      errors.exist = true;
      isFirstInputDetailService.current = detailsService === "";
    } else if (!detailsService)
      errors.detailsService = "Ingrese los detalles del servicio";
    else if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(detailsService))
      errors.detailsService = "Solo se permite texto";

    setErrors({ ...errors, exist: Object.keys(errors).length > 0 });
  }

  return { validateErrors, validateErrosNewService, errors };
}
