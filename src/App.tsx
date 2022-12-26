import React from 'react';
import 'reflect-metadata';
import { Games } from '@core/view';
import { gql, useQuery } from '@apollo/client';
import { AppViewModel, vm } from '@vm';
import { Service } from 'typedi';
import { action, observable, runInAction } from 'mobx';
import type { IEvent } from '@pages/games/service/IGames';

export const GET_FOOTBALL = gql`
	query fetchLine {
		line {
			football
		}
	}
`;

@Service('AppVM')
export class AppVM extends AppViewModel {
	@observable data: { [key: string]: IEvent };
	@observable count: number = 0;

	@action setData(data: { [key: string]: IEvent }) {
		runInAction(() => {
			this.data = data;
			this.count++;
		});
	}
	getData = () => this.data;
}

interface AppProps {
	viewModel: AppVM;
}

const AppComponent: React.FC<AppProps> = ({ viewModel }) => {
	useQuery(GET_FOOTBALL, {
		pollInterval: 1000,
		onCompleted: ({ line }) => {
			if (line.football) {
				viewModel.setData(line.football);
			}
		},
	});

	return <Games />;
};

export const App = vm({ viewModelName: 'AppVM', Component: AppComponent });
