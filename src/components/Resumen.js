import styled from "@emotion/styled";
import PropTypes from "prop-types";

import { primerMayusculas } from "../helper";

const ContenedorResumen = styled.div`
  padding: 1rem;
  font-size: 1.3em;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  // Extraer de datos
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContenedorResumen>
      <h2>Resumen de cotización</h2>
      <ul>
        <li>Marca: {primerMayusculas(marca)}</li>
        <li>Plan: {primerMayusculas(plan)}</li>
        <li>Año del auto: {year} </li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
