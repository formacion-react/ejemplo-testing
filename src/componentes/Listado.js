import { Dato } from "./Dato";

export const Listado = (props) => {
  const { datos } = props;
  return (
    <>
      <h1>Listado de personas</h1>
      <ul>
        {datos.map((dato) => (
          <Dato key={dato.id} dato={dato} />
        ))}
      </ul>
    </>
  );
};
