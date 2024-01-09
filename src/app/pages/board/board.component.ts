import { Component, signal } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop'
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Column, ToDo } from '../../models/todo.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavbarComponent],
  templateUrl: './board.component.html',
  styles: [
    `
    /* Animate items as they're being sorted. */
    .cdk-drop-list-dragging .cdk-drag {
      transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Animate an item that has been dropped. */
    .cdk-drag-animating {
      transition: transform 300ms cubic-bezier(0, 0, 0.2, 1);
    }
    `
  ]
})
export class BoardComponent {

  colums = signal<Column[]>(
    [
      {
        title: 'ToDo',
        todos: [{
          id: '1',
          title: 'Task 1'
        },
        {
          id: '2',
          title: 'Task 2'
        },
        {
          id: '3',
          title: 'Task 3'
        }]
      },
      {
        title: 'Doing',
        todos: [
          {
            id: '4',
            title: 'Task 4'
          },
          {
            id: '5',
            title: 'Task 5'
          }
        ]
      },
      {
        title: 'Done',
        todos: [
          {
            id: '7',
            title: 'Task 7'
          }
        ]
      }
    ]
  )
  todos = signal<ToDo[]>([])
  doing = signal<ToDo[]>([])
  done = signal<ToDo[]>([])

  drop(event: CdkDragDrop<ToDo[]>) {
    if (event.previousContainer !== event.container) {
      // Transfer item to another list
      console.log(this.todos())
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(this.todos())
    } else {
      // Move item within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addColumn(){
    this.colums.update(prev => [...prev, {title: 'new col', todos: []}])
  }

}
