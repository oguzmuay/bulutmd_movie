import { createTheme } from "@mui/material";

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 768,
        between: 900,
        laptop: 1024,
        desktop: 1440,
      },
    },
  });

export default theme;