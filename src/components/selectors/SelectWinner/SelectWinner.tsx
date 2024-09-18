import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ReactElement } from "react";

export interface ISelectWinnerProps {}

export const SelectWinner = ({}: ISelectWinnerProps): ReactElement => {
  return (
    <FormControl>
      <FormLabel>Guanyador</FormLabel>
      <RadioGroup row name="winner">
        <FormControlLabel value="1" control={<Radio />} label="Jugador 1" />
        <FormControlLabel value="0" control={<Radio />} label="Empat" />
        <FormControlLabel value="2" control={<Radio />} label="Jugador 2" />
      </RadioGroup>
    </FormControl>
  );
};
