# Server Side GraphQL using Node

GraphQL is basically a spec that describes a declarative query language that your clients can use to ask an API for the exact data that they want . GraphQL achieves this by creating strongly typed Schema for you API ( gives ultimate flexibility )

Bascially on the server side ,GraphQL is compose of these common terms :-

- **Type Definitions**
- **Resolvers**
- **Query Definitions**
- **Mutation Definitions**
- **Composition**
- **Schema**

On the Client Side ,GraphQL is composed of these common terms :-

- **Queries**
- **Mutations**
- **Fragments**

## Where does GraphQL fit in ?

The graphQL server can fit into different scenarios example

- A server with DB connected
- A GraphQL server as layer in front of many 3rd party services and connects them all in one GraphQL API
- A hybrid approach where GraphQL server has a connected DB and also communicates with 3rd party services

## Key Parts of a GraphQL schema

- **Types -** a construct defining a shape with fields
- **Fields -** keys on a Type that have a name and a value type
- **Scalars -** primitive value type built into GraphQL
- **Query -** type that defines how clients can access data
- **Mutation -** type that defines how clients can modify or create data

## Queries and Resolvers

Below are the basic steps that are followed while creating Queries

- Create Query Type in Schema using SDL
- Add fields to the Query Type
- Create resolvers for that fields

```
  type User {
    email: String!
    avatar: String
    friends: [User]!
  }

  type Query {
    me: User
  }
```

Resolvers are responsible from returning the values for fields that exists on types in a schema . The execution of a resolver is dependent on the incoming client queries

Below are the things to keep in mind about resolvers :-

- Resolver name must match the exact field name on the schema type
- It must return the value type declared for the matching field
- Resolvers can be async
- Can retrieve data from any source

## In GraphQL Server + Resolvers = Server

Basically to create a minimum server , we need a Query type with a field and a resolver for that field
