import { map_image } from "../../constants/constants";
import styled from "styled-components";
import {
  map_section_title,
  map_section_button,
} from "../../content/map_section_content";

const StyledMap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex: 3 0px;
  align-content: stretch;
`;

const Container = styled.div`
  order: 1;
  background-color: #f64e00;
  padding: 2%;
  max-width: 100%;
  height: 60%;
  width: 70%;
  margin-bottom: 2%;
  text-align: center;
`;

const Image = styled.img`
  height: 350px;
`;

const Info = styled.div`
  background-color: #f64e00;
  order: 2;
  margin-bottom: 2%;
  width: 28%;
  align-self: stretch;
  padding: 2%;
`;

const Details = styled.ul`
  list-style-type: none;
  padding: 0.5rem 0;
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
      <Container>
        <Image src={map_image}></Image>
      </Container>
      <Info>
        <h2>{map_section_title.es}</h2>
        <Details>
          <li>DIAS Y HORAS</li>
          <Details>
            <li>Lunes a Viernes: 9 am - 7 pm</li>
            <li>Sábado: 9 am - 1 pm</li>
          </Details>
          <li>PRECIOS</li>
          <Details>
            <li>Adultos: S/.10.00</li>
            <li>Estudiantes: S/.5.00</li>
            <li>Niños: S/.2.00</li>
            <li>Escolares: S/.3.00</li>
            <li>Adulto mayor: S/.4.00</li>
          </Details>
        </Details>
        <MoreInfo as="a" href="/">
          {map_section_button}
        </MoreInfo>
      </Info>
    </StyledMap>
  );
}

export default Maps;
