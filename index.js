//TEST ONE
const receivesAFunction = (callback) => {
  return callback();
};

// TEST TWO
function returnsANamedFunction() {
   const help = () => "What is happening";
   return help;
}


//TEST THREE
const returnsAnAnonymousFunction = () => {
  return () => {};
};
