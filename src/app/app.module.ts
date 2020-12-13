import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PhoneDirectoryComponent } from './phone-directory/phone-directory.component';
import { ListPhoneDirectoryComponent } from './phone-directory/list-phone-directory/list-phone-directory.component';
import { EditPhoneDirectoryComponent } from './phone-directory/edit-phone-directory/edit-phone-directory.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneDirectoryComponent,
    ListPhoneDirectoryComponent,
    EditPhoneDirectoryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
