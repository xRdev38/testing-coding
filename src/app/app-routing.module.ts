import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/collaborators',
    pathMatch: 'full',
  },
  {
    path: 'collaborators',
    loadChildren: () =>
      import('./features/collaborators/collaborator.module').then(
        module => module.CollaboratorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
