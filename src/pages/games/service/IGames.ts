export interface IEvent {
	id: number;
	parentId: number;
	number: number;
	startTime: string;
	startTimeTimestamp: number;
	sportId: number;
	sportName: string;
	skId: number;
	skName: string;
	regionId: number;
	team1Id: number;
	team2Id: number;
	team1: string;
	team2: string;
	statisticsType: string;
	name: string;
	place: string;
	priority: number;
	kind: number;
	rootKind: number;
	sortOrder: string;
	timer: string;
	timerSeconds: number;
	timerDirection: number;
	timerTimestamp: number;
	timerTimestampMsec: number;
	score: string;
	scoreComment: string;
	translationProviders: number[];
	allFactorsCount: number;
	subcategories: ISubcategoriesItem[];
	liveEventInfo: ILiveEventInfo;
	line: ILine[];
}

export interface ILine {
	[key: string]: {
		num: number;
		type: number;
		name: string;
		nameParametered: string;
		nameParamText: string;
		quotes: ILineQuote[];
		score: string;
	};
}

export interface ILineQuote {
	factorId: number;
	flexParam: boolean;
	name: string; // "М (number)"
	nameParametered: string; // "М (%P)"
	value: number;
	quote: string;
	pValue: number;
	p: string;
}

export interface ILiveEventInfo {
	timer: string;
	timerSeconds: number;
	timerDirection: number;
	timerTimestampMsec: number;
	scoreFunction: string;
	scoreComment: string;
	scores: [{ c1: string; c2: string }][];
	subscores: ISubScores[];
}

export interface ISubScores {
	kindId: string;
	kindName: string;
	alias: string;
	c1: string;
	c2: string;
	comment: string;
}

export interface ISubcategoriesItem {
	num: number;
	type: number;
	name: string;
	nameParametered: string;
	nameParamText: string;
	quotes: ISubcategoriesQuote[];
}

export interface ISubcategoriesQuote {
	factorId: number;
	name: string;
	nameParametered: string;
	value: number;
	quote: string;
}

export interface ICalcTime {
	[key: string]: {
		totalTime: string;
		oneTime: string;
	};
}

export interface IInputValue {
	[key: number]: { [key: string]: string };
}
