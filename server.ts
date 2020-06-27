import { GraphQLServer } from 'graphql-yoga';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const typeDefs = `
  type Query {
    hello: String!
    users: [User]!
  }

  type User {
    id: ID!
    email: String
    name: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello!',
    users: async (root: any, args: any, context: any) => {
      const users = await context.user.findMany();
      console.log(users);
      return users;
    }
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: prisma,
});

server.start({ port: 8000 }, () => {
  console.log('8000 port');
});