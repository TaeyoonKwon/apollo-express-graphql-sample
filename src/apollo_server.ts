import { ApolloServer } from "apollo-server-express";
import depthLimit from "graphql-depth-limit";
import typeDefs from "@graphql/typedefs";
import resolvers from "@graphql/resolvers";
import { context } from "@graphql/context";


const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(4)],
  introspection: true,
  context
});

export default apolloServer;
