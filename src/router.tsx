import { createBrowserRouter } from "react-router-dom";
import { Decks, Error, Home, Leagues, Players, Tournaments } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "lligues/:leagueId?",
        element: <Leagues />,
      },
      {
        path: "tornejos/:tournamentId?",
        element: <Tournaments />,
      },
      {
        path: "baralles/:deckId?",
        element: <Decks />,
      },
      {
        path: "jugadors/:playerId?",
        element: <Players />,
      },
    ],
  },
]);

export default router;
