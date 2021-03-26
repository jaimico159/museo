import { map_image } from "../../constants/constants";
import styled from "styled-components";
import Title from "../../shared/Title/Title";
import SquareButton from "../../shared/SquareButton";
import SimpleText from "../../shared/SimpleText/SimpleText";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import { useTranslation } from "next-i18next";
import { prices_image_url } from "../../constants/constants";
import { useRouter } from "next/router";
import Link from "next/link";

const StyledMap = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: stretch;
  flex: 3 0px;
  align-content: stretch;
`;

const Container = styled.div`
  order: 1;
  max-width: 100%;
  height: 60%;
  width: 70%;
  margin-bottom: 2%;
  text-align: center;
`;

const Image = styled.img`
  height: 450px;
`;

const Info = styled.div`
  background-image: url(${prices_image_url});
  background-size: 100%;
  order: 2;
  margin-bottom: 2%;
  width: 28%;
  align-self: stretch;
  padding: 2%;
  height: 450px;
`;

const Details = styled.ul`
  list-style-type: none;
  padding: 0.5rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
`;

function Maps() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  return (
    <StyledMap>
      <Container>
        <Image src={map_image}></Image>
      </Container>

      <Info>
        <Title color="secondary">{t("maps.title")}</Title>
        <Details>
          <SimpleText color="primary">
            <AccessTimeIcon fontSize="small"></AccessTimeIcon> {t("maps.hours")}
          </SimpleText>
          <Details>
            <SimpleText color="secondary">{t("maps.m-s-hours")}</SimpleText>
          </Details>
          <SimpleText color="primary">
            <AttachMoneyIcon fontSize="small"></AttachMoneyIcon>
            {t("maps.price")}
          </SimpleText>
          <Details>
            <SimpleText color="secondary">{t("maps.children-p")}</SimpleText>
            <SimpleText color="secondary">{t("maps.school-ch-p")}</SimpleText>
            <SimpleText color="secondary">{t("maps.uni-st-p")}</SimpleText>
            <SimpleText color="secondary">{t("maps.adults-p")}</SimpleText>
            <SimpleText color="secondary">{t("maps.a-over65-p")}</SimpleText>
            <SimpleText color="secondary">{t("maps.eccles-p")}</SimpleText>
          </Details>
        </Details>
        <Link href="/visitors" locale={router.locale}>
          <ButtonContainer>
            <SquareButton colorVariant="primary">
              {t("maps.maps-button")}
            </SquareButton>
          </ButtonContainer>
        </Link>
      </Info>
    </StyledMap>
  );
}

export default Maps;
