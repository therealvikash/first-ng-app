import { Component, input, output } from '@angular/core';
import { Todo } from '../../model/todo.type';
import { HighlightCompletedTodosDirective } from '../../directives/highlight-completed-todos.directive';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-todos-items',
  standalone: true,
  imports: [HighlightCompletedTodosDirective, UpperCasePipe],
  templateUrl: './todos-items.component.html',
  styleUrl: './todos-items.component.scss'
})
export class TodosItemsComponent {
  todo = input.required<Todo>();
  todoToggled = output<Todo>();

  todoClicked() {
    this.todoToggled.emit(this.todo())
  }
}
