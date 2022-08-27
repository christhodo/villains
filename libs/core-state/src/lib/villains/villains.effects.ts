import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Villain } from '@villains/api-interfaces';
import { VillainsService } from '@villains/core-data';
import * as VillainActions from './villains.actions';
import { map } from 'rxjs/operators';
import { fetch, pessimisticUpdate } from '@nrwl/angular';

@Injectable()
export class VillainEffects {
  loadVillain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VillainActions.loadVillain),
      fetch({
        run: (action) =>
          this.villainsService
            .getOne(action.villainId)
            .pipe(
              map((villain: Villain) =>
                VillainActions.loadVillainSuccess({ villain })
              )
            ),
        onError: (_action, error) =>
          VillainActions.loadVillainFailed({ error }),
      })
    )
  );
  loadVillains$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VillainActions.loadVillains),
      fetch({
        run: () =>
          this.villainsService
            .all()
            .pipe(
              map((villains: Villain[]) =>
                VillainActions.loadVillainsSuccess({ villains })
              )
            ),
        onError: (_action, error) =>
          VillainActions.loadVillainsFailed({ error }),
      })
    )
  );
  createVillain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VillainActions.createVillain),
      pessimisticUpdate({
        run: (action) =>
          this.villainsService
            .create(action.villain)
            .pipe(
              map((villain: Villain) =>
                VillainActions.createVillainSuccess({ villain })
              )
            ),
        onError: (_action, error) =>
          VillainActions.createVillainFailed({ error }),
      })
    )
  );

  updateVillain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VillainActions.updateVillain),
      pessimisticUpdate({
        run: (action) =>
          this.villainsService
            .update(action.villain)
            .pipe(
              map((villain: Villain) =>
                VillainActions.updateVillainSuccess({ villain })
              )
            ),
        onError: (_action, error) =>
          VillainActions.updateVillainFailed({ error }),
      })
    )
  );

  deleteVillain$ = createEffect(() =>
    this.actions$.pipe(
      ofType(VillainActions.deleteVillain),
      pessimisticUpdate({
        run: (action) =>
          this.villainsService.delete(action.villain).pipe(
            map(() =>
              VillainActions.deleteVillainSuccess({
                villain: action.villain,
              })
            )
          ),
        onError: (_action, error) =>
          VillainActions.deleteVillainFailed({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private villainsService: VillainsService
  ) {}
}
