import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  
  mdTablet = '768px';
  opened: boolean; // true, false
  checked: boolean;
  mode: string; // 'over','side'
  menu: MenuItem[];
  slimactive: boolean;
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map((result) => {
      return result.matches;
    }),
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.checked = true;
    this.mode = 'side';
    this.menu = [];
    this.slimactive = false;

    this.breakpointObserver.observe([`(min-width: ${this.mdTablet})`]).subscribe((state: BreakpointState) => {
      if (state.matches) {
      } else {
        this.slimactive = true;
      }
    });
  }
}
