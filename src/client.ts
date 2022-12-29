import { ApolloClient, ApolloLink, concat, gql, HttpLink, InMemoryCache } from '@apollo/client';
const { API_URL } = process.env;

const uri = API_URL;
// const uri = "http://localhost:4000/api";
const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri });

export const EVENTS = gql`
	{
		data @client
	}
`;

export const queryLoggedIn = {
	query: EVENTS,
	data: { data: {} },
};
cache.writeQuery(queryLoggedIn);

const authMiddleware = new ApolloLink((operation, forward) => {
	operation.setContext(({ headers = {} }) => ({
		headers: {
			...headers,
		},
	}));

	return forward(operation);
});

export const client = new ApolloClient({
	link: concat(authMiddleware, httpLink),
	uri,
	cache,
	defaultOptions: {
		watchQuery: {
			nextFetchPolicy(currentFetchPolicy) {
				if (currentFetchPolicy === 'network-only' || currentFetchPolicy === 'cache-and-network') {
					return 'cache-first';
				}
				return currentFetchPolicy;
			},
		},
	},
});
