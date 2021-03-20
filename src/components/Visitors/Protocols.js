import styled from "styled-components";
import { icons } from "../../constants/constants";
import Title from "../../shared/Title/Title";
import SimpleText from "../../shared/SimpleText/SimpleText";

const ProtocolsContainer = styled.div`
  text-align: center;
  width: 800px;
  margin: auto;
  margin-bottom: 40px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 20px;
`;

const ListItem = styled.div`
  margin: 10px;
`;

const Image = styled.img`
  height: 80px;
`;

function Protocols() {
  return (
    <ProtocolsContainer>
      <Title color="black" space="3px">
        PROTOCOLO DE SEGURIDAD E HIGIENE
      </Title>
      <List>
        <ListItem>
          <SimpleText color="black">Uso obligatorio de mascarilla</SimpleText>
          <Image src={icons.mascarilla}></Image>
        </ListItem>
        <ListItem>
          <SimpleText color="black">Uso de alcohol líquido en gel</SimpleText>
          <Image src={icons.alcohol}></Image>
        </ListItem>
        <ListItem style={{ margin: "10px 0 10px 0" }}>
          <SimpleText color="black">
            Limpieza y desinfección periódica de espacios
          </SimpleText>
          <Image src={icons.desinfectante}></Image>
        </ListItem>
        <ListItem>
          <SimpleText color="black">Distancia mínima de seguridad</SimpleText>
          <Image src={icons.distanciamiento}></Image>
        </ListItem>
        <ListItem>
          <SimpleText color="black">Duración máxima de la visita</SimpleText>
          <Image src={icons.dMax}></Image>
        </ListItem>
      </List>
    </ProtocolsContainer>
  );
}

export default Protocols;
