import React, { FC } from 'react';
import vm from 'vm/mvvm';

const games: FC<any> = ({ viewModel }) => {
	return <>Games</>;
};

export const Games = vm({ viewModelName: 'GamesVM', Component: games });
