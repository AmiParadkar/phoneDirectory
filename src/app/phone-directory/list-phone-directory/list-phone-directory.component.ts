import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Contact } from '../phone-directory.model';
import { PhoneDrirectoyService } from '../phone-directoy.service';

@Component({
  selector: 'app-list-phone-directory',
  templateUrl: './list-phone-directory.component.html',
  styleUrls: ['./list-phone-directory.component.css']
})
export class ListPhoneDirectoryComponent implements OnInit, OnDestroy{

  contactList: Contact[] = [];
  private sub: Subscription;
  constructor(private pbService: PhoneDrirectoyService) { }

  ngOnInit() {
    this.contactList = this.pbService.getMockContracts();
    this.sub = this.pbService.contactListSubject
        .subscribe(
          (data: Contact[]) =>{
            this.contactList = data;
          }
        )
  }
  getColor(index: number){
    console.log('indxex', index);
    if(index % 2 === 0){
      return '#f2f2f2';
    } else {
      return 'white';
    }
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
