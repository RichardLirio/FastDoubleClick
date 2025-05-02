import { app } from "./app";
import { env } from "./env";
import { FileExist } from "./seed";

app
  .listen({
    host: "0.0.0.0",
    port: env.PORT,
  })
  .then(async () => {
    await FileExist("./src/data/data.json"); //verifica se o json ja existe , se não ele cria um db local novo
    console.log(`🚀 HTTP Server is Running on port ${env.PORT}!`);
  });

//instaciando o servidor
