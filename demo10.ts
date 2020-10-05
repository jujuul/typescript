/*
 * @Author: your name
 * @Date: 2020-10-04 22:53:21
 * @LastEditTime: 2020-10-05 10:08:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo10.ts
 */
class Lady {
  content = "hi 帅哥！";
  sayHello() {
    return this.content;
  }
}

class XiaoJieJie extends Lady {
  sayHello() {
    return super.sayHello() + ". 你好!";
  }
  sayLove() {
    return "i love u";
  }
}

const goddess = new XiaoJieJie();
console.log(goddess.sayHello());
console.log(goddess.sayLove());
