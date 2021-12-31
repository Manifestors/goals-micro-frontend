import { ThemeProvider } from "styled-components";

const theme = {
  main: {
    colors: {
      softGreyBg:  "rgba(243, 243, 243, 1)",
      softWhiteBg: "rgba(255, 255, 255, 1)",
      softCharcoalBg: "rgba(88, 88, 88, 1)",
      softSweetYellow: "rgba(255, 247, 96, 1)"
    }
  },
  colors: {
    persianGreen: "rgba(254, 254, 254, .8)",
    powderWhite: "rgba(243, 243, 243, 1)",
    lightBlue: "rgba(255, 255, 255, 1)",
    onyx: "rgba(88, 88, 88, 1)",
    lightningYellow: "rgba(255, 247, 96, 1)"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
};

const MainTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      { children }
    </ThemeProvider>
  );
};

export default MainTheme;
