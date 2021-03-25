import styled from "styled-components";
import Title from "../../shared/Title";
import SimpleText from "../../shared/SimpleText";
import HorizontalLine from "../../shared/HorizontalLine";
import { useTranslation } from "next-i18next";

const MainContainer = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justifcontent: center;
  alignitems: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  margin-top: 50px;
`;

function TitleSection() {
  const { t } = useTranslation();

  return (
    <MainContainer>
      <TitleContainer>
        <HorizontalLine color="black" width={140} marRight={40} />
        <Title variant="h4" space={5}>
          {t("convent-events.calendar")}
        </Title>
        <HorizontalLine color="black" width={140} marLeft={40} />
      </TitleContainer>
      <SimpleText style={{ fontSize: 60, width: "100%", textAlign: "center" }}>
        2021
      </SimpleText>
    </MainContainer>
  );
}

export default TitleSection;
