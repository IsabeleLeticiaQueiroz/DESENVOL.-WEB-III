// essa é a entidade
// toda entidade no banco tera seu arquivo e nele tera seu schema
import mongoose from "mongoose";
const gamesSchema = new mongoose.Schema({
  title: String,
  year: Number,
  platform: String,
  price: Number,
});

// criando a colecao GAMES no banco de dados, mesmo eu escrevendo o nome da entidade no singular,
// vai ficar no plural
const Game = mongoose.model("Game", gamesSchema);
export default Game;
// //aqui estamos exportando o model Game
