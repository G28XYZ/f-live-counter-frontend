import React, { FC, useEffect } from 'react';
import { ViewProps, ViewType, vm } from '@vm';
import { GamesVM } from './GamesVM';
import { IEvent } from '../service/IGames';

export interface GamesProps extends ViewProps<GamesVM> {
	data?: { [key: string]: IEvent };
}

const GamesComponent: FC<GamesProps> = ({ viewModel }) => {
	useEffect(() => {}, [viewModel.appVM.count]);

	return (
		<>
			{Object.keys(viewModel.games || {})?.map((item: string) => (
				<div key={item}>{item}</div>
			))}
		</>
	);
};

export const Games: ViewType<GamesProps> = vm({ viewModelName: 'GamesVM', Component: GamesComponent });
