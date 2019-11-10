import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'drawing-field',
  templateUrl: './drawing-field.component.html',
  styleUrls: ['./drawing-field.component.css']
})
export class DrawingFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(JSON.stringify(
      {
        toppings: [this.toppings.map(function (x) {
          return {
            name: x,
            src: "../../../../assets/img/" + x + ".png",
            icon: "../../../../assets/img/" + x + "_ico.png"
          }
        })]
      })
    );
  }
  //toppings = ["white-cheese", "parmigiano", "ham", "chicken", "bacon", "pepperoni", "sausage", "tomatoes", "peppers", "mushrooms", "pineapples", "basil", "ranch", "tomato"];

  toppings = [
    {
      "name": "White Cheese",
      "src": "../../../../assets/img/white-cheese.png",
      "icon": "../../../../assets/img/white-cheese_ico.png"
    },
    {
      "name": "Parmigiano",
      "src": "../../../../assets/img/parmigiano.png",
      "icon": "../../../../assets/img/parmigiano_ico.png"
    },
    {
      "name": "Ham",
      "src": "../../../../assets/img/ham.png",
      "icon": "../../../../assets/img/ham_ico.png"
    },
    {
      "name": "Chicken",
      "src": "../../../../assets/img/chicken.png",
      "icon": "../../../../assets/img/chicken_ico.png"
    },
    {
      "name": "Bacon",
      "src": "../../../../assets/img/bacon.png",
      "icon": "../../../../assets/img/bacon_ico.png"
    },
    {
      "name": "Pepperoni",
      "src": "../../../../assets/img/pepperoni.png",
      "icon": "../../../../assets/img/pepperoni_ico.png"
    },
    {
      "name": "Sausage",
      "src": "../../../../assets/img/sausage.png",
      "icon": "../../../../assets/img/sausage_ico.png"
    },
    {
      "name": "Tomatoes",
      "src": "../../../../assets/img/tomatoes.png",
      "icon": "../../../../assets/img/tomatoes_ico.png"
    },
    {
      "name": "Peppers",
      "src": "../../../../assets/img/peppers.png",
      "icon": "../../../../assets/img/peppers_ico.png"
    },
    {
      "name": "Mushrooms",
      "src": "../../../../assets/img/mushrooms.png",
      "icon": "../../../../assets/img/mushrooms_ico.png"
    },
    {
      "name": "Pineapples",
      "src": "../../../../assets/img/pineapples.png",
      "icon": "../../../../assets/img/pineapples_ico.png"
    },
    {
      "name": "Basil",
      "src": "../../../../assets/img/basil.png",
      "icon": "../../../../assets/img/basil_ico.png"
    }
  ]
  base = [
    { "name": "Square", "src": "../../../../assets/img/square_ico.png", "icon": "../../../../assets/img/square_ico.png" },
    { "name": "Round", "src": "../../../../assets/img/round.png", "icon": "../../../../assets/img/round_ico.png" }
  ];
  sauces = [
    {
      "name": "Ranch",
      "src": "../../../../assets/img/ranch.png",
      "icon": "../../../../assets/img/ranch_ico.png"
    },
    {
      "name": "Tomato",
      "src": "../../../../assets/img/tomato.png",
      "icon": "../../../../assets/img/tomato_ico.png"
    }
  ];
  pizza = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer != event.container) {
      console.log(event.previousContainer.data[event.previousIndex]);
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        this.pizza.length);
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
