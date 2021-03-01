import styled from "styled-components";
import { icons } from "../../constants/constants";

const StyledVisitors = styled.div`
  text-align: center;
  //   justify-content: space-evenly;
  //   align-items: stretch;
  //   flex: 3 0px;
  //   align-content: stretch;
`;

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  //   align-items: stretch;
  //   flex: 3 0px;
  //   align-content: stretch;
`;

const Image = styled.img`
  height: 50px;
`;

function Visitors() {
  return (
    <StyledVisitors>
      <div>
        <h2>PLANEA TU VISITA</h2>
        <div>
          <p>
            Si vas a venir al museo en un grupo numeroso, <br />
            puedes planear tu visita llamandonos al:{" "}
            <span> (+54) 999 999 999 </span>y proporcionando la siguiente
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
      </div>
      <div>
        <h2>Protocolo de Seguridad e Higiene</h2>
        <List>
          <div>
            <p>Uso obligatorio de mascarilla</p>
            <Image src={icons[0]}></Image>
          </div>
          <div>
            <p>Uso de alcohol líquido en gel</p>
            <Image src={icons[1]}></Image>
          </div>
          <div>
            <p>Limpieza y desinfección periódica de espacios</p>
            <Image src={icons[2]}></Image>
          </div>
          <div>
            <p>Distancia mínima de seguridad</p>
            <Image src={icons[3]}></Image>
          </div>
          <div>
            <p>Duración máxima de la visita</p>
            <Image src={icons[4]}></Image>
          </div>
        </List>
      </div>
    </StyledVisitors>
  );
}

export default Visitors;
