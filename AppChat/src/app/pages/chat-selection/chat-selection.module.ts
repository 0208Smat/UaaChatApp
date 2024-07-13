import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatSelectionPageRoutingModule } from './chat-selection-routing.module';

import { ChatSelectionPage } from './chat-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatSelectionPageRoutingModule
  ],
  declarations: [ChatSelectionPage]
})
export class ChatSelectionPageModule {}
