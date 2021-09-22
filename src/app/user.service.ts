import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUser } from './interfaces/iuser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userObs$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private router: Router) { }

  setStatusUser(user: any): void {
    this.userObs$.next(user);
    this.determineUserRole(user);

  }

  subscribeToGetuserObs$() {
    return this.userObs$.asObservable();
  }

  private determineUserRole(user: any){
    if(!user){
      this.router.navigate(['/login'])
      localStorage.clear();
    }else{
      localStorage.setItem('user', user)
      if (user.role == 'admin') {

        this.router.navigate(['/admin'])
  
      } else{

        this.router.navigate(['/employee'])
  
      }
    }
  }

}
