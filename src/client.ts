import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache } from '@apollo/client';

const uri = 'https://f-live-counter.vercel.app/api';
// const uri = "http://localhost:4000/api";
const cache = new InMemoryCache();
const httpLink = new HttpLink({ uri });

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
