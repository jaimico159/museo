import { createMuiTheme } from "@material-ui/core/styles";
import yellow from "@material-ui/core/colors/yellow";

const theme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: {
      main: "#f5f5f5",
      light: "#ffffff",
      dark: "#c2c2c2",
      contrastText: "#000000",
    },
  },
});

export default theme;
