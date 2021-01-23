const gql = require('graphql-tag')
const { ApolloServer } = require('apollo-server')

// TypeDefs
const typeDefs = gql`
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User
  }
`

const resolvers = {
  Query: {
    me() {
      return {
        email: 'yoda@graphql.com',
        avatar: 'https://yoda.png',
        friends: [],
      }
    },
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen(4000)
  .then(() => {
    console.log('Server is up and running on : 4000')
  })
  .catch((err) => console.log(err))
