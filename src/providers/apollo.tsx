"use client";

// The content of this file was copied from the official Apollo Github repository:
// https://www.npmjs.com/package/@apollo/experimental-nextjs-app-support

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
    uri: "https://countries.trevorblades.com/",
    fetchOptions: { cache: "no-store" },
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

/**
 * Wraps the ApolloNextAppProvider component around the given children.
 * The makeClient function is called with no arguments and is expected to return
 * an instance of ApolloClient.
 *
 * This is a convenience wrapper around ApolloNextAppProvider that provides
 * a default makeClient function that will work out of the box with Next.js.
 *
 * @example
 * <ApolloWrapper>
 *   <App />
 * </ApolloWrapper>
 *
 * @param {React.PropsWithChildren} props The props object
 * @returns {JSX.Element} The ApolloNextAppProvider component
 */
export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
