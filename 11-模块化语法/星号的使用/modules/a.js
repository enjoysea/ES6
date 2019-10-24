
// es6 的导出语法
// 默认导出，导出的 东西 可以没有名字
// 只能使用一次
export default function () {
  console.log('a 这个东西');
}

// 可以使用多次 用export 来导出
let num = 789;
let bvc = 123;
export let x = 23;

export {num, bvc};
