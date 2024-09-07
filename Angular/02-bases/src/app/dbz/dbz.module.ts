import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainComponent } from './pages/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';




@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    AddComponent
  ],
  exports:[
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]

})
export class DbzModule { }
