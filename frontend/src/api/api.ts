import { getSdk } from "./generated";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient("http://localhost:1337/graphql", {
  headers: {},
});
const api = getSdk(client);
export { api };
