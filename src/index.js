import { ApolloServer } from 'apollo-server';
import mongoose from 'mongoose';
import schema from './schema';
import { verifyToken } from './services';
import 'dotenv/config';

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true },
);

const getUser = (req) => {
  const token = req.headers['x-token'];
  return token ? verifyToken(token, process.env.SECRET) : null;
};

const server = new ApolloServer({
  schema,
  introspection: true,
  context: async ({ req }) => ({
    user: getUser(req),
    secret: process.env.SECRET,
  }),
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
