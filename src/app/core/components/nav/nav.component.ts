import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../../../shared';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent extends BaseComponent {
  constructor() {
    super();
  }
}
