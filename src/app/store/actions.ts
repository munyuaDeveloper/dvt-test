import { Action } from '@ngrx/store';
import {Artist, Data} from '../shared/services/sharedInterface';
export enum ActionTypes {
  LoadArtists = '[Artist] Load artist',
}

export class LoadArtists implements Action {
  readonly type = ActionTypes.LoadArtists;

  constructor(public payload: Artist[]) {}
}

export type ActionsUnion = LoadArtists;
