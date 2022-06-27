import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-eu-west-2.graphcms.com/v2/cl4txlrqm0bat01ue4jtz0uvh/master',
    cache: new InMemoryCache()
})