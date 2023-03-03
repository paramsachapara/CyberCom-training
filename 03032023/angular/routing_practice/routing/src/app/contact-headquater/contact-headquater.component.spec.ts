import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactHeadquaterComponent } from './contact-headquater.component';

describe('ContactHeadquaterComponent', () => {
  let component: ContactHeadquaterComponent;
  let fixture: ComponentFixture<ContactHeadquaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactHeadquaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactHeadquaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
