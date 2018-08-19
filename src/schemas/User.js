import { gql } from 'apollo-server';

const User = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    phone: String!
  }
`;

export default User;
