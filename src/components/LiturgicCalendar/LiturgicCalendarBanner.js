import styled from "styled-components";
import HorizontalLine from "../../shared/HorizontalLine";
import Title from "../../shared/Title";

const BannerContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  background: url("images/liturgic_calendar/encabezado.jpg");
  height: 599px;
  background-size: 100%;
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
  return (
    <BannerContainer>
      <ContentContainer>
        <HorizontalLine width={180} marRight={40} />
        <Title variant="h4" space={30}>
          EVENTOS DEL CONVENTO
        </Title>
        <HorizontalLine width={180} marLeft={40} />
      </ContentContainer>
    </BannerContainer>
  );
}

export default LiturgicCalendarBanner;
