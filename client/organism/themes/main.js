import { ThemeProvider } from "styled-components";

const theme = {
  main: {
    colors: {
      softGreyBg:  "rgba(243, 243, 243, 1)",
      softWhiteBg: "rgba(255, 255, 255, 1)",
      softCharcoalBg: "rgba(88, 88, 88, 1)",
      softSweetYellow: "rgba(255, 247, 96, 1)",
      softRed: "rgba(255, 59, 59, 1)"
    }
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "9.6px",
    medium: "12px",
    large: "16px"
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
