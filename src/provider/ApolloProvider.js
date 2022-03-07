import {
  ApolloClient,
  ApolloProvider as RNApolloProvider,
  InMemoryCache,
} from "@apollo/client";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://profound-marmot-29.hasura.app/v1/graphql",
  cache,
});
const ApolloProvider = (props) => {
  return <RNApolloProvider client={client}>{props.children}</RNApolloProvider>;
};

export default ApolloProvider;
