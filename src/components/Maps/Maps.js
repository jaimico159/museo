import { map_image } from "../../constants/constants";
import styled from "styled-components";
import Title from "../../shared/Title/Title";
import {
  details_section_button,
  details_section_title,
} from "../../content/details_section_content";
import SquareButton from "../../shared/SquareButton";
import SimpleText from "../../shared/SimpleText/SimpleText";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

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
        <Title color="secondary">{details_section_title.es}</Title>
        <Details>
          <SimpleText color="primary">
            <AccessTimeIcon fontSize="small"></AccessTimeIcon> DIAS Y HORAS
          </SimpleText>
          <Details>
            <SimpleText color="secondary">
              Lunes a Viernes: 9 am - 7 pm
            </SimpleText>
            <SimpleText color="secondary">Sábado: 9 am - 1 pm</SimpleText>
          </Details>
          <SimpleText color="primary">
            <AttachMoneyIcon fontSize="small"></AttachMoneyIcon>PRECIOS
          </SimpleText>
          <Details>
            <SimpleText color="secondary">Adultos: S/.10.00</SimpleText>
            <SimpleText color="secondary">Estudiantes: S/.5.00</SimpleText>
            <SimpleText color="secondary">Niños: S/.2.00</SimpleText>
            <SimpleText color="secondary">Escolares: S/.3.00</SimpleText>
            <SimpleText color="secondary">Adulto mayor: S/.4.00</SimpleText>
          </Details>
        </Details>
        <ButtonContainer>
          <SquareButton colorVariant="primary">
            {details_section_button.es}
          </SquareButton>
        </ButtonContainer>
      </Info>
    </StyledMap>
  );
}

export default Maps;
