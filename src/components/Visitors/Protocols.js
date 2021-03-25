import styled from "styled-components";
import { icons } from "../../constants/constants";
import Title from "../../shared/Title/Title";
import SimpleText from "../../shared/SimpleText/SimpleText";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation();
  return (
    <ProtocolsContainer>
      <Title color="black" space="3px" style={{ height: 60 }}>
        {t("visitors-protocols.title")}
      </Title>
      <List>
        <ListItem>
          <SimpleText color="black">{t("visitors-protocols.masks")}</SimpleText>
          <Image src={icons.mascarilla}></Image>
        </ListItem>
        <ListItem>
          <SimpleText color="black">
            {t("visitors-protocols.alcohol")}
          </SimpleText>
          <Image src={icons.alcohol}></Image>
        </ListItem>
        <ListItem style={{ margin: "10px 0 10px 0" }}>
          <SimpleText color="black">
            {t("visitors-protocols.cleaning")}
          </SimpleText>
          <Image src={icons.desinfectante}></Image>
        </ListItem>
        <ListItem>
          <SimpleText color="black">
            {t("visitors-protocols.distance")}
          </SimpleText>
          <Image src={icons.distanciamiento}></Image>
        </ListItem>
        <ListItem>
          <SimpleText color="black">
            {t("visitors-protocols.duration")}
          </SimpleText>
          <Image src={icons.dMax}></Image>
        </ListItem>
      </List>
    </ProtocolsContainer>
  );
}

export default Protocols;
