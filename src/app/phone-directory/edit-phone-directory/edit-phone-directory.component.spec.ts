import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhoneDirectoryComponent } from './edit-phone-directory.component';

describe('EditPhoneDirectoryComponent', () => {
  let component: EditPhoneDirectoryComponent;
  let fixture: ComponentFixture<EditPhoneDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPhoneDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhoneDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
