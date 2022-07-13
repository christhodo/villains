import { Villain } from '@villains/api-interfaces';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import * as VillainActions from './villains.actions';

export const VILLAIN_FEATURE_KEY = 'villains';

export interface VillainState extends EntityState<Villain> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface VillainPartialState {
  readonly [VILLAIN_FEATURE_KEY]: VillainState;
}

export const villainAdapter: EntityAdapter<Villain> =
  createEntityAdapter<Villain>();

export const initialVillainState: VillainState = villainAdapter.getInitialState(
  {
    loaded: false,
  }
);

const onFailed = (state, { error }): VillainState => ({ ...state, error });

const onDispatch = (state, action): VillainState => ({
  ...state,
  loaded: false,
  error: null,
});

const _villainReducer = createReducer(
  initialVillainState,
  on(
    VillainActions.loadVillainFailed,
    VillainActions.loadVillainsFailed,
    VillainActions.createVillainFailed,
    VillainActions.updateVillainFailed,
    VillainActions.deleteVillainFailed,
    onFailed
  ),
  on(
    VillainActions.loadVillain,
    VillainActions.loadVillains,
    VillainActions.createVillain,
    VillainActions.updateVillain,
    VillainActions.deleteVillain,
    onDispatch
  ),
  on(VillainActions.loadVillainSuccess, (state, { villain }) =>
    villainAdapter.upsertOne(villain, { ...state, loaded: true })
  ),
  on(VillainActions.selectVillain, (state, { villainId }) => ({
    ...state,
    selectedId: villainId,
  })),
  on(VillainActions.loadVillainsSuccess, (state, { villains }) =>
    villainAdapter.setAll(villains, { ...state, loaded: true })
  ),
  on(VillainActions.deleteVillainSuccess, (state, { villain }) =>
    villainAdapter.removeOne(villain.id, { ...state, loaded: true })
  ),
  on(VillainActions.updateVillainSuccess, (state, { villain }) =>
    villainAdapter.updateOne(
      { id: villain.id, changes: villain },
      { ...state, loaded: true }
    )
  ),
  on(VillainActions.createVillainSuccess, (state, { villain }) =>
    villainAdapter.addOne(villain, { ...state, loaded: true })
  )
);

export function villainReducer(
  state: VillainState | undefined,
  action: Action
) {
  return _villainReducer(state, action);
}
