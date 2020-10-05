/*
 * @Author: your name
 * @Date: 2020-10-05 12:00:13
 * @LastEditTime: 2020-10-05 12:14:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo14.ts
 */
// class Person {
//   public readonly _name: string;
//   constructor(name: string) {
//     this._name = name;
//   }
// }
// const person = new Person("zx");
// console.log(person._name);
// person._name = "xz";
// console.log(person.name);

abstract class Girl {
  abstract skill();
}

class Waiter extends Girl {
  skill() {
    console.log("端茶");
  }
}
class baseTeacher extends Girl {
  skill() {
    console.log("倒水");
  }
}
class seniorTeacher extends Girl {
  skill() {
    console.log("按摩");
  }
}
