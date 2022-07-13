import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Villain } from '@villains/api-interfaces';

@Component({
  selector: 'villains-villains-list',
  templateUrl: './villains-list.component.html',
  styleUrls: ['./villains-list.component.scss'],
})
export class VillainsListComponent {
  @Input() villains: Villain[] | null;
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
