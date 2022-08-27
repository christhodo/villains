import { emptyVillain } from '@villains/api-interfaces';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  villainAdapter,
  VillainState,
  VILLAIN_FEATURE_KEY,
} from './villains.reducer';

export const getVillainState =
  createFeatureSelector<VillainState>(VILLAIN_FEATURE_KEY);

const { selectAll, selectEntities } = villainAdapter.getSelectors();

export const getVillainsLoaded = createSelector(
  getVillainState,
  (state: VillainState) => state.loaded
);

export const getVillainError = createSelector(
  getVillainState,
  (state: VillainState) => state.error
);

export const getAllVillains = createSelector(
  getVillainState,
  (state: VillainState) => selectAll(state)
);

export const getVillainEntities = createSelector(
  getVillainState,
  (state: VillainState) => selectEntities(state)
);

export const getSelectedVillainId = createSelector(
  getVillainState,
  (state: VillainState) => state.selectedId
);

export const getSelectedVillain = createSelector(
  getVillainEntities,
  getSelectedVillainId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyVillain
);
