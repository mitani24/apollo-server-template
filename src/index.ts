import fs from "fs";
import path from "path";
import { ApolloServer, gql } from "apollo-server";
import TrackAPI from "./datasources/track-api";
import resolvers from "./resolvers";

const typeDefs = fs
  .readFileSync(path.join(__dirname, "../graphql/schema.graphql"))
  .toString();

const server = new ApolloServer({
  typeDefs: gql`
    ${typeDefs}
  `,
  dataSources() {
    return { trackAPI: new TrackAPI() };
  },
  resolvers,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
