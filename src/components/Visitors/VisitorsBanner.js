import styled from "styled-components";
import { background_image } from "../../constants/constants";
import HorizontalLine from "../../shared/HorizontalLine";
import Typography from "@material-ui/core/Typography";
import Title from "../../shared/Title/Title";
import { useTranslation } from "next-i18next";

const BannerContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  background: url(${background_image});
  background-size: 110%;
  height: 400px;
  background-position: -100px -300px;
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

function VisitorsBanner() {
  const { t } = useTranslation();
  return (
    <BannerContainer>
      <ContentContainer>
        <HorizontalLine width={140} marRight={40} />
        <Title color="secondary" variant="h3" space="10px">
          {t("visitors-banner.title")}
        </Title>
        <HorizontalLine width={140} marLeft={40} />
      </ContentContainer>
    </BannerContainer>
  );
}

export default VisitorsBanner;
