import { DateTimeResolver } from 'graphql-scalars'
import { Query as UserQuery, Mutation as UserMutation } from './user.resolvers'


export default {
    DateTime: DateTimeResolver,

    Query: {
        ...UserQuery
    },
    Mutation: {
        ...UserMutation
    }

}