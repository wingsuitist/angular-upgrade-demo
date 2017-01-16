import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { Ng2ListComponent }  from './ng2-list.component';
import { Ng2ItemComponent }  from './ng2-item.component';
import { Ng2Service }  from './ng2.service';

import { Ng1ListComponent } from './ng1-list.adapter';
import { Ng1ItemComponent } from './ng1-Item.adapter';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Ng2ListComponent,
    Ng2ItemComponent,
    Ng1ItemComponent,
    Ng1ListComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ Ng2Service ]
})
export class AppModule { }