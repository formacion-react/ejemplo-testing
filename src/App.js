import { useState } from "react";
import { BotonCrear } from "./componentes/BotonCrear";
import { Listado } from "./componentes/Listado";
import { DatosContextProvider } from "./contextos/DatosContextProvider";

const datos = [
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

function App() {
  const [editando, setEditando] = useState(false);
  return (
    <>
      <BotonCrear editando={editando} />
      <Listado datos={datos} />
    </>
  );
}

export default App;
