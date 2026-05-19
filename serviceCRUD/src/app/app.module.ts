import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentDashboardComponent } from './shared/component/student-dashboard/student-dashboard.component';
import { StudentTableComponent } from './shared/component/student-table/student-table.component';
import { StudentFormComponent } from './shared/component/student-form/student-form.component';
import { GetConfirmationComponent } from './shared/component/get-confirmation/get-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDashboardComponent,
    StudentTableComponent,
    StudentFormComponent,
    GetConfirmationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
