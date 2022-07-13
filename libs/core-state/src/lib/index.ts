import { ActionReducerMap } from '@ngrx/store';
import * as fromVillains from './villains/villains.reducer';

export interface AppState {
  [fromVillains.VILLAIN_FEATURE_KEY]: fromVillains.VillainState;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromVillains.VILLAIN_FEATURE_KEY]: fromVillains.villainReducer,
};
