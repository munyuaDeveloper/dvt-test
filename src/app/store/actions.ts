import { Action } from '@ngrx/store';
import {Album, Artist, Data} from '../shared/services/sharedInterface';
export enum ActionTypes {
  LoadArtists = '[Artist] Load artist',
  LoadAlbums = '[Album] Load albums',
}

export class LoadArtists implements Action {
  readonly type = ActionTypes.LoadArtists;

  constructor(public payload: Data[]) {}
}

export class LoadAlbums implements Action {
  readonly type = ActionTypes.LoadAlbums;

  constructor(public payload: Album[]) {}
}

export type ActionsUnion = LoadArtists | LoadAlbums;
