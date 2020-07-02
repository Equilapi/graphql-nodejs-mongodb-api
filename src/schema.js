import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'

export const typeDefs = `
    type Query {
        Users: [User]
    }

    type User {
        _id: ID,
        firstname: String!
        lastname: String!
        email: String!
        occupation: String,
        phone: String
        age: Int
        salary: Int
    }
    
    type Mutation {
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
        updateUser(_id: ID, input: UserInput): User
    }

    input UserInput {
        firstname: String!
        lastname: String!
        email: String!
        occupation: String,
        phone: String
        age: Int
        salary: Int
    } 

`

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
}) 

