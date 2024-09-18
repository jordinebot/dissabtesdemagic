import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { ReactElement } from "react";

export interface ISelectPlayerProps {
  name: string;
  label: string;
}

export const SelectPlayer = ({
  name,
  label,
}: ISelectPlayerProps): ReactElement => {
  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value);
  };
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select name={name} label={label} onChange={handleChange}>
        <MenuItem value="Roger">Roger</MenuItem>
        <MenuItem value="David">David</MenuItem>
        <MenuItem value="Jordi">Jordi</MenuItem>
        <MenuItem value="DKO">DKO</MenuItem>
        <MenuItem value="Dani">Dani</MenuItem>
      </Select>
    </FormControl>
  );
};
