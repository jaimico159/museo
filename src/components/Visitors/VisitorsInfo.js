import styled from "styled-components";
import { icons } from "../../constants/constants";
import HorizontalLine from "../../shared/HorizontalLine";
import Typography from "@material-ui/core/Typography";
import Title from "../../shared/Title/Title";
import SimpleText from "../../shared/SimpleText/SimpleText";
import { useTranslation } from "next-i18next";

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
  height: 100px;
`;

const PhoneInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  height: 160px;
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
  height: 250px;
`;

function VisitorsInfo() {
  const { t } = useTranslation();
  return (
    <VisitorsContainer>
      <VisitorsInfoContainer>
        <TitleContainer>
          <HorizontalLine color="black" width={140} marRight={40} />
          <Title color="black" space="5px">
            {t("visitors-info.title")}
          </Title>
          <Typography variant="h4"></Typography>
          <HorizontalLine color="black" width={140} marLeft={40} />
        </TitleContainer>
        <PhoneInfoContainer>
          <InfoContainer>
            <SimpleText>{t("visitors-info.steps")}</SimpleText>
            <SimpleText>{t("visitors-info.first")}</SimpleText>
          </InfoContainer>
          <PhoneContainer>
            <Image src={icons.telefono}></Image>
            <SimpleText> (+54) 999 999 999 </SimpleText>
          </PhoneContainer>
        </PhoneInfoContainer>

        <VisitorDetailsContainer>
          <SimpleText>{t("visitors-info.second")}</SimpleText>
          <ol style={{ paddingLeft: 18, marginTop: 26 }}>
            <li>{t("visitors-info.name")}</li>
            <li>{t("visitors-info.date")}</li>
            <li>{t("visitors-info.time")}</li>
            <li>{t("visitors-info.people")}</li>
          </ol>
          <SimpleText>{t("visitors-info.cancel")}</SimpleText>
        </VisitorDetailsContainer>
      </VisitorsInfoContainer>
    </VisitorsContainer>
  );
}

export default VisitorsInfo;
