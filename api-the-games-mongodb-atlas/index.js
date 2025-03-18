import express from "express";
import mongoose from './config/db-connection.js';
// importando o model
import Games from "./models/games.js";
const app = express();
//criando uma variavel pro express

// importando as rotas
import gameRoutes from "./routes/gameRoute.js";

//configuracao do express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/",gameRoutes);
// iniciando conexao com o banco de dados mongo db
mongoose.connect("mongodb://127.0.0.1:27017/api-thegames");
// vamos trabalhar com arquitetura mvc tambem (models, views, controllers)

//ROTA PRINCIPAL
app.get("/", (req, res) => {
  //   res.send("API iniciada com sucesso!");
  const games = [
    {
      title: "Game 1",
      year: 2020,
      platform: "PC",
      price: 20.99,
    },
    {
      title: "Game 2",
      year: 2023,
      platform: "Mobile",
      price: 4.5,
    },
  ];
  res.json(games); //enviando os dados em json
});

//iniciar servidor
const port = 4001;
//criando variavel para a porta
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localhost:${port}.`);
  }
});
// agora trabalhando com bdrn nos usamos o mongoose ao inves do sequelize, ja q o sequelize e para sql e o mongoose e para mongo db
// alem de que sequelize é pra banco de dados relacional e o mongoose é pra banco de dados nao relacional
