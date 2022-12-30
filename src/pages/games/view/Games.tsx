import React, { FC } from 'react';
import { ViewProps, ViewType, vm } from '@vm';
import { GamesVM } from './GamesVM';
import { IEvent } from '../service/IGames';
import styled from 'styled-components';

export interface FlexProps {
	align?: string;
	justify?: string;
}

// prettier-ignore
export const VFlex = styled.div<FlexProps>`
	display        : flex;
	flex-direction : column;
	align-content  : ${({ align })   => align};
	justify-content: ${({ justify }) => justify};
`;

// prettier-ignore
export const HFlex = styled.div<FlexProps>`
	display        : flex;
	flex-direction : row;
	align-content  : ${({ align })   => align};
	justify-content: ${({ justify }) => justify};
`;

export interface GamesProps extends ViewProps<GamesVM> {
	data?: { [key: string]: IEvent };
}

export interface GameProps extends GamesProps {
	item: IEvent;
}

const Game: FC<GameProps> = ({ viewModel, item }) => {
	return <div>{item.timer}</div>;
};

const GamesComponent: FC<GamesProps> = ({ viewModel }) => {
	return (
		<VFlex>
			{Object.keys(viewModel.games || {})?.map((item: string) => (
				<Game key={item} viewModel={viewModel} item={viewModel.games[item]} />
			))}
		</VFlex>
	);
};

export const Games: ViewType<GamesProps> = vm({ viewModelName: 'GamesVM', Component: GamesComponent });
