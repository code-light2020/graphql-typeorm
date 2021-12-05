import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import { connect } from "./config/typeorm";
import { HelloWordResolver } from "./resolvers/helloworldResolver";
import { UserResolver } from "./resolvers/userResolver";
import { ClasseResolver} from "./resolvers/classeResolver";

async function bootstrap() {
  await connect();
  const schema = await buildSchema({
    resolvers: [HelloWordResolver,UserResolver,ClasseResolver],
    emitSchemaFile:true
  });

  const server = new ApolloServer({
    schema,
  });
  const app = express();
  await server.start();
  server.applyMiddleware({ app,path:"/api" });
  app.listen(process.env.PORT || 3333, () => {
    console.log(`App is runnig`);
  });
}

bootstrap();
