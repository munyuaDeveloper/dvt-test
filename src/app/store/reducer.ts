import { ActionsUnion, ActionTypes } from './actions';
import {Album, Data} from '../shared/services/sharedInterface';

export interface StateModel {
  artists: Data[];
  albums: Album[];
}

export const initialState: StateModel = {
  artists: [],
  albums: []
};

// tslint:disable-next-line:typedef
export function ArtistReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {
    case ActionTypes.LoadArtists:
      return {
        ...state,
        artists: [... action.payload]
      };

    case ActionTypes.LoadAlbums:
      return {
        ...state,
        albums: [... action.payload]
      };
    default:
      return state;
  }
}
