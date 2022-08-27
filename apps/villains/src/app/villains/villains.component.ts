import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Villain, emptyVillain } from '@villains/api-interfaces';
import { VillainFacade } from '@villains/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'villains-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.scss'],
})
export class VillainsComponent implements OnInit {
  allVillains$: Observable<Villain[]> = this.villainFacade.allVillains$;
  selectedVillain$: Observable<Villain> = this.villainFacade.selectedVillains$;

  form: FormGroup;

  constructor(
    private villainFacade: VillainFacade,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.villainFacade.mutations$.subscribe((_) => this.resetVillain());
  }

  ngOnInit() {
    this.initForm();
    this.villainFacade.loadVillains();
    this.resetVillain();

    const villainRouteId = this.route.snapshot.params['id'];

    if (villainRouteId) {
      this.loadVillain(villainRouteId);
    }
  }

  viewVillain(villainId: string) {
    this.router.navigate(['villains', villainId]);
  }

  loadVillain(villainId: string) {
    this.villainFacade.selectVillain(villainId);
    this.villainFacade.loadVillain(villainId);
  }

  selectVillain(villain: Villain) {
    this.villainFacade.selectVillain(villain.id);
    this.form.patchValue(villain);
  }

  saveVillain(villain: Villain) {
    this.villainFacade.saveVillain(villain);
  }

  deleteVillain(villain: Villain) {
    this.villainFacade.deleteVillain(villain);
  }

  resetVillain() {
    this.form.reset();
    this.selectVillain(emptyVillain);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      alias: [''],
      description: [''],
    });
  }
}
