import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import schema from './schema';
import 'dotenv/config';

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

const server = new ApolloServer({
  schema,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
