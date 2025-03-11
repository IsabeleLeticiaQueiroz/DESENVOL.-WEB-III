import gameService from "../sevices/gameservice.js";
import {ObjectId} from "mongodb";
// funcao para listar os ojgos
const getAllGames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    res.status(200).json({ games: games }); //retorna o status 200 (que eu sei que deu certo) e o json com a lista dos games
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao buscar os games." });
  }
};
// async e await sao um jeit mais facil e moderno de trabalhar com promises


// funcao para cadastrar os jogos
const createGame = async (req,res) =>{
  try{
    const {title, platform, year, price} = req.body;
    // cadastrando no banco
    await gameService.Create(title, platform, year, price);
    res.sendStatus(201)
  } catch (error){
    console.log(error);
    res.status(500).json({message:"Erro interno do servidor."});
  }
}

// funcao para deletar 
const deleteGame = async (req,res) =>{
  try{
    if(ObjectId.isValid(req.params.id)){
      const id = req.params.id;
      gameService.Delete(id);
      res.sendStatus(204)//no content, exclusao com sucesso
    } else {
      res.sendStatus(400)//bad request, requisicoa mal formada
    }
  } catch (error){
    console.log(error)
    res.status(500).json({error: 'Erro interno do servidor.'})
  }
}
export default {getAllGames, createGame, deleteGame};