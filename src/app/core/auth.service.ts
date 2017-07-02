import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string, password: string) {
    if (username === 'teck') {
      return true
    } else {
      return false
    }
  }

}
