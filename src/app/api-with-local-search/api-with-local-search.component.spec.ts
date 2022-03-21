import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWithLocalSearchComponent } from './api-with-local-search.component';

describe('ApiWithLocalSearchComponent', () => {
  let component: ApiWithLocalSearchComponent;
  let fixture: ComponentFixture<ApiWithLocalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiWithLocalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiWithLocalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
