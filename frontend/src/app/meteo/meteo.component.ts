import {Component, Input, OnInit} from '@angular/core';
import {MeteoItem} from "../../model/MeteoItem";

@Component({
  selector: 'app-meteo-item',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {

  @Input()
  meteoItem!: MeteoItem
  constructor() { }

  ngOnInit(): void {
  }

}
