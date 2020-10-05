/*
 * @Author: your name
 * @Date: 2020-10-03 17:04:10
 * @LastEditTime: 2020-10-03 17:55:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\demo8.ts
 */
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string;
}

interface Teacher extends Girl {
  teach(): string;
}

class XiaoJieJie implements Girl {
  name = "刘英";
  age = 18;
  bust = 90;
  say() {
    return "欢迎光临，红浪漫洗浴！！";
  }
}

const girl = {
  name: "大脚",
  age: 18,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临，红浪漫洗浴！！";
  },
  teach() {
    return "我来教你如何做";
  },
};

const screenResume = (girl: Teacher) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age >= 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是" + girl.age);
  console.log(girl.name + "胸围是" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是" + girl.sex);
};
screenResume(girl);
getResume(girl);
