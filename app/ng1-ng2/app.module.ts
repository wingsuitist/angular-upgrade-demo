import { NgModule, forwardRef }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeAdapter } from '@angular/upgrade';

import { AppComponent }  from './app.component';
import { Ng2ListComponent }  from './ng2-list.component';
import { Ng2ItemComponent }  from './ng2-item.component';
import { Ng2Service }  from './ng2.service';

const adapter = new UpgradeAdapter(forwardRef(() => AppModule));

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Ng2ListComponent,
    Ng2ItemComponent,
    adapter.upgradeNg1Component('ng1Item')
  ],
  bootstrap: [ AppComponent ],
  providers: [ Ng2Service ]
})
export class AppModule { }