import styled from "styled-components";
import HorizontalLine from "../../shared/HorizontalLine";
import Title from "../../shared/Title";

const BannerContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  background: url("images/congregation/encabezado.png");
  height: 599px;
  background-size: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1300px;
  max-width: 1300px;
  height: 100%;
  color: white;
  z-index: 2;
`;

function CongregationBanner() {
  return (
    <BannerContainer>
      <ContentContainer>
        <HorizontalLine width={180} marRight={40} />
        <Title variant="h4" space={30}>
          LA CONGREGACIÓN FRANCISCANA
        </Title>
        <HorizontalLine width={180} marLeft={40} />
      </ContentContainer>
    </BannerContainer>
  );
}

export default CongregationBanner;
