import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  user: any;

  constructor(private userService: UserService,
    private utilsService :UtilsService) { }

  ngOnInit(): void {
    this.userService.subscribeToGetuserObs$().subscribe(currentUser => this.user = currentUser)
  }
  
  logOut(){
    this.utilsService.logOut();
  }


}
