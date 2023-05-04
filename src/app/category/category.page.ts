import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  imgShow:any;
  imgDetails:any;
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.imgShow = this.route.snapshot.params['id']
    this.imgDetails = this.route.snapshot.queryParams;
  }

  selectedImage(imgIndex:any){
    this.router.navigate(['tabs/create-poster/', `https://realloc-image.s3.amazonaws.com/assets/FestivalPosters/${this.imgShow}/${imgIndex}.jpg`], {queryParams: {date: this.imgDetails.date, name: this.imgDetails.name}})
  }

}
