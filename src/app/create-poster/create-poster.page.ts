import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular';
import * as FileSaver from 'file-saver';
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

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {
    this.imgShow = this.route.snapshot.params['id']
    this.imgDetails = this.route.snapshot.queryParams;
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
}
