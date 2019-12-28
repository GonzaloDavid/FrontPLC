import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  showzones:boolean;
  zoneselected:number;

  constructor() { }

  ngOnInit() {
  }
  openzone(idzone:number)
  {
    console.log('zone',idzone)
    this.zoneselected=idzone;
    this.showzones=true;
  }
  goback(back)
  {
    this.showzones=back;
  }

}
