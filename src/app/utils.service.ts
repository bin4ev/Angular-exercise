import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

 private currentUser:any

  constructor(private userService: UserService) { }

  getRandomUser(): void {
    let int = Math.random()
    if (int <= 0.2) {
      this.currentUser = {
        name: 'Pesho',
        role: 'admin'
      }
    } else if (int <= 0.5) {
      this.currentUser = {
        name: 'Gosho',
        role: 'employee'
      }

    } else {
      this.currentUser = null;
    }
    this.userService.setStatusUser(this.currentUser)
 
  }

  logOut() {
    this.userService.setStatusUser(null);
  }
}

