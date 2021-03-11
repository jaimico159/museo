import { map_image } from "../../constants/constants";
import styled from "styled-components";
import Title from "../../shared/Title/Title";
import {
  details_section_button,
  details_section_title,
} from "../../content/details_section_content";
import { Button } from "@material-ui/core";

const StyledMap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex: 3 0px;
  align-content: stretch;
`;

const Container = styled.div`
  order: 1;
  max-width: 100%;
  height: 60%;
  width: 70%;
  margin-bottom: 2%;
  text-align: center;
`;

const Image = styled.img`
  // height: 100%;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
`;

function Maps() {
  return (
    <StyledMap>
      <Container>
        <Image src={map_image}></Image>
      </Container>
      <Info>
        <Title text={details_section_title.es} color="secondary" />
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
        <ButtonContainer>
          <Button
            variant="outlined"
            color="secondary"
            style={{ borderRadius: 0 }}
          >
            {details_section_button.es}
          </Button>
        </ButtonContainer>
      </Info>
    </StyledMap>
  );
}

export default Maps;
