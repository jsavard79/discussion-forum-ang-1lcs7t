import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  userDetails = [{
    uid: 1,
    name: "a",
    pass: "a"
  },
  {
    uid: 2,
    name: "b",
    pass: "b"
  }]
  loggedUser
  constructor() { }

  validate(username, pass) {

    this.loggedUser = this.userDetails.find(res => res.name == username && res.pass == pass)
    if (this.loggedUser) {
      return true
    }
    return false
  }


}
