export const BotonCrear = (props) => {
  const { editando } = props;
  return (
    <>
      {editando && <h3>Editando elemento</h3>}
      <button>{editando ? "Modificar" : "Crear"}</button>
    </>
  );
};
