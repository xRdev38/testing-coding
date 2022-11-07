import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent, TableComponent } from './components';

@NgModule({
  declarations: [BaseComponent, TableComponent],
  imports: [CommonModule],
  exports: [BaseComponent, TableComponent],
})
export class SharedModule {}
