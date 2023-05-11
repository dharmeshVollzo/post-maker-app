import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseService } from '../service/firebase.service';
import { BusinessDetails } from '../interface/interface';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.page.html',
  styleUrls: ['./business-details.page.scss'],
})
export class BusinessDetailsPage implements OnInit {
  
  fileToUpload: any;
  imageUrl: any;
  businessDetailsGroup!: FormGroup;
  progress : number = 0;
  uploadImageURL = '';

  constructor(
    public fb : FormBuilder,
    public firebaseService : FirebaseService,
    private storage : Storage,
    private router : Router
    ) { }

  ngOnInit() {
    this.businessDetailsGroup = this.fb.group({
      file: [''],
      name: [''],
      email: [''],
      mobile1: [''],
      mobile2: [''],
      address: ['']
    })
  }


  handleFileInput(file: any) {
    this.fileToUpload = file.files.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
    this.storageInImageStore()
  }

  storageInImageStore(): void{
    const storageRef = ref(this.storage, `Design-Images_Folder/${this.fileToUpload.name}`);
    const uploadTask = uploadBytesResumable(storageRef, this.fileToUpload);
    uploadTask.on('state_changed',
      (snapshot) => {
         this.progress = Number(((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0));
         setInterval(this.progressData, 130);
        console.log('Upload is ' + this.progress + '% done');
      },
      (error)=>{
        console.log('error---', error);
      },
         () => {
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if(downloadURL){
            this.uploadImageURL = downloadURL
          }
        });
      }
    )
  }

  progressData(){
    return this.progress
  }

  onSubmit(){
    const userData : any  = localStorage.getItem('userData')
    const payload : BusinessDetails = {
      id : '',
      file : this.uploadImageURL,
      name: this.businessDetailsGroup.value.name,
      email : this.businessDetailsGroup.value.email,
      mobile1 : this.businessDetailsGroup.value.mobile1,
      mobile2 : this.businessDetailsGroup.value.mobile2,
      address : this.businessDetailsGroup.value.address,
      userId : JSON.parse(userData)?.id
    }
    
    this.firebaseService.addNewBusinessDetails(payload).then((res =>{
      if(res) {
        this.router.navigate(['tabs/tab1']);
        // this.router.navigate(['tabs/create-poster/', `https://realloc-image.s3.amazonaws.com/assets/FestivalPosters/${this.imgShow}/${imgIndex}.jpg`], {queryParams: {date: this.imgDetails.date, name: this.imgDetails.name}})
      }
    })

    )


  }
}
