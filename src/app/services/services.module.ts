import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SensorService } from './sensor.service';
import { ConfigService } from './config/config.service';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [   
     SensorService,
    ConfigService
  ],
})
export class ServicesModule {}
