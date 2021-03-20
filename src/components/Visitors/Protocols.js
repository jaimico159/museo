import styled from "styled-components";
import { icons } from "../../constants/constants";

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
      <h2>PROTOCOLO DE SEGURIDAD E HIGIENE</h2>
      <List>
        <ListItem>
          <p>Uso obligatorio de mascarilla</p>
          <Image src={icons.mascarilla}></Image>
        </ListItem>
        <ListItem>
          <p>Uso de alcohol líquido en gel</p>
          <Image src={icons.alcohol}></Image>
        </ListItem>
        <ListItem style={{ margin: "10px 0 10px 0" }}>
          <p>Limpieza y desinfección periódica de espacios</p>
          <Image src={icons.desinfectante}></Image>
        </ListItem>
        <ListItem>
          <p>Distancia mínima de seguridad</p>
          <Image src={icons.distanciamiento}></Image>
        </ListItem>
        <ListItem>
          <p>Duración máxima de la visita</p>
          <Image src={icons.dMax}></Image>
        </ListItem>
      </List>
    </ProtocolsContainer>
  );
}

export default Protocols;
