import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorPageComponent } from './pages';
import { CollaboratorsComponent } from './components';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorRoutingEnum } from './collaborator-routing.enum';
import { SharedModule } from '../../shared';
import { CollaboratorService } from './services/collaborator.service';
import { ApiService } from '../../core';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: CollaboratorRoutingEnum.Home,
    component: CollaboratorPageComponent,
  },
];

@NgModule({
  declarations: [CollaboratorPageComponent, CollaboratorsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  providers: [ApiService, CollaboratorService],
})
export class CollaboratorModule {}
