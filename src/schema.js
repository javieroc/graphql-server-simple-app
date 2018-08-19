import { makeExecutableSchema, gql } from 'apollo-server';
import User from './schemas/User';
import resolvers from './resolvers';

const rootQuery = gql`
  type Query {
    users: [User]!
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootQuery, User],
  resolvers,
});

export default schema;
