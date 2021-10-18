export function MyDecorator<T extends new (...args: any[]) => any>(target: T): T{
  return class extends target{
    constructor(...args){
      super(...args);
      this._name = 'Mecanigato'
    }
  };
}