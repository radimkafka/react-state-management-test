import { makeAutoObservable } from "mobx";
import { changeUserMail, users } from "../../data";

export class UserObservable {
  data = users;
  constructor() {
    makeAutoObservable(this);
  }

  deleteUser(id: number) {
    this.data = this.data.filter(user => user.id !== id);
  }
  changeUser(id: number) {
    this.data = this.data.map(user => (user.id !== id ? user : changeUserMail(user)));
  }
}
