import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-app-store';
  power = 10;
  items = ['diego', 'caceres', 'garcia'];

  addItem() {
    this.items.push('nuevoItem');
  }

  

  deleteItem( index : number) {
    this.items.splice(index)
  }
  
}
