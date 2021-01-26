import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { BsFillClockFill } from "react-icons/bs";

const FooterContainer = styled.section`
  width: 100%;
  margin: 0px;
  padding: 0px;
  height: 400px;
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

const InfoImage = styled(Image)`
  width: 200px;
  height: 250px;
  align-self: center;
  margin-right: 15px;
`;

const InfoData = styled.div`
  display: flex;
  flex-direction: column;
  height: 250px;
  width: 400px;
  margin-left: 15px;
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
  height: 50px;
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
              <InfoImage
                src="https://previews.123rf.com/images/jemastock/jemastock1710/jemastock171013378/88544485-hombre-con-camisa-de-manga-larga-avatar-cuerpo-completo-icono-imagen-vector-ilustraci%C3%B3n-dise%C3%B1o-l%C3%ADnea-negra.jpg"
                rounded
              ></InfoImage>
              <InfoData>
                <FooterTitle>Información de Contacto</FooterTitle>
                <FooterLine>
                  <BsFillClockFill />
                  <FooterLineData>DATAA 1</FooterLineData>
                </FooterLine>
                <FooterLine>
                  <BsFillClockFill />
                  <FooterLineData>DATAA 1</FooterLineData>
                </FooterLine>
                <FooterLine>
                  <BsFillClockFill />
                  <FooterLineData>DATAA 1</FooterLineData>
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
