import { action, makeObservable, observable } from "mobx";
import { changeUserMail, users } from "../../data";
import { User } from "../../types";

export class UserObservable {
  data = [] as User[];
  constructor() {
    makeObservable(this, { changeUser: action, deleteUser: action, data: observable });
    this.data = users;
  }

  deleteUser(id: number) {
    console.log("id: ", id);
    console.log("this.data: ", this);
    this.data = this.data.filter(user => user.id !== id);
  }
  changeUser(id: number) {
    this.data = this.data.map(user => (user.id !== id ? user : changeUserMail(user)));
  }
}
