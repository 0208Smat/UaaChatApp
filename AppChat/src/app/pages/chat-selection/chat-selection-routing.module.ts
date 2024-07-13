import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatSelectionPage } from './chat-selection.page';

const routes: Routes = [
  {
    path: '',
    component: ChatSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatSelectionPageRoutingModule {}
