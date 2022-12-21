import { Service } from 'typedi';
import { AppViewModel } from 'vm/mvvm';

@Service('GamesVM')
export class GamesVM extends AppViewModel {}
