import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer  } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SocketdataserviceService {
  socket;
  shapedata = new Observable((observer) => {
    this.socket.on('data', (res) => {
     observer.next(res);
   });
  });


  constructor() { }

  setupSocketConnection(w,h) {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('sizedata',{ w : w , h : h });
  }
  
}
