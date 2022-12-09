import { getSdk } from "./generated";
import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(`${process.env.STRAPI_URL}/graphql`, {
  headers: {},
});
const api = getSdk(client);
export { api };
