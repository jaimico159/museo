import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import styled from "styled-components";
import Title from "../../shared/Title";
import { Fragment } from "react";
import SimpleText from "../../shared/SimpleText";
import Calendar from "./subcomponents/Calendar";

const MainContainer = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  justifcontent: center;
  alignitems: center;
`;

function CalendarSection() {
  return (
    <MainContainer>
      <Calendar></Calendar>
    </MainContainer>
  );
}

export default CalendarSection;
