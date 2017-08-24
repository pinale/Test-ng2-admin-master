import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewComponent } from './new.component';
import { routing } from './new.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
      NewComponent
  ]
})
export class NewModule { }
