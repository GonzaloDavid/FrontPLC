import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';
import { forkJoin } from 'rxjs';


@Component({
  selector: 'app-chambers',
  templateUrl: './chambers.component.html',
  styleUrls: ['./chambers.component.css']
})
export class ChambersComponent implements OnInit {

  @Input() display: boolean;
  @Input() idzone: string;
  @Input() idchamber: string;

  @Output() outchambers: EventEmitter<any> = new EventEmitter();
  sensorList: Sensor[] = [];
  selectedpersonTable:any;
  data:any;

  constructor(
    private sensorService:SensorService
  ) {
    this.sensorList = [
   
    ];
  }

  ngOnInit() {
    this.getdataSensor();
    this.data = {
      labels: [(new Date()).toLocaleString(),(new Date()).toLocaleString(), (new Date()).toLocaleString(),
        (new Date()).toLocaleString(), (new Date()).toLocaleString(), (new Date()).toLocaleString(), (new Date()).toLocaleString()],
      datasets: [
          {
              label: 'Sensor temperatura',
              data: [49, 50, 55, 56, 56, 55, 45],
              fill: false,
              borderColor: '#4bc0c0'
          },
          {
              label: 'Sensor humedad',
              data: [28, 29, 30, 29, 26, 27, 30],
              fill: false,
              borderColor: '#565656'
          },
          {
            label: 'Sensor evaporador',
            data: [50, 48, 45, 49, 50, 51, 47],
            fill: false,
            borderColor: 'blue'
        }
      ]
  }
  }
  getdataSensor()
  {
  
    const temperatura=this.sensorService.getSensorbyzone(this.idzone,this.idchamber,'temperatura');
    const humedad=this.sensorService.getSensorbyzone(this.idzone,this.idchamber,'humedad');
    const evaporador=this.sensorService.getSensorbyzone(this.idzone,this.idchamber,'evaporador');
    forkJoin(temperatura,humedad,evaporador).subscribe(rest=>{
      this.sensorList=[];
      console.log('REst',rest);
      rest[0].forEach(element => {
          this.sensorList.push(element);
      });
      rest[1].forEach(element => {
        this.sensorList.push(element);
      });
      rest[2].forEach(element => {
        this.sensorList.push(element);
      });

    },error=>{
      throw error;
    })
  }
  hidemodalperson() {
    this.display = false;
    this.outchambers.emit(this.display);
  }
  save() {
    
  }

}
export class Sensor {
  camera:string;
  date:string;
  id:number;
  sensor:string;
  value:string;
  zone:string;
  status:boolean;
}