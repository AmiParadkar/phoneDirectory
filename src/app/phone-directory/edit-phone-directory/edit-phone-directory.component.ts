import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from '../phone-directory.model';
import { PhoneDrirectoyService } from '../phone-directoy.service';

@Component({
  selector: 'app-edit-phone-directory',
  templateUrl: './edit-phone-directory.component.html',
  styleUrls: ['./edit-phone-directory.component.css']
})
export class EditPhoneDirectoryComponent implements OnInit {

  contactForm: FormGroup;
  constructor(private pdService: PhoneDrirectoyService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm(): void{
    this.contactForm = new FormGroup({
      'name': new FormControl(null,[Validators.required, Validators.pattern("[a-zA-Z ]*"), Validators.maxLength(20)]),
      'mobile': new FormControl(null, [Validators.required, Validators.pattern("[0-9]{10}"),Validators.minLength(10),Validators.maxLength(10)]),
      'email': new FormControl(null,[Validators.required,Validators.email, Validators.maxLength(40)])
    });
  }
  onSubmit():void {
    const cont = new Contact(this.contactForm.get('name').value,
                        this.contactForm.get('mobile').value,
                        this.contactForm.get('email').value);
    this.pdService.saveMockContracts(cont);
    this.contactForm.reset();
    
  }


}
