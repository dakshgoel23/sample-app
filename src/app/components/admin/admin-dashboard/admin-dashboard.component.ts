import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { HeaderLogoutComponent } from "../../../pages/header-logout/header-logout.component";

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterOutlet, AdminSidebarComponent, HeaderLogoutComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

}
