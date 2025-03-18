import Game from "../models/games.js";
class gameService {
// antigamente tinhamos as promises 
// que era Game.find().then(games=> { //sucesso }).catch(error=>{//falha})
// agora com o async await:
// funcao pra listar jogos
    async getAll(){
        try{
            const games = await Game.find(); //vai pegar a info do banco 
            return games; //retorna a info
        } catch (error){
            console.log(error)//retorna o erro
        }
    }
// funcao para cadastrar jogos
async Create(title, year, price, descriptions){
    try{
        const newGame= new Game({
            // posso colcar o nome apenas uma vez pq os nomes se repetem (tittle:tittle)
            title, 
            year,
            price,
            descriptions,
        });
        await newGame.save()
    } catch (error){
    console.log(error)
}
}
// funcao pra deletar os jogos
async Delete(id){
    try{
        await Game.findByIdAndDelete(id)
        console.log(`Game com a id: ${id} foi excluido.`)
    } catch (error){
        console.log(error)
    }
}

}

export default new gameService; //exporta a classe gameService
// se é uma classe, tem o new, se é uma funcao, nao tem o new
// dentro do service tera as funcoes para manipular o banco de dados
// e dentro do controller tera as funcoes para manipular o service
// e dentro do routes tera as funcoes para manipular o controller
// e dentro do index tera as funcoes para manipular o routes
// e o index é o arquivo principal e que inicia o servidor

