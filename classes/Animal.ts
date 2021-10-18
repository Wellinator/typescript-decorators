import { MyDecorator } from "../Decorators/MyDecorator";

@MyDecorator
export class Animal {
  private _name: string;
  private _color: string;

  constructor(
    name:string,
    color: string
  ){
    this._name = name;
    this._color = color;
  }
}