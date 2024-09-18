import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Navigation } from "components";
import theme from "theme";

export const Home = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Outlet />
      <Navigation />
    </ThemeProvider>
  );
};
