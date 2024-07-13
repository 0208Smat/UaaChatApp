import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-selection',
  templateUrl: './chat-selection.page.html',
  styleUrls: ['./chat-selection.page.scss'],
})
export class ChatSelectionPage {

  constructor(private router: Router) {}

  enterChatRoom(roomName: string) {
    this.router.navigate(['/chat-room'], { queryParams: { room: roomName } });
  }
}

