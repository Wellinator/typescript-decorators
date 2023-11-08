import { MyDecorator } from '../Decorators/MyDecorator';
import { Logger } from '../Decorators/MethodDecorator';

@MyDecorator
export class Animal {
  private _name: string;
  private _color: string;

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
  }

  @Logger()
  public sayName(): void {
    console.log(this._name);
  }
}
