import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {ThemeModule} from '../../@theme/theme.module';
import {NbLayoutModule} from "@nebular/theme";


@NgModule({
  imports: [
    ThemeModule,
    NbLayoutModule,
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [
  ],
})
export class HomeModule { }
