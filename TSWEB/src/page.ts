/*
 * @Author: your name
 * @Date: 2020-10-06 11:16:28
 * @LastEditTime: 2020-10-06 11:48:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\TSWEB\src\page.ts
 */
import { Header, Content, Footer } from "./components";
export default class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
