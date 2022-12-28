import React, { useEffect, useMemo, useState, ComponentType } from 'react';
import { makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import 'reflect-metadata';
import Container from 'typedi';
import { GET_FOOTBALL } from 'App';
import { ApolloClient, useQuery } from '@apollo/client';
import { client, EVENTS } from 'client';

interface IVM {
	viewModelName: string;
	Component: React.FC<any>;
}

export interface ViewProps<T extends AppViewModel> {
	viewModel: Partial<T>;
}

export type ViewType<T extends ViewProps<AppViewModel>> = ComponentType<Omit<T, keyof ViewProps<AppViewModel>>>;

export class AppViewModel {
	@observable parent: any;
	@observable client: ApolloClient<any>;

	init(): void {
		this.onInit();
		makeObservable(this);
	}
	unmount(): void {
		this.onUnmount();
	}
	protected onInit(): void {}
	protected onUnmount(): void {}
}

export const vm = ({ viewModelName, Component }: IVM) => {
	return (props: any) => {
		const [init, setInit] = useState(false);
		const ObserverComponent = useMemo(() => observer(Component), []);
		const VMInstance = useMemo(() => Container.get(viewModelName) as AppViewModel, []);

		useEffect(() => {
			if (!init) {
				VMInstance.client = client;
				VMInstance.init();
				setInit(true);
			}
		});
		useEffect(() => () => VMInstance.unmount(), []);
		return init ? <ObserverComponent viewModel={VMInstance} {...props} /> : null;
	};
};
