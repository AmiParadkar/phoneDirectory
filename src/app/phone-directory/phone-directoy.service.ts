import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { MOCK_CONTACT_LIST } from "./mock-contact";
import { Contact } from "./phone-directory.model";

@Injectable({providedIn:'root'})
export class PhoneDrirectoyService {
    contactListSubject  = new Subject<Contact[]>();
    private contactList: Contact[];
 
    constructor(private http: HttpClient){
        this.getMockContracts();
    }

    getMockContracts(): Contact[]{
        this.contactList = MOCK_CONTACT_LIST;
        return this.contactList.slice();
    }
    saveMockContracts(cont: Contact): void{
        this.contactList.push(cont);
        this.contactListSubject.next(this.contactList.slice());
    }
} 