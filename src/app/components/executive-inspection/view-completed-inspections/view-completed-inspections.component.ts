import { Component, OnInit } from '@angular/core';

import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookinspectionService } from '../../../service/inspection.service';

@Component({
  selector: 'app-view-completed-inspections',
  imports: [NgFor,FormsModule,],
  templateUrl: './view-completed-inspections.component.html',
  styleUrl: './view-completed-inspections.component.css'
})
export class ViewCompletedInspectionsComponent implements OnInit{

  constructor(private viewBookings:BookinspectionService){}

  inspection:any[]=[]
  errorMsg:any
  status: string="COMPLETED"

  ngOnInit(): void {
    this.viewBookings.getInspectionBookings(this.status).subscribe({
      next:(data)=>{
        this.inspection=data
      },
      error:(err)=>{
        this.errorMsg=err;
      }
    })

  }

}
