import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { UtilsService } from 'src/app/utils.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  user: any
  constructor(private userService :UserService,
    private utilsService : UtilsService) { }

  ngOnInit(): void {
    this.userService.subscribeToGetuserObs$().subscribe(currentUser => this.user = currentUser)
  }
logOut(){
  this.utilsService.logOut()
}
}
