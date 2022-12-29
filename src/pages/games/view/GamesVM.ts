import { action, observable, runInAction } from 'mobx';
import { Service } from 'typedi';
import { AppViewModel } from '@vm';
import type { IEvent } from '../service/IGames';
import { EVENTS } from 'client';

@Service('GamesVM')
export class GamesVM extends AppViewModel {
	@observable games: { [key: string]: IEvent };

	onInit() {
		this.client.watchQuery({ query: EVENTS }).subscribe(({ data }) => this.setGames(data.data));
	}

	@action.bound setGames(data: { [key: string]: IEvent }) {
		runInAction(() => {
			this.games = data;
			console.log(this.games);
		});
	}
}
