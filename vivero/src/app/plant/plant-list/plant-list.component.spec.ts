/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { PlantListComponent } from './plant-list.component';
import { Plant } from '../plant';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../plant.service';
import { PlantTypeComponent } from '../plant-type/plant-type.component';

describe('PlantListComponent', () => {
  let component: PlantListComponent;
  let fixture: ComponentFixture<PlantListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [PlantListComponent, PlantTypeComponent],
      providers: [PlantService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantListComponent);
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++) {
      const plant = new Plant(
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plants.push(plant);
    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should be 1 row of head in table', () => {
    expect(debug.queryAll(By.css('thead tr'))).toHaveSize(1);
  });

  it('should be 3 elements of info in table', () => {
    expect(debug.queryAll(By.css('tr #rowNumber'))).toHaveSize(3);
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(3);
  });
});
