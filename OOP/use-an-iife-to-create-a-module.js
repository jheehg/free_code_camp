let funModule = (() => {
  return {
    isCuteMixin : (obj) => {
      obj.isCute = () => {
        return true;
      };
    },
  singMixin : (obj) => {
    obj.sing = () => {
      console.log("Singing to an awesome tune");
    };
  }
}})();

let a = () => {};
funModule.isCuteMixin(a);
console.log(a.isCute());
funModule.singMixin(a);
a.sing();