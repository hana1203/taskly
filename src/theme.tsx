import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    // laptop: true;
    desktop: true;
  }
}

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: ["'Rubik', sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#E5D1FA",
    },
    secondary: {
      main: "#FFF4D2",
    },
    error: {
      main: "#AD7BE9",
    },
    background: {
      default: "#ECF2FF",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      //   laptop: 1024,
      desktop: 1280,
    },
  },
});

export default theme;
