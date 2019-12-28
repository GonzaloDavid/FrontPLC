import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MENU_HOME } from './header.constants';

import { Router } from '@angular/router';
import { MenuItem } from 'src/app/Models/menuitem.model';
import { PageLink, Page } from 'src/app/Models/pages.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class HeaderComponent implements OnInit {
  // ?========== *** Propiedades ***
  buttonsAdminShow: boolean;
  buttonsHomeShow: boolean;
  @Input() menu: MenuItem[];
  @Input() menuHome: MenuItem[];
  // @Input() visibleToogleIcon: boolean;
  @Output() toggleClicked = new EventEmitter<boolean>();

  // ?========== *** Implementando logica personalizada ***
  private _visibleToggleIcon: boolean;

  @Input()
  public set visibleToggleIcon(v: boolean) {
    this._visibleToggleIcon = v;
  }

  public get visibleToggleIcon(): boolean {
    return this._visibleToggleIcon;
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.menu = [];
    this.menuHome = MENU_HOME;
  }

  public _toggleClicked() {
    this.toggleClicked.emit(true);
  }

  logout(item) {

  }

}
