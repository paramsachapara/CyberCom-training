import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactOfficeComponent } from './contact-office.component';

describe('ContactOfficeComponent', () => {
  let component: ContactOfficeComponent;
  let fixture: ComponentFixture<ContactOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
