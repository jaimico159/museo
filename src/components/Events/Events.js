import styled from "styled-components";
import Title from "../../shared/Title";
import SquareButton from "../../shared/SquareButton";
import { useTranslation } from "next-i18next";
import { events_image_url } from "../../constants/constants";
import { useRouter } from "next/router";
import Link from "next/link";

const EventsContainer = styled.div`
  height: 450px;
  background-image: url(${events_image_url});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentContainer = styled.div`
  height: 250px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

function Events() {
  const { t, i18n } = useTranslation();
  const router = useRouter();

  return (
    <EventsContainer>
      <ContentContainer>
        <Title color="secondary" marginBottom={30}>
          {t("events.title")}
        </Title>
        <Link href="/liturgic_calendar" locale={router.locale}>
          <ButtonContainer>
            <SquareButton>{t("events.events-button")}</SquareButton>
          </ButtonContainer>
        </Link>
      </ContentContainer>
    </EventsContainer>
  );
}

export default Events;
