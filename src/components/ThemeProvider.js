import { ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";

const themeOverrides = {
  typography: {
    fontFamily: '"Share Tech", sans-serif',
    fontWeightRegular: "bold",
  },
  palette: {
    primary: {
      main: "#000000",
    },
  },
  shape: {
    borderRadius: 0,
  },
};

const theme = createTheme(themeOverrides);

const AppThemeProvider = (props) => <ThemeProvider theme={theme} {...props} />;

export default AppThemeProvider;
