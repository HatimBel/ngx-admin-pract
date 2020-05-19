import { NgModule } from '@angular/core';
import {LandingPageComponent} from './landing-page.component';
import {NbCardModule, NbLayoutModule, NbMenuModule, NbSidebarModule} from "@nebular/theme";
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    NbLayoutModule,
    NbSidebarModule,
    AppRoutingModule,
    NbCardModule,
    NbMenuModule,
  ],
  declarations: [
    LandingPageComponent,
  ],
  providers: [
  ],
})
export class LandingPageModule { }
