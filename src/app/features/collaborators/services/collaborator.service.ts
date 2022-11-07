import { Injectable } from '@angular/core';
import { ApiResponse, ApiService, Collaborator } from 'src/app/core';
import { map, Observable } from 'rxjs';

@Injectable()
export class CollaboratorService {
  constructor(private readonly api: ApiService) {}

  getList(path: string): Observable<Collaborator[]> {
    return this.api
      .get<ApiResponse>(`/${path}`)
      .pipe(map(response => response.collaborateurs));
  }
}
