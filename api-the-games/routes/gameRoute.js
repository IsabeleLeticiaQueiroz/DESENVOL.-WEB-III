import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

// endpoint para listat todos os games
gameRoutes.get("/games", gameController.getAllGames);
// endpoint para cadastrar um jogo
gameRoutes.post("/games", gameController.createGame)
export default gameRoutes;
// endpoint para excluir o jogo
gameRoutes.delete("/games/:id", gameController.deleteGame);