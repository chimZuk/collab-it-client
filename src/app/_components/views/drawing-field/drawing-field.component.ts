import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { SocketService } from '../../../_services/socket/socket.service';

@Component({
  selector: 'drawing-field',
  templateUrl: './drawing-field.component.html',
  styleUrls: ['./drawing-field.component.css']
})
export class DrawingFieldComponent implements OnInit {

  pizzaData: any;
  toppings: any = [];
  sauces: any = [];
  base: any = [];
  pizza: any = [];

  constructor(
    private socket: SocketService
  ) { }

  ngOnInit() {
    this.socket
      .getPizzaData()
      .subscribe((data: any) => {
        console.log(data)
        this.pizzaData = data;
        this.toppings = data.toppings;
        this.sauces = data.sauces;
        this.base = data.base;
        this.pizza = data.pizza;
      });
  }
  //toppings = ["white-cheese", "parmigiano", "ham", "chicken", "bacon", "pepperoni", "sausage", "tomatoes", "peppers", "mushrooms", "pineapples", "basil", "ranch", "tomato"];

  drop(event: CdkDragDrop<string[]>) {
    console.log(this.pizzaData.pizza);
    var index = this.pizzaData.pizza.length;
    console.log(index);

    if (event.previousContainer != event.container) {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        index);

      this.pizzaData.toppings = this.toppings;
      this.pizzaData.sauces = this.sauces;
      this.pizzaData.base = this.base;
      this.pizzaData.pizza = this.pizza;
      this.socket.sendPizzaData(this.pizzaData);
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
