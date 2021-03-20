import styled from "styled-components";
import { colors } from "../../constants/constants";
import Title from "../../shared/Title";
import EventIcon from "@material-ui/icons/Event";
import SimpleText from "../../shared/SimpleText";
import HorizontalLine from "../../shared/HorizontalLine";

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
  return (
    <MainComponent style={{ background: colors.CUSTOM_GRAY }}>
      <InfoContainer>
        <ArticleContainer style={{ background: "white" }}>
          <ArticleImage></ArticleImage>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            LA CONGREGACION FRANCISCANA
          </Title>
          <DateLabel style={{ marginBottom: 30 }}>
            <EventIcon fontSize="small" style={{ marginRight: 10 }} />
            25 de Julio del 2021
          </DateLabel>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            ¿Cual es el origen de la orden Franciscana?
          </Title>
          <Paragraph>
            La orden franciscana fue fundada por San Francisco de Asís hace un
            poco más de 800 años, el era un hijo de un comerciante que después
            de recibir una revelación divina en una iglesia abandonada en San
            Damian dándole la siguiente orden: “Francisco, ve y repara mi
            iglesia”.
          </Paragraph>
          <Paragraph>
            En 1209, el primer grupo de frailes fue a pie de Asís a Roma y, en
            un extraordinario ejemplo de la obra del Espíritu Santo, el grupo de
            escuálidos hermanos fue recibido por el Papa Inocencio III, quien
            aprobó su modo de vida.
          </Paragraph>
          <Paragraph>
            Francisco recibió los Estigmas en el Monte Alvernia, una prueba
            innegable de la dedicación que tuvo para seguir a Cristo en cuerpo y
            alma, y a pesar de graves enfermedades, aún sentía el gozo de amar y
            alabar a Dios, hasta cuando la Hermana Muerte vino a visitarlo en
            1226.
          </Paragraph>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            ¿Cuando arribo la orden Franciscana al Perú?
          </Title>
          <Paragraph>
            La orden Franciscana comenzó su obra misional en el año de 1500 en
            America Latina, y llegaron al Perú en 1531, fueron una de las
            primeras órdenes religiosas en llegar al Perú con voluntad
            evangelizadora y civilizadora y haberla continuada con abnegación
            por muchos siglos.
          </Paragraph>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            ¿Cuando se establecio la orden Franciscana en Arequipa?
          </Title>
          <Paragraph>
            El convento San Francisco fue fundado en Arequipa en el año de 1552
            por el padre Alonso Rincon, la labor de la orden franciscana en
            Arequipa fue la evangelización de los indios collahuas que venían a
            trabajar en la ciudad, poco después se extendió a toda Arequipa.
          </Paragraph>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            ¿Cual es la labor de la orden Franciscana en el Perú?
          </Title>
          <Paragraph>
            La orden Franciscana a diferencia de otras ordenes hermanas, no se
            enfoca en una sola idea o pensamiento, es literalmente el apoyo de
            la iglesia, estando y siendo lo que se necesite, desde un maestro en
            escuelas, a un oyente de los que desean ser escuchados. Actualmente
            podemos hallarlos en todo el Perú, y en Arequipa además de sus
            iglesias y conventos dejaron el legado de un colegio inspirado en la
            enseñanza de San Francisco.
          </Paragraph>
          <Title style={{ margin: "30px 0", fontSize: 20 }}>
            “O por fray o por hermano, todo el mundo es franciscano.”
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
