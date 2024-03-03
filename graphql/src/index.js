import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { typeDefs } from './schemas/index.js';
import { resolvers } from './resolvers/index.js';
import connectDB from './utils/db/index.js';
import _colors from 'colors';
import express from 'express';

// setup dotenv and get port
dotenv.config();

// setup server
const startServer = async () => {
  // connect to mongodb atlas
  await connectDB();

  // create apolloserver with typedefs and resolvers
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // start server before applying middleware
  await server.start();

  // add express to middleware
  const app = express();
  server.applyMiddleware({ app });

  // start listening on port
  const port = process.env.PORT || 3300;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/graphql`);
  });
};

await startServer();
