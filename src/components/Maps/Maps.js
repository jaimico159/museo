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

const Details = styled.ul`
  list-style-type: none;
`;

const MoreInfo = styled.a`
  color: black;
  font-size: 1em;
  margin: 0;
  padding: 0.25em 1em;
  border: 2px solid black;
`;

function Maps() {
  return (
    <StyledMap>
      <Image src={map_image}></Image>
      <Info>
        <h2>BIENVENIDOS</h2>
        <Details>
          <li>DIAS Y HORAS</li>
          <Details>
            <li>Lunes a Viernes: 9 am - 7 pm</li>
            <li>Sábado: 9 am - 1 pm</li>
          </Details>
          <li>PRECIOS</li>
          <Details>
            <li>AdDetailsto:S/.10.00</li>
            <li>Estudiante:S/.5.00</li>
            <li>Niños:S/.2.00</li>
            <li>Escolares:S/.3.00</li>
            <li>Adulto mayor:S/.4.00</li>
          </Details>
        </Details>
        <MoreInfo as="a" href="/">
          Más información
        </MoreInfo>
      </Info>
    </StyledMap>
  );
}

export default Maps;
