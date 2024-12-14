import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MyProfileComponent } from './components/customer/myprofile/myprofile.component';
import { ExecutiveInsuranceDashboardComponent } from './components/executive-insurance/executive-insurance-dashboard/executive-insurance-dashboard.component';
import { ExecutiveInsuranceMyprofileComponent } from './components/executive-insurance/executive-insurance-myprofile/executive-insurance-myprofile.component';
import { ExecutiveInspectionDashboardComponent } from './components/executive-inspection/executive-inspection-dashboard/executive-inspection-dashboard.component';
import { ViewBookingsComponent } from './components/executive-inspection/view-bookings/view-bookings.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CustomerDashboardComponent } from './components/customer/customer-dashboard/customer-dashboard.component';
import { AddvehicleComponent } from './components/customer/addvehicle/addvehicle.component';
import { BookinspectionComponent } from './components/customer/bookinspection/bookinspection.component';
import { ProposePolicyComponent } from './components/executive-insurance/propose-policy/propose-policy.component';
import { ViewAllpoliciesComponent } from './components/executive-insurance/view-allpolicies/view-allpolicies.component';
import { ViewCompletedInspectionsComponent } from './components/executive-inspection/view-completed-inspections/view-completed-inspections.component';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { Component } from '@angular/core';
import { OnboardExecutiveComponent } from './components/admin/onboard-executive/onboard-executive.component';
import { ViewAllusersComponent } from './components/admin/view-allusers/view-allusers.component';
import { ViewProposedPoliciesComponent } from './components/customer/view-proposed-policies/view-proposed-policies.component';
import { ViewActivePoliciesComponent } from './components/customer/view-active-policies/view-active-policies.component';
import { AddDetailsComponent } from './pages/add-details/add-details.component';
import { UploadDocumentsComponent } from './components/customer/upload-documents/upload-documents.component';

export const routes: Routes = [
    {
        path: '', component : HomePageComponent
    },
    
    {
        path: 'login-page', component : LoginPageComponent
    },
    {
        path: 'add-details' ,component: AddDetailsComponent
    },
    {
        path: 'signup-page', component : SignupPageComponent
        
    },
    {
        path:'about-us',component:AboutUsComponent
    },
    {
        path: 'customer-dashboard', component : CustomerDashboardComponent,children:[
            {
                path: '', component : MyProfileComponent
            },
            {
                path: 'addvehicle', component : AddvehicleComponent
            },
            {
                path: 'bookinspection', component : BookinspectionComponent
            },
            {
                path: 'view-proposed-policies' , component: ViewProposedPoliciesComponent
            },
            {
                path: 'view-active-policies' , component: ViewActivePoliciesComponent
            },
            {
                path: 'upload-documents' , component : UploadDocumentsComponent

            }
        ]
    },
    {
        path:'executive-insurance-dashboard',component:ExecutiveInsuranceDashboardComponent,children:
        [
            {
                path: '', component : ExecutiveInsuranceMyprofileComponent
            },
            {
                path: 'propose-policy', component : ProposePolicyComponent
            },
            {
                path: 'view-allpolicies', component : ViewAllpoliciesComponent
            }
        
        ]
    },
    {
        path:'executive-inspection-dashboard',component:ExecutiveInspectionDashboardComponent,children:
        [
            {
                path: '', component : ExecutiveInsuranceMyprofileComponent
            },
            {
                path: 'view-bookings', component : ViewBookingsComponent
            },
            {
                path: 'view-completed-inspections', component : ViewCompletedInspectionsComponent
            },
        ]
    },
    {
        path:'admin-dashboard', component: AdminDashboardComponent, children:
        [
            {
                path: '' , component: OnboardExecutiveComponent

            },
            {
                path: 'view-allusers' , component: ViewAllusersComponent
            },
            {
                path: 'view-allpolicies', component : ViewAllpoliciesComponent
            }
           
        ]
    },
    {
        path:"**",component:PageNotFoundComponent
    }
    
 
    

];
