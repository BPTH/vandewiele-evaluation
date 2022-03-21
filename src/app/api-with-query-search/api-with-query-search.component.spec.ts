import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiWithQuerySearchComponent } from './api-with-query-search.component';

describe('ApiWithQuerySearchComponent', () => {
  let component: ApiWithQuerySearchComponent;
  let fixture: ComponentFixture<ApiWithQuerySearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiWithQuerySearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiWithQuerySearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
