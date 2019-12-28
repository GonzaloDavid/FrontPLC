import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from 'src/app/Models/menuitem.model';



@Component({
  selector: 'app-itemsnav',
  templateUrl: './itemsnav.component.html',
  styleUrls: ['./itemsnav.component.scss'],
})
export class ItemsnavComponent implements OnInit {
  // ?========== *** Items del menu ***
  @Input() menu: MenuItem[];
  @Input() showSlim: Boolean;

  constructor() {}

  ngOnInit() {
    this.showSlim = false;
  }
}
