import { ActionsUnion, ActionTypes } from './actions';
import {Data} from '../shared/services/sharedInterface';

export interface StateModel {
  artists: Data[];
}

export const initialState: StateModel = {
  artists: [],
};

// tslint:disable-next-line:typedef
export function ArtistReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadArtists:
      return {
        ...state,
        artists: [...action.payload]
      };
    default:
      return state;
  }
}
