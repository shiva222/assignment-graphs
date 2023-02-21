import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLayoutComponent } from './graph-layout.component';

describe('GraphLayoutComponent', () => {
  let component: GraphLayoutComponent;
  let fixture: ComponentFixture<GraphLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
