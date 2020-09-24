// 数组方法总结 添加/删除/遍历/查找
// push unshift pop shift 
// concat  slice splice 
// forEach/for of/map/filter/every/some/reduce

// 创建数组
var arr = [1];
/**
 * length属性 Array的实例属性，返回或设置一个数组中的元素个数
 * length 属性的值是一个 0 到 2^32-1 的整数。
 * 设置length属性可以截断数组  
 * var arr = [1, 32, 78, 96, 128, 36];
 * 
 */
arr.length = 5;  // 数组长度为5，输出：[1,empty×4]
arr.length = 0;  // 数组变为空数组，输出：[]

// push 在数组末尾添加元素，返回添加元素后的数组长度
var len = arr.push(9);  // len:2, arr:[1,9]
// unshift 在数组头部添加元素，返回添加元素后的数组长度
len = arr.unshift(3);  // len:3,  arr:[3,1,9]
// pop删除数组末尾的元素，返回被删除的元素
len = arr.pop();  // len:9,arr:[3,1]
// shift 删除数组头部的元素，返回被删除的元素
len = arr.shift();    // len:3, arr: [1]

// concat



// console.log('arr:', arr)
// console.log('len:', len, ' arr:', arr)




// 判断变量数据类型是否是数组
/**
 * 类数组转为数组
 * Array.from
 */
// Array.from(arraylike[,mapFn[, thisArg]])方法从一个类似数组或可迭代对象创建一个新的、浅拷贝的数组实例
var arrlike = Array.from('foo');  // ["f", "o", "o"]
arrlike = Array.from(new Set([]))
console.log('arrlike:', arrlike)














function arrayMethods (func, arr) {
  return func(arr);
}


// 数组拷贝
// var arr = [34, 98, 12, 9, 78, 56, 1, 10, 48];
// var arr1 = arr.slice();
// arr1[0] = 88;
// console.log('arr:', arr)
// console.log('arr1:', arr1)

