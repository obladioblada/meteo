import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {MeteoService} from './meteo.service';
import {MeteoResponse} from "../model/MeteoResponse";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'meteo';
  meteo!: MeteoResponse;
  meteoSubscription!: Subscription

  constructor(private meteoService: MeteoService) {
  }

  ngOnInit(): void {
    this.meteoSubscription = this.meteoService.getMeteoForLocation('rome')
      .subscribe((resp) => {
          console.log(resp);
          this.meteo = resp;
        }
      );
  }

  search(location: string) {

  }

  ngOnDestroy(): void {
    this.meteoSubscription.unsubscribe();
  }
}
