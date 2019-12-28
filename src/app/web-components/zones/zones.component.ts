import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {

  @Input() idzone: number;
  @Output() back: EventEmitter<any> = new EventEmitter();

  showchambers: boolean;

  //zona y camara seleccionadas
  idzoneselected: number;
  idchamber: number;

  constructor() { }

  ngOnInit() {

  }
  goback() {
    this.back.emit(false);
  }
  openChambers(idzone: number, idcamera: number) {
    this.showchambers = true;

    this.idzone=idzone;
    this.idchamber=idcamera;
  }
  outputchambers(value) {
    this.showchambers = value;
  }
}
