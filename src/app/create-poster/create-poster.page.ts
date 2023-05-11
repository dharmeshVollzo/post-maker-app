import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular';
import * as FileSaver from 'file-saver';
import html2canvas from 'html2canvas';
import { FirebaseService } from '../service/firebase.service';


@Component({
  selector: 'app-create-poster',
  templateUrl: './create-poster.page.html',
  styleUrls: ['./create-poster.page.scss'],
})
export class CreatePosterPage implements OnInit {
  imgShow:any;
  imgDetails:any;
  backgroundColor='#fff';
  borderColor = '#cde2e1';
  textColor = "#000";
  userData:any;
  logoHeight = 50;
  logoWidth = 50;
  isMobileValue:any = true;
  isAddressValue:any = true;
  isEmailValue:any = true;
  isLogoValue:any = true;
  isLoader = true;

  @ViewChild('mainContainer') mainContainer!: ElementRef;
  fontFamilyArr = [
    {
      name:'Poppins'
    },
    {
      name:'Roboto Slab'
    },
    {
      name:'Roboto'
    },
    {
      name:'Montserrat'
    },
    {
      name:'Raleway'
    },
    {
      name:'Nunito Sans'
    }
  ]

  constructor(private route : ActivatedRoute, private firebaseService : FirebaseService) { }

  ngOnInit() {
    this.getBusinessDetails();
    this.imgShow = this.route.snapshot.params['id']
    this.imgDetails = this.route.snapshot.queryParams;
  }


  getBusinessDetails() {
    this.firebaseService.getAllBusinessDetails().subscribe((res => {
      const userData : any  = localStorage.getItem('userData')
     if (userData) {
      this.userData = res.find((id : any ) => id.userId === JSON.parse(userData).id);
      this.isLoader = false;
     }
   }))
  }
  
  async save(fileName: any) {
    let section: any = document.getElementById('mainContainer');
    html2canvas(section).then((canvas: any) => {
      var link = document.createElement('a');
        link.href = canvas.toDataURL("image/jpg").replace("image/jpg", "image/octet-stream");
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
    });
  }

  toggleChange(event:any, value:any){
    switch (value) {
      case 'mobile':
         this.isMobileValue = event.target.checked
        break;
      case 'address':
         this.isAddressValue = event.target.checked
        break;
      case 'email':
         this.isEmailValue = event.target.checked
        break;
      case 'logo':
         this.isLogoValue = event.target.checked
        break;
      default:
        break;
    }
  }
}
