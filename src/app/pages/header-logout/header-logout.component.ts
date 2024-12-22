import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-logout',
  imports: [RouterLink],
  templateUrl: './header-logout.component.html',
  styleUrl: './header-logout.component.css'
})
export class HeaderLogoutComponent {

  constructor(private router:Router){}


  logout(): void {

      localStorage.clear();
      this.router.navigate(['']);
  }
}
