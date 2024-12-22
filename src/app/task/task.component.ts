import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() title: string = 'Título da Tarefa';
  @Input() desc: string = 'Descrição da tarefa';
}