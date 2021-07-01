import { useEffect, useReducer } from "react";
import { datosReducer } from "../reducers/datosReducer";
import { DatosContext } from "./DatosContext";

const datosAPI = [
  {
    id: 1,
    nombre: "Luis",
    edad: 35,
  },
  {
    id: 2,
    nombre: "Marta",
    edad: 33,
  },
  {
    id: 3,
    nombre: "Marco",
    edad: 30,
  },
];

export const DatosContextProvider = (props) => {
  const { children } = props;
  const [datos, dispatch] = useReducer(datosReducer, []);
  useEffect(() => {
    dispatch({
      type: "cargar",
      payload: datosAPI,
    });
  }, []);
  return (
    <DatosContext.Provider value={{ datos, dispatch }}>
      {children}
    </DatosContext.Provider>
  );
};
