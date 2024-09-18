import { Container, Typography } from "@mui/material";
import { PropsWithChildren, ReactElement } from "react";

export interface IPageLayoutProps extends PropsWithChildren {
  title: string;
}

export const PageLayout = ({
  title,
  children,
}: IPageLayoutProps): ReactElement => {
  return (
    <Container>
      <Typography variant="titol">{title}</Typography>
      {children}
    </Container>
  );
};
