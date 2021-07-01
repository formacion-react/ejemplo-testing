export const Dato = (props) => {
  const { dato } = props;
  return (
    <li>
      <span>
        {dato.nombre} - {dato.edad} años
      </span>{" "}
      (<span>X</span>)
    </li>
  );
};
