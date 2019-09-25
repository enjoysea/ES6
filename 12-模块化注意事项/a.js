var n = 100;
var m = 20;

function add(x, y) {
  return x + y;
}

console.log("a.js被加载");

export {n as newN, m, add};

// export default 1000;

export default 2000;

// export var n = 200;
