import { ChangeDetectorRef, Component } from '@angular/core';
import { UploadService } from '../../../service/upload.service';
import { AuthService } from '../../../service/auth.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-upload-documents',
  imports: [NgFor],
  templateUrl: './upload-documents.component.html',
  styleUrl: './upload-documents.component.css'
})
export class UploadDocumentsComponent {

  cid: any; 
  user_id:any;
  customer: any; 
  file: any; 

  constructor( private uploadService: UploadService, private authService:AuthService, private cdRef: ChangeDetectorRef){
    this.user_id=localStorage.getItem("id")
    this.getProductDetails();
    
  }
  getProductDetails(){

    this.authService.getCustomerDetails(this.user_id).subscribe({
      next:(data)=>{
        this.cid=data.id

        this.uploadService.getDetailsById(this.cid).subscribe({
          next:(data)=>{
            this.customer = data; 
            this.customer.images.forEach((i:any) => {
              i.path = 'assets/images/'+ i.fileName
            });
            this.cdRef.detectChanges();
          },
          error: ()=>{}
        })


      },
      error: ()=>{}
    })

  }

  onFileSelect(evnt: any){
    console.log(evnt.target.files[0])
    this.file = evnt.target.files[0]
  }


  uploadFile(){
    let formData = new FormData();
    formData.set('file', this.file);
    this.uploadService.uploadImage(formData, this.customer.id).subscribe({
      next:(data)=>{
        this.cdRef.detectChanges();
        this.uploadService.getDetailsById(this.cid).subscribe({
          next:(data)=>{
            this.customer = data; 
            this.customer.images.forEach((i:any) => {
              i.path = 'assets/images/'+ i.fileName
            });
            
          },
          error: ()=>{}
        })
        
      },
      error:()=>{}
    })
  }

}
