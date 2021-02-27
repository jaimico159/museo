import styled from "styled-components";

const StyledVisitors = styled.div`
  //   display: flex;
  //   justify-content: space-evenly;
  //   align-items: stretch;
  //   flex: 3 0px;
  //   align-content: stretch;
`;

function Visitors() {
  return (
    <StyledVisitors>
      <h2>PLANEA TU VISITA</h2>
      <div>
        <p>
          Si vas a venir al museo en un grupo numeroso, <br />
          puedes planear tu visita llamandonos al:{" "}
          <span> (+54) 999 999 999</span>y proporcionando la siguiente
          información:
        </p>

        <li>Nombre y Apellidos de la persona encargada</li>
        <li>Fecha de la visita</li>
        <li>Hora de la visita</li>
        <li>Número de niños</li>
        <li>Número de adolescentes</li>
        <li>Número de adultos</li>
        <li>Número de adultos mayor</li>
        <li>Número de niños</li>
      </div>
    </StyledVisitors>
  );
}

export default Visitors;
