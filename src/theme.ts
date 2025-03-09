import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5C00",
    },
    secondary: {
      main: "#FF5C00",
    },
  },
  typography: {
    fontFamily: "Inter, Montserrat, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Montserrat, sans-serif",
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
