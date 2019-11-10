import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'drawing-field',
  templateUrl: './drawing-field.component.html',
  styleUrls: ['./drawing-field.component.css']
})
export class DrawingFieldComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
