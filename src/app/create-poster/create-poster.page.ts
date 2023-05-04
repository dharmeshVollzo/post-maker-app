import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { error } from 'console';
import html2canvas from 'html2canvas';

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
  textColor = "#000"


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

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.imgShow = this.route.snapshot.params['id']
    this.imgDetails = this.route.snapshot.queryParams;
  }
  
  save(fileName: any) {
    let section: any = document.querySelector('#mainContainer');
    html2canvas(section).then((canvas: any) => {
      var link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
    });
  }
}
