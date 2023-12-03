import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStackUsedComponent } from './tech-stack-used.component';

describe('TechStackUsedComponent', () => {
  let component: TechStackUsedComponent;
  let fixture: ComponentFixture<TechStackUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechStackUsedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechStackUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
