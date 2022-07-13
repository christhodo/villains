import { createAction, props } from '@ngrx/store';
import { Villain } from '@villains/api-interfaces';

// Select Entity

export const selectVillain = createAction(
  '[VILLAIN] Select Villain',
  props<{ villainId: string }>()
);

// Load all Entities

export const loadVillains = createAction('[VILLAIN] Load Villains');

export const loadVillainsSuccess = createAction(
  '[VILLAIN] Load Villains Success',
  props<{ villains: Villain[] }>()
);

export const loadVillainsFailed = createAction(
  '[VILLAIN] Load Villains Failed',
  props<{ error: unknown }>()
);

// Load Single Entity

export const loadVillain = createAction(
  '[VILLAIN] Load Villain',
  props<{ villainId: string }>()
);

export const loadVillainSuccess = createAction(
  '[VILLAIN] Load Villain Success',
  props<{ villain: Villain }>()
);

export const loadVillainFailed = createAction(
  '[VILLAIN] Load Villain Failed',
  props<{ error: unknown }>()
);

// Load Create Entity

export const createVillain = createAction(
  '[VILLAIN] Create Villain',
  props<{ villain: Villain }>()
);

export const createVillainSuccess = createAction(
  '[VILLAIN] Create Villain Success',
  props<{ villain: Villain }>()
);

export const createVillainFailed = createAction(
  '[VILLAIN] Create Villain Failed',
  props<{ error: unknown }>()
);

// Load Update Entity

export const updateVillain = createAction(
  '[VILLAIN] Update Villain',
  props<{ villain: Villain }>()
);

export const updateVillainSuccess = createAction(
  '[VILLAIN] Update Villain Success',
  props<{ villain: Villain }>()
);

export const updateVillainFailed = createAction(
  '[VILLAIN] Create Villain Failed',
  props<{ error: unknown }>()
);

// Load Delete Entity

export const deleteVillain = createAction(
  '[VILLAIN] Delete Villain',
  props<{ villain: Villain }>()
);

export const deleteVillainSuccess = createAction(
  '[VILLAIN] Delete Villain Success',
  props<{ villain: Villain }>()
);

export const deleteVillainFailed = createAction(
  '[VILLAIN] Create Villain Failed',
  props<{ error: unknown }>()
);
