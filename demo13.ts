/*
 * @Author: your name
 * @Date: 2020-10-05 11:16:20
 * @LastEditTime: 2020-10-05 12:00:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo13.ts
 */
// class XiaoJieJie {
//   constructor(private _age: number) {}
//   get age() {
//     return this._age - 10;
//   }
//   set age(age: number) {
//     this._age = age + 3;
//   }
// }
// const dajiao = new XiaoJieJie(28);
// dajiao.age = 25;
// console.log(dajiao.age);

class Girl {
  static sayLove() {
    return "i love u";
  }
}
console.log(Girl.sayLove());
const girl = new Girl();
console.log(Girl.sayLove());
