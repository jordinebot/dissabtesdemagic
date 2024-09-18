import { LeagueDetails, LeaguesList, PageLayout } from "components";
import { ReactElement } from "react";
import { useParams } from "react-router-dom";

export const Leagues = (): ReactElement => {
  const { leagueId } = useParams<{ leagueId: string }>();

  const content = leagueId ? (
    <LeagueDetails leagueId={leagueId} />
  ) : (
    <LeaguesList />
  );

  const title = leagueId ? `Lliga ${leagueId}` : "Lligues";

  return <PageLayout title={title}>{content}</PageLayout>;
};
