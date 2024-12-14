import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-executive-inspection-sidebar',
  imports: [RouterLink],
  templateUrl: './executive-inspection-sidebar.component.html',
  styleUrl: './executive-inspection-sidebar.component.css'
})
export class ExecutiveInspectionSidebarComponent {

  constructor(private router:Router){}


  logout(): void {

      localStorage.clear();
      this.router.navigate(['']);
  }
}
