import { Button } from "@material-ui/core";
import { Fragment } from "react";
import styled from "styled-components";
import {
  events_section_button,
  events_section_title,
} from "../../content/events_section_content";
import Title from "../../shared/Title";
import SquareButton from "../../shared/SquareButton";
import { useTranslation } from "next-i18next";

const EventsContainer = styled.div`
  height: 450px;
  background: black;
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
  return (
    <EventsContainer>
      <ContentContainer>
        <Title color="secondary" marginBottom={30}>
          {t("events.title")}
        </Title>
        <ButtonContainer>
          <SquareButton>{t("events.events-button")}</SquareButton>
        </ButtonContainer>
      </ContentContainer>
    </EventsContainer>
  );
}

export default Events;
