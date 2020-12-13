import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPhoneDirectoryComponent } from './list-phone-directory.component';

describe('ListPhoneDirectoryComponent', () => {
  let component: ListPhoneDirectoryComponent;
  let fixture: ComponentFixture<ListPhoneDirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPhoneDirectoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPhoneDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
