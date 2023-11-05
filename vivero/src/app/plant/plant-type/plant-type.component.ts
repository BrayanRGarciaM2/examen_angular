import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '../plant';

@Component({
  selector: 'app-plant-type',
  templateUrl: './plant-type.component.html',
  styleUrls: ['./plant-type.component.css']
})
export class PlantTypeComponent implements OnInit {

  @Input() plants!: Array<Plant>

  constructor() { }

  ngOnInit() {
  }

  getInteriorTypeNumber(): number {
    return this.plants.filter((plant) => plant.tipo === "Interior").length
  }

  getExteriorTypeNumber(): number {
    return this.plants.filter((plant) => plant.tipo === "Exterior").length
  }

}
