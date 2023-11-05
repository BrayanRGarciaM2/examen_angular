/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlantTypeComponent } from './plant-type.component';
import { faker } from '@faker-js/faker';
import { Plant } from '../plant';

describe('PlantTypeComponent', () => {
  let component: PlantTypeComponent;
  let fixture: ComponentFixture<PlantTypeComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantTypeComponent);
    component = fixture.componentInstance;

    component.plants = []
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
