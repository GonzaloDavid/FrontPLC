import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {

  @Input() idzone: string;
  @Output() back: EventEmitter<any> = new EventEmitter();

  showchambers: boolean;

  //zona y camara seleccionadas
  idzoneselected: string;
  idchamber: string;

  constructor() { }

  ngOnInit() {

  }
  goback() {
    this.back.emit(false);
  }
  openChambers(idzone: string, idcamera: string) {
    this.showchambers = true;

    this.idzone=idzone;
    this.idchamber=idcamera;
  }
  outputchambers(value) {
    this.showchambers = value;
  }
}
