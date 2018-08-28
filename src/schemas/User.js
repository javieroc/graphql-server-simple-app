import { gql } from 'apollo-server';

const User = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    phone: String!
    lifePoint: String!
    createdAt: String!
    updatedAt: String!
  }

  input UserUpdated {
    email: String!
    firstName: String
    lastName: String
    phone: String
    lifePoint: String
  }
`;

export default User;
