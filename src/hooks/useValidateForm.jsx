import { useRef } from "react";
import { useState } from "react";

export function useValidateErrors() {
  const [errors, setErrors] = useState({ exist: true });
  const isFirstInputName = useRef(true);
  const isFirstInputLastName = useRef(true);
  const isFirstInputEmail = useRef(true);
  const isFirstInputPassword = useRef(true);

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

  return { validateErrors, errors };
}
