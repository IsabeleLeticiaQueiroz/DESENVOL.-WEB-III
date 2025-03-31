import mongoose from "mongoose";

const dbUser = "bbelequeiroz";
const dbPassword = "B5MpQSlgxI90HITs";
const connect = () => {
    mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.rhsls52.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
      
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongodb.");
    });
    connection.on("open", () => {
        console.log("Conectado com o mongodb.");
    });
};
connect();
export default mongoose;