import { Add } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { SelectDeck, SelectPlayer, SelectWinner } from "components/selectors";
import { ReactElement, useState } from "react";

export interface IAddGameToLeagueProps {
  leagueId: string;
}

export const AddGameToLeague = ({
  leagueId,
}: IAddGameToLeagueProps): ReactElement => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
    handleClose();
  };
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", right: 16, top: 16 }}
        onClick={handleClick}
      >
        <Add />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>Nova partida</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <SelectPlayer label="Jugador 1" name="player1" />
              <br />
              <SelectDeck label="Baralla 1" name="deck1" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <SelectPlayer label="Jugador 2" name="player2" />
              <br />
              <SelectDeck label="Baralla 2" name="deck2" />
            </Grid>
            <Grid size={{ xs: 12 }}>
              <SelectWinner />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel·la</Button>
          <Button type="submit">Afegeix</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
