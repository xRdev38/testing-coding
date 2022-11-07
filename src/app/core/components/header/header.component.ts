import { Component } from '@angular/core';
import { BaseComponent } from '../../../shared';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent extends BaseComponent {
  constructor() {
    super();
  }
}
