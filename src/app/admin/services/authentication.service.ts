import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated: boolean;
  public user?: User;

  constructor(private http: HttpClient) {
    this.authenticated = false;
    this.user = undefined;
  }

  // Prompt the user to sign in and
  // grant consent to the requested permission scopes
  signIn(): Observable<User> {
    return this.http.get<User>('../../../assets/json/user-data')
  }

  // Sign out
  async signOut(): Promise<void> {
    // await this.msalService.logout().toPromise();
    this.user = undefined;
    this.authenticated = false;
  }

  async getUsersbyFilter(filter:any): Promise<any> {
    // try {
    //   var result = await this.administratorService.postData({ searchString: filter }, 'GetDimADUsers', false);
    //   return result;
    // } catch (error) {
    //   this.toastr.error('Some error occured. Please try again later.', 'Error!');
    //   console.log('Could not get events', JSON.stringify(error, null, 2));
    // }
  }
}
