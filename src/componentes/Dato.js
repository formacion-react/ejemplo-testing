import { useContext } from "react";
import { DatosContext } from "../contextos/DatosContext";

export const Dato = (props) => {
  const { dato } = props;
  const { dispatch } = useContext(DatosContext);
  const borrarDato = () => {
    dispatch({
      type: "borrar",
      payload: dato.id,
    });
  };
  const modificarDato = () => {
    dispatch({
      type: "modificar",
      payload: {
        ...dato,
        edad: dato.edad + 1,
      },
    });
  };
  return (
    <li>
      <span onClick={modificarDato}>
        {dato.nombre} - {dato.edad} años
      </span>{" "}
      (<span onClick={borrarDato}>X</span>)
    </li>
  );
};
