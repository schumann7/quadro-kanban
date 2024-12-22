import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { TaskModule } from '../task/task.module';

@NgModule({
  declarations: [
    BoardComponent
  ],
  imports: [
    CommonModule,
    TaskModule,
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }