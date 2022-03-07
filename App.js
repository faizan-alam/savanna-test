import React from "react";
import ThemeProvider from "./src/provider/ThemeProvider";
import NavigationProvider from "./src/provider/NavigationProvider";
import ApolloProvider from "./src/provider/ApolloProvider";

export default function App() {
  return (
    <ApolloProvider>
      <ThemeProvider>
        <NavigationProvider />
      </ThemeProvider>
    </ApolloProvider>
  );
}
