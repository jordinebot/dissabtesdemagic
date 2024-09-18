import { Typography } from "@mui/material";
import { LeagueTable } from "components";
import { AddGameToLeague } from "components/buttons/AddGameToLeague";
import { ReactElement } from "react";

export interface ILeagueDetailsProps {
  leagueId: string;
}

export const LeagueDetails = ({
  leagueId,
}: ILeagueDetailsProps): ReactElement => {
  return (
    <>
      <AddGameToLeague leagueId={leagueId} />
      <Typography variant="subtitol">Classificació jugadors</Typography>
      <LeagueTable leagueId={leagueId} />
      <Typography variant="subtitol">Classificació baralles</Typography>
      <LeagueTable leagueId={leagueId} />
    </>
  );
};
