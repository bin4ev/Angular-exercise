import { Component, OnInit } from '@angular/core';
import { IUser } from './interfaces/iuser';
import { UtilsService } from './utils.service';
import { Router } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-exercise';
  user: any;


  constructor(
    private utilsService: UtilsService,
    private userService: UserService) {
      this.userService.subscribeToGetuserObs$().subscribe(currUser => {
        this.user = currUser
      })
  }

  ngOnInit(): void {
    this.utilsService.getRandomUser()
  }

  // just for  example
/*   checkUserStatus() {
    this.utilsService.getRandomUser()
    this.user = this.utilsService.currentUser;
    if (this.user !== undefined) {
      this.user = JSON.parse(localStorage.getItem('user')!);
    }
    console.log(this.user);
    this.userService.setStatusUser(this.user)

  } */



}
