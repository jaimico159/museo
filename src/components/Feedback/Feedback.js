import styled from "styled-components";
import {
  feedback_section_button,
  feedback_section_info,
  feedback_section_title,
} from "../../content/feedback_section_content";
import CapsuleButton from "../../shared/CapsuleButton";
import Typography from "@material-ui/core/Typography";

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
  return (
    <FeedbackSectionContainer>
      <FeedbackContainer>
        <TextContainer>
          <Typography variant="h4">{feedback_section_title.es}</Typography>
          <Typography variant="subtitle1">
            {feedback_section_info.es}
          </Typography>
        </TextContainer>
        <ButtonContainer>
          <CapsuleButton>{feedback_section_button.es}</CapsuleButton>
        </ButtonContainer>
      </FeedbackContainer>
    </FeedbackSectionContainer>
  );
}

export default Feedback;
