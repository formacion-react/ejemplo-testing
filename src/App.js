import { BotonCrear } from "./componentes/BotonCrear";
import { Listado } from "./componentes/Listado";
import { DatosContextProvider } from "./contextos/DatosContextProvider";

function App() {
  return (
    <DatosContextProvider>
      <BotonCrear />
      <Listado />
    </DatosContextProvider>
  );
}

export default App;
