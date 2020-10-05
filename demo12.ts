/*
 * @Author: your name
 * @Date: 2020-10-05 10:25:21
 * @LastEditTime: 2020-10-05 11:13:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo12.ts
 */
class Person {
  constructor(public name: string) {}
}
class Teacher extends Person {
  constructor(public age: number) {
    super("zx");
  }
}
const teacher = new Teacher(18);
console.log(teacher.age);
console.log(teacher.name);
// console.log(person.name);
