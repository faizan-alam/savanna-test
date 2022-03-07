import {
  ApolloClient,
  ApolloProvider as RNApolloProvider,
  ApolloLink,
} from "@apollo/client";
import { createHttpLink, errorLink, localCache } from "../config/apollo";

const httpLink = createHttpLink();

const apolloClient = new ApolloClient({
  link: ApolloLink.from([errorLink, httpLink]),
  connectToDevTools: process.env.NODE_ENV !== "production",
  cache: localCache,
  assumeImmutableResults: true,
});

const ApolloProvider = (props) => {
  return (
    <RNApolloProvider client={apolloClient}>{props.childer}</RNApolloProvider>
  );
};

export default ApolloProvider;
