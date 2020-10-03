/*
 * @Author: your name
 * @Date: 2020-10-03 14:51:43
 * @LastEditTime: 2020-10-03 15:07:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo5.ts
 */
// function getTotal(one: number, two: number): number {
//   return one + two;
// }
// const total = getTotal(1, 2);

// function sayHello(): void {
//   console.log("hello world");
// }

// function errorFunction(): never {
//   throw new Error();
//   console.log("hello world");
// }

// function forNever(): never {
//   while (true) {}
//   console.log("hello world");
// }

// function add({ one, two }: { one: number; two: number }) {
//   return one + two;
// }
// const total = add({ one: 1, two: 2 });

function getNumber({ one }: { one: number }) {
  return one;
}
const one = getNumber({ one: 1 });
console.log(one);
