import React from 'react';
import 'reflect-metadata';
import { Games } from '@core/view';
import { gql, useQuery } from '@apollo/client';
import { EVENTS } from 'client';

export const GET_FOOTBALL = gql`
	query fetchLine {
		line {
			football
		}
	}
`;

export const App: React.FC = () => {
	const { client } = useQuery(GET_FOOTBALL, {
		pollInterval: 1000,
		onCompleted: ({ line }) => {
			if (line.football) {
				client.cache.writeQuery({ query: EVENTS, data: { data: line.football } });
			}
		},
	});
	return <Games />;
};
