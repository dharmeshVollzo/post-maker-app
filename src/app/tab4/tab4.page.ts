import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  async logout() {
    await Storage.remove({ key: 'authtoken' });
    localStorage.removeItem('userData');
    this.router.navigate(['/login'])
  }


}
