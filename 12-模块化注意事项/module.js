console.log('a-2，加载');

// import {newN, m, add} from './a.js'
// console.log( add(newN, m) );

// import {n} from './a.js';
// console.log(n);

// import f from './a.js'
// console.log(f);

// var m = 100;
// import {newN, m as newM, add} from './a.js'
// console.log(add(newN, newM));

// 导出所有东西，并存在tool里
// import * as tool from './a.js';
// console.log(tool.m, tool.newN, tool.default);

// default不能直接用作变量名
// import {m, newN, default as d} from './a.js';
// console.log(m, newN, d(m, newN));

// 默认导出与普通导出同写
// import num, {m, add} from './a.js';
// console.log(num, m, add);

// 外部文件用import导入多次，只加载一次
// import {newN} from './a.js';
// import './a.js';

// console.log(this); //undefined

// 导出的值是对原值的一系列引用
import {c, addOne} from './b.js';

// 换言之，就是修改b.js中的c的值
addOne();

console.log(c);

// c只读
// c = 200;
// console.log(c);





