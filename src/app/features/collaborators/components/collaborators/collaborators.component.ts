import { Component, Input } from '@angular/core';
import { BaseComponent } from '../../../../shared';
import { Collaborator } from '../../../../core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-collaborators',
  templateUrl: './collaborators.component.html',
  styleUrls: ['./collaborators.component.scss'],
})
export class CollaboratorsComponent extends BaseComponent {
  private readonly _columns = new BehaviorSubject<string[]>([]);
  private readonly _collaborators = new BehaviorSubject<Collaborator[]>([]);

  get columns$(): Observable<string[]> {
    return this._columns.asObservable();
  }

  get collaborators$(): Observable<Collaborator[]> {
    return this._collaborators.asObservable();
  }

  @Input() set collaborators(value: Collaborator[]) {
    this._collaborators.next(value);
  }

  @Input() set columns(value: string[]) {
    this._columns.next(value);
  }

  constructor() {
    super();
  }
}
