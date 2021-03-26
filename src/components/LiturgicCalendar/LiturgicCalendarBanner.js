import styled from "styled-components";
import HorizontalLine from "../../shared/HorizontalLine";
import Title from "../../shared/Title";
import { useTranslation } from "next-i18next";

const BannerContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  background: url("images/liturgic_calendar/encabezado.jpg");
  height: 480px;
  background-size: 100%;
  background-position: 0px 30px;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1100px;
  max-width: 1100px;
  height: 100%;
  color: white;
  z-index: 2;
`;

function LiturgicCalendarBanner() {
  const { t } = useTranslation();
  return (
    <BannerContainer>
      <ContentContainer>
        <HorizontalLine width={180} marRight={40} />
        <Title variant="h4" space={30}>
          {t("convent-events.title")}
        </Title>
        <HorizontalLine width={180} marLeft={40} />
      </ContentContainer>
    </BannerContainer>
  );
}

export default LiturgicCalendarBanner;
