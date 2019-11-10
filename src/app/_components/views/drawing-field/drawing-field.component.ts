import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { SocketService } from '../../../_services/socket/socket.service';

@Component({
  selector: 'drawing-field',
  templateUrl: './drawing-field.component.html',
  styleUrls: ['./drawing-field.component.css']
})
export class DrawingFieldComponent implements OnInit {

  @Input() authorized: any;
  @Input() userData: any;
  @Input() isMobile: any;

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

  addIngredient(item, array) {
    this.pizzaData.pizza.push(item);
    array.splice(array.indexOf(item), 1);
    this.pizzaData.toppings = this.toppings;
    this.pizzaData.sauces = this.sauces;
    this.pizzaData.base = this.base;
    this.pizzaData.pizza = this.pizza;
    this.socket.sendPizzaData(this.pizzaData);
  }

  removeTopping(item) {
    for (var i = 0; i < this.pizza.length; i++) {
      if (this.pizza[i].name == item.name) {
        this.pizza.splice(i, 1);
        break;
      }
    }

    switch (item.type) {
      case "toppings": {
        this.toppings.push(item);
        break;
      }
      case "sauces": {
        this.sauces.push(item);
        break;
      }
      case "base": {
        this.base.push(item);
        break;
      }
      default: break;
    }

    this.pizzaData.toppings = this.toppings;
    this.pizzaData.sauces = this.sauces;
    this.pizzaData.base = this.base;
    this.pizzaData.pizza = this.pizza;
    this.socket.sendPizzaData(this.pizzaData);
  }
}
