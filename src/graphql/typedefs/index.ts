import { gql } from "apollo-server-express"
import userTypeDefs from "./user.typedefs"

const baseTypeDefs = gql`
  scalar DateTime

  type Query

  type Mutation
`

export default [
    baseTypeDefs,
    userTypeDefs,
]