//ES5只有两种声明变量的方法：var命令和function命令。ES6除了添加let和const命令。
//后面章节还会提到，另外两种声明变量的方法：import命令和class命令。所以，ES6一共有6种声明变量的方法。

//const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。
//就必须立即初始化，不能留到以后赋值。如果初始化没有赋值，编译报错
const PI=3.14;
console.log("1.const变量:"+PI);
//常量无法再次赋值，打开注释，编译报错
//console.log(PI = 3);

const array = [];
array.push("Hello"); // 可执行
array.length = 1;    // 可执行

// 打开注释，编译报错
//array = ["Dave"];


//const的所有特性与let相同，不存在变量提升，有块级作用域，不再累述

//对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。
//const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。
const foo = {};
foo.prop = 123;
console.log("2.const 指向："+foo.prop);          // 123

//打开注释，编译报错，因为重新声明变量，改变了地址
//foo = {} // TypeError: "foo" is read-only

//
console.log("3.如果真的想将对象冻结，应该使用Object.freeze方法");
const obj = Object.freeze({});
//obj.prop = 123;    //运行报错，Can't add property prop, object is not extensible

console.log("4.var,const会在全局增加属性,浏览器的全局window,node全局global,以下代码可以在node环境下测试");
//var a = 1;
//const b = 1;
//let c = 1;
//console.log("4.var 全局变量:"+this.a);// 1
//console.log("4.const 全局变量:"+this.b); // 1
//console.log("4.let 全局变量:"+this.c); // undefined