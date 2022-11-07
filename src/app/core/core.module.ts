import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, NavComponent } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavComponent, HeaderComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavComponent, HeaderComponent],
})
export class CoreModule {}
