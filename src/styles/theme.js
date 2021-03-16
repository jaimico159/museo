import { createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
  typography: {
    fontFamily: "GothamNarrowLight",
  },
  palette: {
    primary: {
      main: "#c9a050",
      light: "#fed17e",
      dark: "#957223",
      contrastText: "white",
    },
    secondary: {
      main: "#f5f5f5",
      light: "#ffffff",
      dark: "#c2c2c2",
      contrastText: "#000000",
    },
  },
});

export default theme;
