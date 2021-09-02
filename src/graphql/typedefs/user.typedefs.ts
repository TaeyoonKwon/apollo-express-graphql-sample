import { gql } from "apollo-server-express";

export default gql`

type User {
  _id: ID!
  name: String!
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

extend type Query {
  users: [User!]!
  userById(_id: ID!): User
}

extend type Mutation {
  createUser(name: String!, description: String): User!
}

`