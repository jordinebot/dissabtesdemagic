import { ReactElement, SyntheticEvent } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  EmojiEvents,
  WorkspacePremium,
  AccountCircle,
  Inventory,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.css";

const links = ["lligues", "tornejos", "baralles", "jugadors"];

const getCurrentPage = (pathname: string): number => {
  const index = links.findIndex((link) => pathname.includes(`/${link}`));
  return index === -1 ? 0 : index;
};

export const Navigation = (): ReactElement => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const page = getCurrentPage(pathname);
  const handleChange = (_event: SyntheticEvent, page: number) => {
    navigate(`/${links[page]}`);
  };
  return (
    <BottomNavigation
      showLabels
      value={page}
      onChange={handleChange}
      className={styles.navigation}
    >
      <BottomNavigationAction label="Lligues" icon={<EmojiEvents />} />
      <BottomNavigationAction label="Tornejos" icon={<WorkspacePremium />} />
      <BottomNavigationAction label="Baralles" icon={<Inventory />} />
      <BottomNavigationAction label="Jugadors" icon={<AccountCircle />} />
    </BottomNavigation>
  );
};
