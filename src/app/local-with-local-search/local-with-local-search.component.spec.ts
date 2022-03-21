import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalWithLocalSearchComponent } from './local-with-local-search.component';

describe('LocalWithLocalSearchComponent', () => {
  let component: LocalWithLocalSearchComponent;
  let fixture: ComponentFixture<LocalWithLocalSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocalWithLocalSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalWithLocalSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
