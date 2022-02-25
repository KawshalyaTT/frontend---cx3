import { SideNavItems } from "src/app/common/interfaces/sidenav-items";

export class AppConstants {
    public static title = 'CX3';
    public static sideMenu: SideNavItems[] = [
        { icon: 'dashboard', name: 'Dashboard', path: 'dashboard' },
        { icon: 'info', name: 'About', path: 'about' },
        { icon: 'admin_panel_settings', name: 'Admin', path: 'admin' }
    ]

}