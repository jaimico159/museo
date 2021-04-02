import styled from "styled-components";
import Title from "../../shared/Title";
import SimpleText from "../../shared/SimpleText";
import HorizontalLine from "../../shared/HorizontalLine";
import { icons } from "../../constants/constants";
import { useTranslation } from "next-i18next";

const MainContainer = styled.div`
  height: 450px;
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
  height: 110px;
`;

const Image = styled.img`
  height: 30px;
  margin: 5px;
`;

function ReservationSection() {
  const { t } = useTranslation();
  return (
    <MainContainer>
      <TitleContainer>
        <HorizontalLine color="black" width={140} marRight={40} />
        <Title variant="h4" space={5}>
          {t("calendar-reservations.title")}
        </Title>
        <HorizontalLine color="black" width={140} marLeft={40} />
      </TitleContainer>
      <SimpleText style={{ fontSize: 25, width: "350px", textAlign: "center" }}>
        {t("calendar-reservations.number")}
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
