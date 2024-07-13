import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.page.html',
  styleUrls: ['./chat-room.page.scss'],
})
export class ChatRoomPage implements OnInit {
  roomName: string=''; 
  newMessage: string = ''; 
  messages: { username: string, text: string }[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const roomName = this.route.snapshot.paramMap.get('roomName');
    this.roomName = roomName ? roomName : 'Sala Desconocida';
  }

  sendMessage() {
    if (this.newMessage.trim().length === 0) {
      return;
    }
    const username = localStorage.getItem('username');
    const message = {
      username: username || 'UsuarioActual', 
      text: this.newMessage || '' 
    };
    this.messages.push(message);
    this.newMessage = '';
  }
}





