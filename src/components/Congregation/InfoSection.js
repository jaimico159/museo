import styled from "styled-components";
import { colors } from "../../constants/constants";
import Title from "../../shared/Title";
import EventIcon from "@material-ui/icons/Event";
import SimpleText from "../../shared/SimpleText";
import HorizontalLine from "../../shared/HorizontalLine";
import { useTranslation } from "next-i18next";

const MainComponent = styled.div`
  height: 2000px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  min-width: 1200px;
  height: 1700px;
  display: flex;
  margin-top: 100px;
`;

const ArticleContainer = styled.div`
  padding: 20px;
  width: 900px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border-style: solid;
  border-color: ${colors.BORDER_GRAY};
  border-weight: 1px;
`;

const ArticleImage = styled.div`
  background-image: url("/images/congregation/acerca1.jpg");
  height: 360px;
`;

const DateLabel = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 30;
  width: 95%;
`;

const ImagesContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  border-radius: 5px;
  border-style: solid;
  border-color: ${colors.BORDER_GRAY};
  border-weight: 1px;
  margin-left: 20px;
  background-color: "white";
`;

function ImageDivider() {
  return (
    <HorizontalLine
      color="#b9b9b9"
      marTop={10}
      marBottom={10}
      width="100%"
    ></HorizontalLine>
  );
}

function Paragraph({ children }) {
  return <SimpleText style={{ margin: "10px 5px" }}>{children}</SimpleText>;
}

export default function InfoSection() {
  const { t } = useTranslation();
  return (
    <MainComponent style={{ background: colors.CUSTOM_GRAY }}>
      <InfoContainer>
        <ArticleContainer style={{ background: "white" }}>
          <ArticleImage></ArticleImage>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            {t("franciscan-order.title")}
          </Title>
          <DateLabel style={{ marginBottom: 30 }}>
            <EventIcon fontSize="small" style={{ marginRight: 10 }} />
            {t("franciscan-order.date")}
          </DateLabel>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            {t("franciscan-order.origin")}
          </Title>
          <Paragraph>{t("franciscan-order.origin-answer-1")}</Paragraph>
          <Paragraph>{t("franciscan-order.origin-answer-2")}</Paragraph>
          <Paragraph>{t("franciscan-order.origin-answer-3")}</Paragraph>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            {t("franciscan-order.arrival")}
          </Title>
          <Paragraph>{t("franciscan-order.arrival-answer")}</Paragraph>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            {t("franciscan-order.foundation")}
          </Title>
          <Paragraph>{t("franciscan-order.foundation-answer")}</Paragraph>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            {t("franciscan-order.doses")}
          </Title>
          <Paragraph>{t("franciscan-order.doses-answer")}</Paragraph>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            {t("franciscan-order.phrase")}
          </Title>
        </ArticleContainer>
        <ImagesContainer style={{ background: "white" }}>
          <img src="/images/congregation/acerca2.jpg" />
          <ImageDivider />
          <img src="/images/congregation/acerca3.jpg" />
          <ImageDivider />
          <img src="/images/congregation/acerca4.jpg" />
          <ImageDivider />
          <img src="/images/congregation/acerca5.jpg" />
          <ImageDivider />
          <img src="/images/congregation/acerca6.jpeg" />
        </ImagesContainer>
      </InfoContainer>
    </MainComponent>
  );
}
