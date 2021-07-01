import { useContext } from "react";
import { DatosContext } from "../contextos/DatosContext";
import { Dato } from "./Dato";

export const Listado = () => {
  const { datos } = useContext(DatosContext);
  return (
    <ul>
      {datos.map((dato) => (
        <Dato key={dato.id} dato={dato} />
      ))}
    </ul>
  );
};
