const typeDefs = `#graphql

type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    age: Int!
    active: Boolean
}

type Query {
    users: [User]
}
`


export default typeDefs;