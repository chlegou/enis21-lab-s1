import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MemberListComponent} from './member-list/member-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MemberFormComponent} from './member-form/member-form.component';
import {SharedModule} from '../@root/shared.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberFormComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
