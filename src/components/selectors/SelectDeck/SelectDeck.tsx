import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { ReactElement } from "react";

export interface ISelectDeckProps {
  name: string;
  label: string;
}

export const SelectDeck = ({ name, label }: ISelectDeckProps): ReactElement => {
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel>{label}</InputLabel>
      <Select name={name} label={label} onChange={handleChange}>
        <MenuItem value="Esper Affinity">Esper Affinity</MenuItem>
        <MenuItem value="Rot and Roll">Rot and Roll</MenuItem>
        <MenuItem value="Izzet Energy Drink">Izzet Energy Drink</MenuItem>
        <MenuItem value="Tolarian Brainstorm">Tolarian Brainstorm</MenuItem>
        <MenuItem value="Jo Death Brigade">Jo Death Brigade</MenuItem>
      </Select>
    </FormControl>
  );
};
