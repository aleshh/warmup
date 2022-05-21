import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

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
