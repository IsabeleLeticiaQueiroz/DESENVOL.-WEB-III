import mongoose from "mongoose";

const dbUser = "bbebelequeiroz";
const dbPassword = "GUSFXmCmTUzULDir";
const connect = () => {
    mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.d5syk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
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