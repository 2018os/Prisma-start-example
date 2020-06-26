import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    hello: String!
  }

`;

const resolvers = {
  Query: {
    hello: () => 'Hello!'
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start({ port: 8000 }, () => {
  console.log('8000 port');
});