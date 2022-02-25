import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { DropdownMenu } from '../../../common/interfaces/dropdown-menu';

@Component({
  selector: 'app-custom-menu',
  templateUrl: './custom-menu.component.html',
  styleUrls: ['./custom-menu.component.scss']
})

export class CustomMenuComponent implements OnInit {
  @Input() menuItems: DropdownMenu[];
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  @Output() getMenuData = new EventEmitter<DropdownMenu>();
  constructor() { }

  ngOnInit(): void {
  }

  public openMenu() {
    this.menuTrigger.openMenu();
  }

  public closeMenu() {
    this.menuTrigger.closeMenu();
  }

  public sendMenuItemDetails(menuItem: DropdownMenu) {
    this.getMenuData.emit(menuItem)
  }
}
