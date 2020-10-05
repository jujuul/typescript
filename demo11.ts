/*
 * @Author: your name
 * @Date: 2020-10-05 10:08:42
 * @LastEditTime: 2020-10-05 10:28:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo11.ts
 */
// private protected public
// 类的内部和类的外部
class Person {
  name: string;
  public sayHello() {
    console.log(this.name + " say Hello");
  }
}
class Teacher extends Person {
  public sayBye() {
    console.log(this.name);
  }
}
const person = new Person();
// person.sayHello();
// console.log(person.name);
