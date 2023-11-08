export function Logger() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    console.log("Logging from Logger decorator: ", key);
    return descriptor;
  };
}
