import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SideNavItems } from 'src/app/common/interfaces/sidenav-items';
import { SidenavService } from 'src/app/shared-module/services/sidenav.service';
import { AppConstants } from '../../../common/utils/app-constants.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  public sideNavItems: SideNavItems[] = AppConstants.sideMenu;
  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

}
