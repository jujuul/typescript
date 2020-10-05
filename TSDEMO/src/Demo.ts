/*
 * @Author: your name
 * @Date: 2020-10-05 13:00:56
 * @LastEditTime: 2020-10-05 20:55:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\TSDEMO\src\Demo.ts
 */

// 联合类型和类型保护
// interface Waiter {
//   anjiao: boolean;
//   say: () => {};
// }
// interface Teacher {
//   anjiao: boolean;
//   skill: () => {};
// }

// function judgeWho(animal: Waiter | Teacher) {
//   if (animal.anjiao) {
//     (animal as Teacher).skill();
//   } else {
//     (animal as Waiter).say();
//   }
// }

// function judgeWhoTwo(animal: Waiter | Teacher) {
//   if ("skill" in animal) {
//     animal.skill();
//   } else {
//     animal.say();
//   }
// }

// function add(first: string | number, second: string | number) {
//   if (typeof first === "string" || typeof second === "string") {
//     return `${first}${second}`;
//   }
//   return first + second;
// }

// class NumberObj {
//   count: number;
// }

// function addObj(first: object | NumberObj, second: object | NumberObj) {
//   if (first instanceof NumberObj && second instanceof NumberObj) {
//     return first.count + second.count;
//   }
// }
// const Status = {
//   massage: 0,
//   spa: 1,
//   dabaojian: 2,
// };

// 枚举
// enum Status {
//   massage = 1,
//   spa,
//   dabaojian,
// }

// function getServe(status: any) {
//   if (status === Status.massage) {
//     return "massage";
//   } else if (status === Status.spa) {
//     return "spa";
//   } else if (status === Status.dabaojian) {
//     return "dabaojian";
//   }
// }
// const result = getServe(2);
// console.log(Status.massage);
// console.log(Status.spa);
// console.log(Status.dabaojian);
// console.log(Status[1]);
// console.log(`我要去${result}`);

// 泛型
// 函数中的泛型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
// join<string>("jujuul", ".com");
join<string, number>("1", 2);

// // 泛型中数组的使用
// function myFun<T>(params: Array<T>) {
//   return params;
// }

// myFun<string>(["123", "456"]);
// 类中的泛型
// interface Girl {
//   name: string;
// }
// class SelectGirl<T extends number | string> {
//   constructor(private girls: T[]) {}
//   getGirl(index: number): T {
//     return this.girls[index];
//   }
// }
// const selectGirl = new SelectGirl<string>(["大脚", "刘英", "小红"]);
// console.log(selectGirl.getGirl(1));
