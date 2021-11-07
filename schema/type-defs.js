const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favoriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    year: Int!
    premiered: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input createUserInput {
    name: String!
    username: String!
    age: Int = 18
    nationality: Nationality = UNITED_STATES
  }

  type Mutation {
    createUser(input: createUserInput!): User
  }

  enum Nationality {
    CANADA
    GERMANY
    CHILE
    BRAZIL
    UNITED_STATES
  }
`;

module.exports = { typeDefs };
