import { HttpLink } from "@apollo/client/link/http";
import { onError } from "@apollo/client/link/error";
import { InMemoryCache } from "@apollo/client";

import { BASE_GRAPH_URL } from "../constants";

export const createHttpLink = () => {
  return new HttpLink({
    uri: BASE_GRAPH_URL,
  });
};

export const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation }) => {
    if (graphQLErrors) {
      for (const error of graphQLErrors) {
        console.error(
          `[GraphQL error]: Message: ${error.message}, Location: ${error.locations}, Path: ${error.path}`,
          operation,
          response
        );
      }
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`, operation, response);
    }
  }
);

export const localCache = new InMemoryCache();
