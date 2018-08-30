import { gql } from 'apollo-server';

const User = gql`
  type User {
    _id: ID!
    email: String!
    firstName: String!
    lastName: String!
    phone: String!
    photo: String!
    lifePoint: String!
    createdAt: String!
    updatedAt: String!
  }

  type Auth {
    token: String
    user: User
  }

  input UserUpdated {
    email: String!
    firstName: String
    lastName: String
    phone: String
    photo: String
    lifePoint: String
  }

  input SignInData {
    email: String!
    password: String!
  }

  input SignUpData {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    phone: String!
  }
`;

export default User;
