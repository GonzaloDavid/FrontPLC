import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chambers',
  templateUrl: './chambers.component.html',
  styleUrls: ['./chambers.component.css']
})
export class ChambersComponent implements OnInit {

  @Input() display: boolean;
  @Input() idzone: boolean;
  @Input() idchamber: boolean;

  @Output() outchambers: EventEmitter<any> = new EventEmitter();
  temperatureList: Temperature[] = [];

  constructor() {
    this.temperatureList = [
      {
        name: 'Variable 1',
        value: 8.99
      },
      {
        name: 'Variable 2',
        value: 9.55
      },
      {
        name: 'Variable 3',
        value: 4.56
      },
      {
        name: 'Variable 4',
        value: 4.44
      },
      {
        name: 'Variable 5',
        value: 77.559
      },
      {
        name: 'Variable 6',
        value: 69.99
      }
    ]
  }

  ngOnInit() {
  }
  hidemodalperson() {
    this.display = false;
    this.outchambers.emit(this.display);
  }
  save() {
    
  }

}
export class Temperature {
  name: string;
  value: number;
}