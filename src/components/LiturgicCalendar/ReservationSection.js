import styled from "styled-components";
import Title from "../../shared/Title";
import SimpleText from "../../shared/SimpleText";
import HorizontalLine from "../../shared/HorizontalLine";
import { icons } from "../../constants/constants";

const MainContainer = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-top: 50px;
`;

const PhoneContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const Image = styled.img`
  height: 30px;
  margin: 5px;
`;

function ReservationSection() {
  return (
    <MainContainer>
      <TitleContainer>
        <HorizontalLine color="black" width={140} marRight={40} />
        <Title variant="h4" space={5}>
          RESERVACIONES
        </Title>
        <HorizontalLine color="black" width={140} marLeft={40} />
      </TitleContainer>
      <SimpleText style={{ fontSize: 25, width: "350px", textAlign: "center" }}>
        Para reservar misas, bautismos, matrimonios u otro evento.
      </SimpleText>
      <SimpleText style={{ fontSize: 25, width: "320px", textAlign: "center" }}>
        Contáctese con nosotros así:
      </SimpleText>
      <PhoneContainer>
        <SimpleText
          style={{ fontSize: 25, width: "320px", textAlign: "center" }}
        >
          <Image src={icons.telefono}></Image>
          (+54) 999 999 999
        </SimpleText>
      </PhoneContainer>
    </MainContainer>
  );
}

export default ReservationSection;
