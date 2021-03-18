import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";
import Title from "../../shared/Title";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/Phone";

const FooterContainer = styled.section`
  width: 100%;
  margin: 0px;
  padding: 0px;
  height: 300px;
  background-color: black;
  color: white;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InfoImage = styled.div`
  width: 200px;
  height: 250px;
  align-self: center;
  margin-right: 15px;
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const InfoData = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  margin-left: 15px;
  flex-grow: 1;
  justify-content: center;
`;

const FooterRow = styled(Row)`
  height: 100%;
`;

const FooterTitle = styled.h5`
  font-weight: bold;
`;

const FooterLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

const FooterLineData = styled.div`
  margin-left: 15px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Container className="h-100">
        <FooterRow>
          <Col>
            <InfoContainer>
              <InfoImage>
                <img src="/images/main/logo-museo.png" height="200" />
              </InfoImage>
              <InfoData>
                <Title variant="h5">Información de Contacto</Title>
                <FooterLine>
                  <LocationOnIcon />
                  <FooterLineData>
                    Calle Zela 103, Cercado, Arequipa
                  </FooterLineData>
                </FooterLine>
                <FooterLine>
                  <AccessTimeIcon />
                  <FooterLineData>
                    Lunes a Sábado: 9:00 AM - 06:00 AM
                  </FooterLineData>
                </FooterLine>
                <FooterLine>
                  <MailOutlineIcon />
                  <FooterLineData>museosanfrancisco@example.com</FooterLineData>
                </FooterLine>
                <FooterLine>
                  <PhoneIcon />
                  <FooterLineData>(+54) 999 999 999</FooterLineData>
                </FooterLine>
              </InfoData>
            </InfoContainer>
          </Col>
        </FooterRow>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
