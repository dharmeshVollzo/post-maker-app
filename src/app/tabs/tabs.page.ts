import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit{

  festivalNameArr: any = [
    {
      id: 0,
      name: "Republic Day",
      folderName: "RepublicDay",
      date: "Jan 26, 2023"
    },
    {
      id: 1,
      name: "Makar Sankranti",
      folderName: "MakarSankranti",
      date: "Jan 14, 2023"
    },
    {
      id: 2,
      name: "Hanuman Jayanti",
      folderName: "HanumanJayanti",
      date: "Apr 6, 2023"
    },
    {
      id: 3,
      name: "Sardar Patel Jayanti",
      folderName: "SardarPatelJayanti",
      date: "31 October 2023"
    },
    {
      id: 4,
      name: "Indian Army Day",
      folderName: "IndianArmyDay",
      date: "Jan 15, 2023"
    },
    {
      id: 5,
      name: "World Cancer Day",
      folderName: "WorldCancerDay",
      date: "Feb 4, 2023"
    },
    {
      id: 6,
      name: "MahaShivratri",
      folderName: "MahaShivratri",
      date: "Feb 18, 2023"
    },
    {
      id: 7,
      name: "Ramnavami",
      folderName: "Ramnavami",
      date: "Mar 30, 2023"
    },
    {
      id: 8,
      name: "Mahavir Jayanti",
      folderName: "MahavirJayanti",
      date: "Apr 4, 2023"
    },
    {
      id: 9,
      name: "Rathyatra",
      folderName: "Rathyatra",
      date: "Jun 20, 2023"
    },
    {
      id: 10,
      name: "GuruPurnima",
      folderName: "GuruPurnima",
      date: "Jul 3, 2023"
    },
    {
      id: 11,
      name: "Rakshabandhan",
      folderName: "Rakshabandhan",
      date: "Aug 30, 2023"
    },
    {
      id: 12,
      name: "Kargil Vijay Diwas",
      folderName: "KargilVijayDiwas",
      date: "ul 26, 2023"
    },
    {
      id: 13,
      name: "Janmastami",
      folderName: "Janmastami",
      date: "Sep 7, 2023"
    },
    {
      id: 14,
      name: "Independence Day",
      folderName: "IndependenceDay",
      date: "Aug 15, 2023"
    },
    {
      id: 15,
      name: "Ganesh Chaturthi",
      folderName: "GaneshChaturthi",
      date: "Sep 19, 2023"
    },
    {
      id: 16,
      name: "Teacher's Day",
      folderName: "Teacher'sDay",
      date: "Sep 5, 2023"
    },
    {
      id: 17,
      name: "National Farmers Day",
      folderName: "NationalFarmersDay",
      date: "Dec 23, 2023"
    },
    {
      id: 18,
      name: "Mahatma Gandhi Jaynti",
      folderName: "MahatmaGandhiJaynti",
      date: "Oct 2, 2023"
    },
    {
      id: 19,
      name: "Women's Day",
      folderName: "WomenDay",
      date: "Mar 8, 2023"
    },
    {
      id: 20,
      name: "Mothers Day",
      folderName: "MothersDay",
      date: "May 14, 2023"
    },
    {
      id: 21,
      name: "Yoga Day",
      folderName: "YogaDay",
      date: "Jun 21, 2023"
    },
    {
      id: 22,
      name: "Javaharlal Nehrus Bday",
      folderName: "JavaharlalNehrusBday",
      date: "Nov 14, 2023"
    },
    {
      id: 23,
      name: "World's No TobaccoDay",
      folderName: "World'sNoTobaccoDay",
      date: "May 31, 2023"
    },
    {
      id: 24,
      name: "Worldenviroment Day",
      folderName: "WorldenviromentDay",
      date: "Jun 5, 2023"
    },
    {
      id: 25,
      name: "IndianAirForce Day",
      folderName: "IndianAirForceDay",
      date: "Oct 8, 2023"
    },
    {
      id: 26,
      name: "International Youth Day",
      folderName: "InternationalYouthDay",
      date: "Aug 12, 2023"
    },
    {
      id: 27,
      name: "Navratri Starting",
      folderName: "NavratriStarting",
      date: "Oct 15, 2023"
    },
    {
      id: 28,
      name: "Dashehra",
      folderName: "Dashehra",
      date: "Oct 24, 2023"
    },
    {
      id: 29,
      name: "Diwali",
      folderName: "Diwali",
      date: "Nov 9, 2023"
    },
    {
      id: 30,
      name: "New Year",
      folderName: "NewYear",
      date: "Jan 1, 2023"
    },
    {
      id: 31,
      name: "Indian Navy Day",
      folderName: "IndianNavyDay",
      date: "Dec 4, 2023"
    },
    {
      id: 32,
      name: "Christmas",
      folderName: "Christmas",
      date: "Dec 25, 2023"
    },
    {
      id: 33,
      name: "Dhuleti",
      folderName: "Dhuleti",
      date: "Mar 8, 2023"
    },
    {
      id: 34,
      name: "Friendship Day",
      folderName: "FriendshipDay",
      date: "Jul 30, 2023"
    },
    {
      id: 35,
      name: "Holi",
      folderName: "Holi",
      date: "Mar 8, 2023"
    },
    {
      id: 36,
      name: "National Education Day",
      folderName: "NationalEducationDay",
      date: "Nov 11, 2023"
    },
    {
      id: 37,
      name: "World Tourism Day",
      folderName: "WorldTourismDay",
      date: "Sep 27, 2023"
    },
    {
      id: 38,
      name: "APJAbdul Kalam Bday",
      folderName: "APJAbdulKalamBday",
      date: "Oct 15, 2023"
    },
    {
      id: 39,
      name: "Ambedkar Jayanti",
      folderName: "AmbedkarJayanti",
      date: "Apr 14, 2023"
    },
    {
      id: 40,
      name: "Water Day",
      folderName: "WaterDay",
      date: "Mar 22, 2023"
    },
    {
      id: 41,
      name: "World Population Day",
      folderName: "WorldPopulationDay",
      date: "Jul 11, 2023"
    },
    {
      id: 42,
      name: "Hindi Diwas",
      folderName: "HindiDiwas",
      date: "Sep 14, 2023"
    },
    {
      id: 43,
      name: "National Youth Day",
      folderName: "NationalYouthDay",
      date: "Jan 12, 2023"
    },
    {
      id: 44,
      name: "Valentine's Day",
      folderName: "Valentine'sDay",
      date: "Feb 14, 2023"
    },
    {
      id: 45,
      name: "Dhanteras",
      folderName: "Dhanteras",
      date: "Nov 10, 2023"
    },
  ];
  selectedMenu:any;
  // searchInput:any;
  searchInput:string = '';

  constructor(private router: Router) {
    // this.searchText = this.festivalNameArr
  }

  ngOnInit(): void {
      
  }

  categoryCard(festival:any){
    this.selectedMenu = festival.folderName
    this.router.navigate(['/tabs/category/', festival.folderName], {queryParams: {date: festival.date, name: festival.name}})
  }

  searchFestival(){
    if(this.searchInput.length > 2) {
      this.festivalNameArr = this.festivalNameArr.filter((item:any) =>
      item.name.toLowerCase().indexOf(this.searchInput.toLowerCase()) !== -1
    )
    } else {
      this.festivalNameArr = this.searchInput
    }
  }

  get filteredFestivalList() {
    return this.festivalNameArr.filter((id:any) => {
      const name = id.name.toLowerCase();
      const folderName = id.folderName.toLowerCase();
      const query = this.searchInput.toLowerCase();
      return name.includes(query) || folderName.includes(query);
    });
  }

}
