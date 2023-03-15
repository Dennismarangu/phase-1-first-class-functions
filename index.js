function receivesAFunction(callback) {
callback();
}

function returnsANamedFunction() {
    function namedFunction() {
      return "Hello World";
    }
    return namedFunction;
  }

function returnsAnAnonymousFunction() {
  return function() {
    return "Hello World";
  };
}
