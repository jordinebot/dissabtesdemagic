import express from "express";
import cors from "cors";
import { db } from "./firebase";
import { createPlayer, getPlayers } from "./models/players";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/players", async (req, res) => {
  const players = await getPlayers(db);
  res.json({ players });
});

app.post("/api/players", async (req, res) => {
  const { name } = req.body;
  const player = await createPlayer(db, name);
  res.json({ message: "Player added", player });
});

app.listen(5050, () => {
  console.log("server running on localhost:5050");
});
