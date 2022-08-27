import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Villain } from '@villains/api-interfaces';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'villains-villain-details',
  templateUrl: './villain-details.component.html',
  styleUrls: ['./villain-details.component.scss'],
})
export class VillainDetailsComponent {
  currentVillain: Villain;
  originalAlias: string;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  @Input() set villain(value) {
    if (value) this.originalAlias = value.alias;
    this.currentVillain = { ...value };
  }

  @Input() form: FormGroup;

  save(formDirective: FormGroupDirective) {
    this.saved.emit(formDirective.value);
    formDirective.resetForm();
  }

  cancel() {
    this.cancelled.emit();
  }
}
