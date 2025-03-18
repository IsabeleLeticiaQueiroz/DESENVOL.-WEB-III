// essa é a entidade
// toda entidade no banco tera seu arquivo e nele tera seu schema
import mongoose from "mongoose";

// documento aninhado
// primeiro sempre crie o documento aninhado e depois o que ira recebe-lo
const descriptionSchema = new mongoose.Schema({
  genre: String,
  platform: String,
  rating: String,
});

const gamesSchema = new mongoose.Schema({
  title: String,
  year: Number,
  price: Number,
  descriptions: [descriptionSchema], // aqui estamos dizendo que o campo descriptions é um array de objetos descriptionSchema
});

// criando a colecao GAMES no banco de dados, mesmo eu escrevendo o nome da entidade no singular,
// vai ficar no plural
const Game = mongoose.model("Game", gamesSchema);
export default Game;
// //aqui estamos exportando o model Game
