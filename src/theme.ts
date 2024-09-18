import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    titol: React.CSSProperties;
    subtitol: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    titol?: React.CSSProperties;
    subtitol?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    titol: true;
    subtitol: true;
  }
}

const theme = createTheme({
  typography: {
    titol: {
      display: "block",
      fontWeight: 800,
      textTransform: "uppercase",
      margin: "1em",
      textAlign: "center",
      fontSize: "1.5em",
    },
    subtitol: {
      display: "inline-block",
      fontWeight: 600,
      fontSize: "1.25em",
      marginTop: "1em",
      marginBottom: "0.5em",
    },
  },
});

export default theme;
