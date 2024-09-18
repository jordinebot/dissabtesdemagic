import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ReactElement } from "react";

export interface ILeagueTableProps {
  leagueId: string;
}

function createData(
  player: string,
  wins: number,
  losses: number,
  draws: number = 0
) {
  const rating = (wins / (wins + losses + draws)) * 100;
  return { player, rating, wins, losses, draws };
}

const calculateMedian = (numbers: number[]): number => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);

  return sorted.length % 2 !== 0
    ? sorted[mid]
    : (sorted[mid - 1] + sorted[mid]) / 2;
};

const getMedal = (index: number) => {
  switch (index) {
    case 0:
      return "🥇";
    case 1:
      return "🥈";
    case 2:
      return "🥉";
    default:
      return "";
  }
};

const getRowStyle = (index: number) => {
  switch (index) {
    case 0:
      return { backgroundColor: "#fcf3cf" };
    case 1:
      return { backgroundColor: "#eaecee" };
    case 2:
      return { backgroundColor: "#fbeee6" };
    default:
      return {};
  }
};

const getColorForGames = (totalGames: number, medianGames: number): string => {
  const deviation = Math.abs((totalGames - medianGames) / medianGames);
  console.log(deviation);
  if (deviation > 0.3) {
    return "#c0392b"; // RED
  } else if (deviation > 0.15) {
    return "#f1c40f"; // YELLOW
  } else {
    return "#2ecc71"; // GREEN
  }
};

export const LeagueTable = ({ leagueId }: ILeagueTableProps): ReactElement => {
  console.log(leagueId);
  const rows = [
    createData("DKO", 22, 24),
    createData("David", 27, 23, 1),
    createData("Roger", 43, 40),
    createData("Jordi", 32, 15, 1),
    createData("Dani", 19, 39),
  ];

  rows.sort((a, b) => b.rating - a.rating);

  // Calculate total games played
  const totalGamesArray = rows.map((row) => row.wins + row.losses);

  // Calculate the median games played
  const medianGames = calculateMedian(totalGamesArray);

  return (
    <Grid container spacing={2}>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Jugador</TableCell>
              <TableCell align="center">%</TableCell>
              <TableCell align="right">P ({medianGames})</TableCell>
              <TableCell align="right">V</TableCell>
              <TableCell align="right">D</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => {
              const totalGames = row.wins + row.losses;
              const color = getColorForGames(totalGames, medianGames);
              const style = getRowStyle(index);
              return (
                <TableRow key={row.player} style={style}>
                  <TableCell component="th" scope="row">
                    {getMedal(index)} {row.player}
                  </TableCell>
                  <TableCell align="center">{row.rating.toFixed(1)}%</TableCell>
                  <TableCell
                    align="right"
                    style={{ color, fontWeight: "bold" }}
                  >
                    {totalGames}
                  </TableCell>
                  <TableCell align="right">{row.wins}</TableCell>
                  <TableCell align="right">{row.losses}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      Darrera actualització: 07-09-2024
    </Grid>
  );
};
