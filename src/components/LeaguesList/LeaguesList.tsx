import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

export const LeaguesList = (): ReactElement => {
  return (
    <List>
      <Link to="/lligues/vintage">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Vintage" />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link to="/lligues/pauper">
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText primary="Pauper" />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
};
