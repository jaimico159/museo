import styled from "styled-components";
import { icons } from "../../constants/constants";
import HorizontalLine from "../../shared/HorizontalLine";
import Typography from "@material-ui/core/Typography";
import Title from "../../shared/Title/Title";
import SimpleText from "../../shared/SimpleText/SimpleText";

const VisitorsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VisitorsInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 70px;
  padding-bottom: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhoneInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  height: 130px;
`;
const InfoContainer = styled.div`
  width: 300px;
`;

const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  height: 30px;
  margin: 5px;
`;

const VisitorDetailsContainer = styled.div`
  width: 350px;
`;

function VisitorsInfo() {
  return (
    <VisitorsContainer>
      <VisitorsInfoContainer>
        <TitleContainer>
          <HorizontalLine color="black" width={140} marRight={40} />
          <Title color="black" space="5px">
            PLANEA TU VISITA
          </Title>
          <Typography variant="h4"></Typography>
          <HorizontalLine color="black" width={140} marLeft={40} />
        </TitleContainer>
        <PhoneInfoContainer>
          <InfoContainer>
            <SimpleText>
              Si vas a venir al museo en un grupo numeroso, puedes planear tu
              visita llamándonos al:
            </SimpleText>
          </InfoContainer>
          <PhoneContainer>
            <Image src={icons.telefono}></Image>
            <SimpleText> (+54) 999 999 999 </SimpleText>
          </PhoneContainer>
        </PhoneInfoContainer>

        <VisitorDetailsContainer>
          <SimpleText>Y proporcionando la siguiente información:</SimpleText>
          <ol style={{ paddingLeft: 18, marginTop: 26 }}>
            <li>Nombre y Apellidos de la persona encargada</li>
            <li>Fecha de la visita</li>
            <li>Hora de la visita</li>
            <li>Número de niños</li>
            <li>Número de adolescentes</li>
            <li>Número de adultos</li>
            <li>Número de adultos mayor</li>
            <li>Número de niños</li>
          </ol>
        </VisitorDetailsContainer>
      </VisitorsInfoContainer>
    </VisitorsContainer>
  );
}

export default VisitorsInfo;
