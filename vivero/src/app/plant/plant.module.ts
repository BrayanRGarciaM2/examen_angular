import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantTypeComponent } from './plant-type/plant-type.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PlantListComponent, PlantTypeComponent],
  declarations: [PlantListComponent, PlantTypeComponent]
})
export class PlantModule { }
