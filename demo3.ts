/*
 * @Author: your name
 * @Date: 2020-10-03 09:43:18
 * @LastEditTime: 2020-10-03 18:16:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo3.ts
 */
let count: number = 918;
const myName: string = "jspang";
const xiaojiejie: {
  name: string;
  age: number;
} = {
  name: "大脚",
  age: 18,
};
// const xiaojiejies: string[] = ["谢大脚", "刘英", "918"];
const xiaojiejies: Array<string> = ["谢大脚", "刘英", "918"];
console.log(xiaojiejies);
class Person {}
const dajiao: Person = new Person();

const jianXiaojiejie: () => string = () => {
  return "大脚";
};
