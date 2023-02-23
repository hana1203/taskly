import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    // tablet: true;
    // laptop: true;
    desktop: true;
  }
}

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#fff123",
    },
    background: {
      default: "#fff",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      //   tablet: 640,
      //   laptop: 1024,
      desktop: 1280,
    },
  },
});

export default theme;
