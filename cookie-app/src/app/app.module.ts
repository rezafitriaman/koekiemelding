import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonsterComponent } from './monster/monster.component';
import { FooterComponent } from './footer/footer.component';
import { CrossComponent } from './cross/cross.component';
import { MiddleTextComponent } from './middle-text/middle-text.component';
import { SwitchPackageComponent } from './switch-package/switch-package.component';

@NgModule({
  declarations: [
    AppComponent,
    MonsterComponent,
    FooterComponent,
    CrossComponent,
    MiddleTextComponent,
    SwitchPackageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
