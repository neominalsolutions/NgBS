import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = []; // kendimize todos değişkeni açtık. bu değişkene gelen json bastık.

  constructor() { }

  ngOnInit(): void {
    // sayfa ilk açıldığında veri çekeceğimiz yer. reactjsdeki useEffect benzer

    fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json => {
    this.todos = json;
  })

  }

}
