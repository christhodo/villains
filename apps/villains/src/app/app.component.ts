import { Component } from '@angular/core';

@Component({
  selector: 'villains-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'villains';
  links = [{ path: 'villains', icon: 'view_list', title: 'Villains' }];
}
