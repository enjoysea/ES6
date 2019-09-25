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

import './a.js';