import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  imgShow:any;
  imgDetails:any;
  userData : any;
  isLoader = true;
  constructor(private router : Router, private route : ActivatedRoute, public firebaseService : FirebaseService) { }

  ngOnInit() {
    this.getBusinessDetails();
    this.imgShow = this.route.snapshot.params['id']
    this.imgDetails = this.route.snapshot.queryParams;
  }

  selectedImage(imgIndex:any){
    if(!this.userData) {
      this.router.navigate(['tabs/business-details'])
    } else {
      this.router.navigate(['tabs/create-poster/', `https://realloc-image.s3.amazonaws.com/assets/FestivalPosters/${this.imgShow}/${imgIndex}.jpg`], {queryParams: {date: this.imgDetails.date, name: this.imgDetails.name}})
    }
  }

  businessDetail() {
    this.router.navigate(['tabs/business-details'])
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
}
