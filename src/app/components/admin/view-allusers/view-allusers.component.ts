import { Component, OnInit } from '@angular/core';
import { ViewdetailsService } from '../../../service/viewdetails.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-view-allusers',
  imports: [NgFor,NgIf,FormsModule],
  templateUrl: './view-allusers.component.html',
  styleUrl: './view-allusers.component.css'
})
export class ViewAllusersComponent implements OnInit{

  showCustomers: boolean = true;
  customers: any[] = [];
  executives: any[] = [];
  filteredCustomers: any[] = [];
  filteredExecutives: any[] = [];
  searchQuery: string = '';

  constructor(private viewDetails: ViewdetailsService) {}

  ngOnInit() {
    this.fetchCustomers();
    this.fetchExecutives();
  }

  toggleView(view: 'customer' | 'executive') {
    this.showCustomers = view === 'customer';
    this.searchQuery = ''; // Reset search when toggling
    this.filteredCustomers = this.customers;
    this.filteredExecutives = this.executives;
  }

  fetchCustomers() {
    this.viewDetails.getAllCustomers().subscribe({
      next: (data) => {
        this.customers = data;
        this.filteredCustomers = data;
      },
      error: (error) => console.error(error),
    });
  }

  fetchExecutives() {
    this.viewDetails.getAllExecutive().subscribe({
      next: (data) => {
        this.executives = data;
        this.filteredExecutives = data;
      },
      error: (error) => console.error(error),
    });
  }

  searchUser() {
    const query = this.searchQuery.toLowerCase();
    if (this.showCustomers) {
      this.filteredCustomers = this.customers.filter((customer) =>
        customer.name.toLowerCase().includes(query)
      );
    } else {
      this.filteredExecutives = this.executives.filter((executive) =>
        executive.name.toLowerCase().includes(query)
      );
    }
  }
}