import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-executive-insurance-sidebar',
  imports: [RouterLink],
  templateUrl: './executive-insurance-sidebar.component.html',
  styleUrl: './executive-insurance-sidebar.component.css'
})
export class ExecutiveInsuranceSidebarComponent {
  constructor(private router:Router){}


  logout(): void {

      localStorage.clear();
      this.router.navigate(['']);
  }
}
