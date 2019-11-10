import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'drawing-field',
  templateUrl: './drawing-field.component.html',
  styleUrls: ['./drawing-field.component.css']
})
export class DrawingFieldComponent implements OnInit {

  @Input() pizzaData: any;

  constructor() { }

  ngOnInit() {

  }
  //toppings = ["white-cheese", "parmigiano", "ham", "chicken", "bacon", "pepperoni", "sausage", "tomatoes", "peppers", "mushrooms", "pineapples", "basil", "ranch", "tomato"];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer != event.container) {
      console.log(event.previousContainer.data[event.previousIndex]);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        this.pizzaData.pizza.length);
    }
  }

  pizzatypes: any = [{
    name: "plain",
    ingridients: ["mozzarella", "basil"]
  },
  {
    name: "margherita",
    ingridients: ["tomatoes", "mozzarella", "basil"]
  },
  {
    name: "pepperoni",
    ingridients: ["round", "pepperoni", "mozzarella", "basil"]
  },
  {
    name: "sausage",
    ingridients: ["round", "sausage", "mozzarella", "basil"]
  },
  {
    name: "bacon",
    ingridients: ["round", "bacon", "mozzarella", "basil"]
  },
  {
    name: "hawaian",
    ingridients: ["round", "pineapples", "ham", "mozzarella", "basil"]
  },
  {
    name: "white",
    ingridients: ["round", "white-cheese", "basil"]
  },
  {
    name: "sicilian",
    ingridients: ["square", "tomatoes", "mozzarella", "basil"]
  },
  {
    name: "mushroom",
    ingridients: ["round", "mushrooms", "mozzarella", "basil"]
  },
  {
    name: "margherita",
    ingridients: ["round", "tomatoes", "mozzarella", "basil"]
  },
  {
    name: "chicken-ranch",
    ingridients: ["round", "chicken", "ranch", "mozzarella", "basil"]
  },
  {
    name: "chicken-parm",
    ingridients: ["round", "chicken", "parmigiano", "mozzarella", "basil"]
  }]
}
