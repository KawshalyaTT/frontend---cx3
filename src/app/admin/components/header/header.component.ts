import { Component, OnInit } from '@angular/core';
import { DropdownMenu } from 'src/app/common/interfaces/dropdown-menu';
import { SidenavService } from 'src/app/shared-module/services/sidenav.service';
import { AppConstants } from '../../../common/utils/app-constants.component';
import { User } from 'src/app/admin/user';
import { Event } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title: any;
  public menuList: DropdownMenu[] = [{ icon: 'account_circle', name: 'My Profile', id: 'profile' }, { icon: 'exit_to_app', name: 'Sign Out', id: 'signOut' }, { icon: 'power_settings_new', name: 'Sign In', id: 'signIn' }]

  public authenticated: boolean = false;
  private user?: User = undefined;

  constructor(private sidenav: SidenavService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.title = AppConstants.title;
  }

  public toggleSidenav() {
    this.sidenav.toggle();
  }

  private signIn() {
    this.authService.signIn().subscribe((user: User) => {
      this.user = user;
      this.authService.authenticated = true;
      this.authService.user = user;
    })
    // then((value: User) => {
    // })
  }

  private signOut(): void {
    this.authenticated = false;
    this.user = undefined;
  }

  public getMenuData(menu: any) {
    console.log(menu)
    if (menu.id = 'signIn') this.signIn();
    if (menu.id = 'signOut') this.signOut();
  }
}
