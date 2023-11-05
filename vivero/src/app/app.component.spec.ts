import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { PlantListComponent } from './plant/plant-list/plant-list.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [AppComponent, PlantListComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    
  });


});
