import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  exports: [FormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
