import { map_image } from "../../constants/constants";
import styled from "styled-components";

const StyledMap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Image = styled.img`
  height: 350px;
  background-color: orange;
  padding: 2rem 5rem;
`;

const Info = styled.div`
  background-color: orange;
  padding: 2rem;
`;

function Maps() {
  return (
    <StyledMap>
      <Image src={map_image}></Image>
      <Info>
        <h2>BIENVENIDOS</h2>
        <ul>
          <li>DIAS Y HORAS</li>
          <ul>
            <li>Lunes a Viernes: 9 am - 7 pm</li>
            <li>Sábado: 9 am - 1 pm</li>
          </ul>
          <li>PRECIOS</li>
          <ul>
            <li>Adulto:S/.10.00</li>
            <li>Estudiante:S/.5.00</li>
            <li>Niños:S/.2.00</li>
            <li>Escolares:S/.3.00</li>
            <li>Adulto mayor:S/.4.00</li>
          </ul>
        </ul>
        <a href="/">Más información</a>
      </Info>
    </StyledMap>
  );
}

export default Maps;
