import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../../../../shared';
import { CollaboratorService } from '../../services/collaborator.service';
import { BehaviorSubject, switchMap, takeUntil, tap } from 'rxjs';
import { Collaborator } from '../../../../core';

@Component({
  selector: 'app-collaborator-page',
  templateUrl: './collaborator-page.component.html',
  styleUrls: ['./collaborator-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollaboratorPageComponent extends BaseComponent {
  data$ = new BehaviorSubject<Collaborator[] | null>([]);
  columns$ = new BehaviorSubject<string[] | null>([]);

  constructor(private readonly collaboratorService: CollaboratorService) {
    super();

    this.onInit$
      .pipe(
        takeUntil(this.onDestroy$),
        switchMap(() => this.collaboratorService.getList(`/collaborateurs`)),
        tap((data: Collaborator[]) => {
          this.data$.next(data);
          this.columns$.next(
            CollaboratorPageComponent.getKeysForColumns(data[0])
          );
        })
      )
      .subscribe();
  }

  private static getKeysForColumns(collaborator: Collaborator): string[] {
    return (
      Object.keys(collaborator)
        .filter(key => key.toLowerCase() !== 'actions')
        .map(
          value =>
            `${value.charAt(0).toUpperCase()}${value
              .substring(1)
              .toLowerCase()}`
        ) ?? []
    );
  }
}
