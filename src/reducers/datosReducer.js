export const datosReducer = (datos, accion) => {
  switch (accion.type) {
    case "cargar":
      return [...accion.payload];
    case "anyadir":
      return [...datos, accion.payload];
    case "borrar":
      return datos.filter((dato) => dato.id !== accion.payload);
    case "modificar":
      return datos.map((dato) =>
        dato.id === accion.payload.id ? accion.payload : dato
      );
    default:
      return datos;
  }
};
