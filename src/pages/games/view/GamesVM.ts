import { action, observable, reaction, runInAction } from 'mobx';
import { Inject, Service } from 'typedi';
import { AppViewModel } from '@vm';
import type { IEvent } from '../service/IGames';
import { AppVM } from 'App';

@Service('GamesVM')
export class GamesVM extends AppViewModel {
	@Inject('AppVM') appVM: AppVM;
	@observable games: { [key: string]: IEvent };

	onInit() {
		reaction(
			() => this.appVM.count,
			() => this.setGames()
		);
	}

	@action setGames() {
		runInAction(() => {
			this.games = this.appVM.data;
			console.log(this.games);
		});
	}
}
