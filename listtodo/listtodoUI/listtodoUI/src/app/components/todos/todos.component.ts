import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit{
 
  todos: Todo[]=[];

  newtodo: Todo={
    id:0,
    description:"",
    isCompleted:""
  };
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.todoService.getTasks().subscribe({
      next:(todos)=>{
        this.todos=todos;
      },
      error: (error) => {
        console.error('Failed to edit todo:', error);
      }
    });
  }

  getTodo()
  {
    this.todoService.getTasks().subscribe({
      next:(todos)=>{
        this.todos=todos;
      },
      error: (error) => {
        console.error('Failed to edit todo:', error);
      }
    });
  }
  getToo()
  {
    this.todoService.getTasks().subscribe({
      next:(todos)=>{
        this.todos=todos;
      },
      error: (error) => {
        console.error('Failed to edit todo:', error);
      }
    });
  }
  addTodo(){
    this.todoService.addTasks(this.newtodo).subscribe( {
      next: (todo)=>{
          this.getTodo();
      },
      error: (error) => {
        console.error('Failed to edit todo:', error);
      }
    });
  }
  
  editTodo() {
    this.todoService.editTasks(this.newtodo).subscribe({
      next: (todo) => {
        this.getTodo();
      }
    });
  }
  

  deleteTodo(id:number) {
    this.todoService.deleteTasks(id).subscribe({
      next: (todo) => {
        this.getTodo();
      }
    });
  }
  
  

}
