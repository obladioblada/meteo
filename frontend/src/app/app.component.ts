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
  error!: string;

  constructor(private meteoService: MeteoService) {
  }

  ngOnInit(): void {
    this.meteoSubscription = this.meteoService.getMeteoForLocation('rome')
      .subscribe((resp) => {
          this.meteo = resp;
          console.log(resp)
        }
      );
  }

  isEmpty(obj: any) {
    return Object.keys(obj).length === 0 || obj === undefined;
  }

  search(location: string) {
    if (location.length > 0) {
      this.meteoSubscription = this.meteoService.getMeteoForLocation(location)
        .subscribe((resp) => {
            console.log(resp);
            if (this.isEmpty(resp)) {
              console.log("no resp from server")
            }
            this.meteo = resp;
          }
        );
    }
  }

  ngOnDestroy(): void {
    this.meteoSubscription.unsubscribe();
  }
}
