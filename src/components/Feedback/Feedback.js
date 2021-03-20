import styled from "styled-components";
import {
  feedback_section_button,
  feedback_section_info,
  feedback_section_title,
} from "../../content/feedback_section_content";
import CapsuleButton from "../../shared/CapsuleButton";
import Typography from "@material-ui/core/Typography";
import { useTranslation } from "next-i18next";
import Title from "../../shared/Title";

const FeedbackSectionContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedbackContainer = styled.div`
  height: 300px;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
`;

const FeedbackTitle = styled.div``;

function Feedback() {
  const { t, i18n } = useTranslation();
  return (
    <FeedbackSectionContainer>
      <FeedbackContainer>
        <TextContainer>
          <Title variant="h4">{t("feedback.title")}</Title>
          <Typography variant="subtitle1">{t("feedback.details")}</Typography>
        </TextContainer>
        <ButtonContainer>
          <CapsuleButton>{t("feedback.feedback-button")}</CapsuleButton>
        </ButtonContainer>
      </FeedbackContainer>
    </FeedbackSectionContainer>
  );
}

export default Feedback;
