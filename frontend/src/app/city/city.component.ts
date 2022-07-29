import {Component, Input, OnInit} from '@angular/core';
import {CityItem} from "../../model/CityItem";

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input()
  city!: CityItem;

  constructor() { }

  ngOnInit(): void {
  }

}
