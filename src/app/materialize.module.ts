import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule	} from '@angular/material';
import {MatMomentDateModule	} from '@angular/material-moment-adapter';


import {FlexLayoutModule } from '@angular/flex-layout';



const MODULES = [
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatDatepickerModule,
  MatButtonModule,
  MatIconModule,
  MatNativeDateModule,
  FlexLayoutModule,
  MatMomentDateModule
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})

export class MaterialModule { }
