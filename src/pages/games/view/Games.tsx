import React, { FC } from 'react';
import { ViewProps, ViewType, vm } from '@vm';
import { GamesVM } from './GamesVM';
import { IEvent } from '../service/IGames';

export interface GamesProps extends ViewProps<GamesVM> {
	data?: { [key: string]: IEvent };
}

const GamesComponent: FC<GamesProps> = ({ viewModel }) => {
	console.log(viewModel.games);
	return (
		<>
			{Object.keys(viewModel.games || {})?.map((item: string) => (
				<div key={item}>{item}</div>
			))}
		</>
	);
};

export const Games: ViewType<GamesProps> = vm({ viewModelName: 'GamesVM', Component: GamesComponent });
