import { Injectable } from '@angular/core';
import { Villain } from '@villains/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { map, filter } from 'rxjs/operators';
import * as VillainActions from './villains.actions';
import * as VillainSelectors from './villains.selectors';
import * as fromVillains from './villains.reducer';

@Injectable({
  providedIn: 'root',
})
export class VillainFacade {
  allVillains$ = this.store.pipe(
    map((state) => VillainSelectors.getAllVillains(state))
  );
  selectedVillains$ = this.store.pipe(
    select(VillainSelectors.getSelectedVillain)
  );
  loaded$ = this.store.pipe(select(VillainSelectors.getVillainsLoaded));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === VillainActions.createVillain({} as any).type ||
        action.type === VillainActions.updateVillain({} as any).type ||
        action.type === VillainActions.deleteVillain({} as any).type
    )
  );

  selectVillain(villainId: string) {
    this.dispatch(VillainActions.selectVillain({ villainId }));
  }

  loadVillains() {
    this.dispatch(VillainActions.loadVillains());
  }

  loadVillain(villainId: string) {
    this.dispatch(VillainActions.loadVillain({ villainId }));
  }

  saveVillain(villain: Villain) {
    villain.id ? this.updateVillain(villain) : this.createVillain(villain);
  }

  createVillain(villain: Villain) {
    this.dispatch(VillainActions.createVillain({ villain }));
  }

  updateVillain(villain: Villain) {
    this.dispatch(VillainActions.updateVillain({ villain }));
  }

  deleteVillain(villain: Villain) {
    this.dispatch(VillainActions.deleteVillain({ villain }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromVillains.VillainPartialState>,
    private actions$: ActionsSubject
  ) {}
}
