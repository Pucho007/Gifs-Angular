import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebardComponent } from './sidebard/sidebard.component';



@NgModule({
  declarations: [
    SidebardComponent
  ],
  exports:[
    SidebardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
