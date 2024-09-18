import { PageLayout } from "components";
import { ReactElement, useEffect } from "react";

export const Players = (): ReactElement => {
  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch("http://localhost:5050/api/players");
      console.log(await response.json());
    };
    fetchPlayers();
  }, []);
  return <PageLayout title="Jugadors" />;
};
