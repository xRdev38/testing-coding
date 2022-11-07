import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseComponent } from '../base.component';
import { Collaborator } from '../../../core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent extends BaseComponent {
  private readonly _columns = new BehaviorSubject<string[]>([]);
  private readonly _data = new BehaviorSubject<Collaborator[]>([]);

  @Input() set columns(value: string[]) {
    this._columns.next(value);
  }

  @Input() set data(value: Collaborator[]) {
    this._data.next(value);
  }

  get columns$(): Observable<string[]> {
    return this._columns.asObservable();
  }

  get data$(): Observable<Collaborator[]> {
    return this._data.asObservable();
  }

  constructor() {
    super();
  }

  trackByColumn(index: number, column: string): string {
    return `${index}-${column}`;
  }

  trackByElement(index: number, collaborator: Collaborator): string {
    return `${index}-${collaborator.name}`;
  }
}
