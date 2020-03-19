parseInt() //accepts two arguments: the value to parse and the base fo the value being parsed
    //usually work with base 10 -- parseInt(`2`, 10)

parseFloat() //accepts only a single argument

function add(a, b) {
    return (a + b);
  }
  
  function subtract(a, b) {
    return (a - b);
  }
  
  function multiply(a, b) {
    return (a * b);
  }
  
  function divide(a, b) {
    return (a / b);
  }
  
  function increment(n) {
    return (n += 1);
  }
  
  function decrement(n) {
    return (n -= 1);
  }
  function makeInt(n) {
    return parseInt(n, 10);
  }
  
  function preserveDecimal(n) {
    return parseFloat(n);
  }