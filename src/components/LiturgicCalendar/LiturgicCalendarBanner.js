import styled from "styled-components";
import { background_image } from "../../constants/constants";
import HorizontalLine from "../../shared/HorizontalLine";
import Typography from "@material-ui/core/Typography";

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
  width: 500px;
  max-width: 500px;
  height: 100%;
  color: white;
  z-index: 2;
`;

function LiturgicCalendarBanner() {
  return (
    <BannerContainer>
      <ContentContainer>
        <HorizontalLine width={140} marRight={40} />
        <Typography variant="h3">EVENTOS DEL CONVENTO</Typography>
        <HorizontalLine width={140} marLeft={40} />
      </ContentContainer>
    </BannerContainer>
  );
}

export default LiturgicCalendarBanner;
