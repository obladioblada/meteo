import {Component} from '@angular/core';
import {MeteoService} from './meteo.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meteo';
  
  constructor(private meteoService: MeteoService) {
  }

  search(location: string) {
    this.meteoService.getMeteoForLocation(location)
  }
}
