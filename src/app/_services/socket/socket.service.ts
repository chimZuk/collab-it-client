/*@Injectable({
  providedIn: 'root'
})*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable()
export class SocketService {
  //private url = 'http://localhost';
  private url ='http://chimzuk.com';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public userJoin(user) {
    this.socket.emit('user-joined', user);
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public messageHotStatus(message) {
    this.socket.emit('message-hotness', message);
  }

  public sendPizzaData(message) {
    console.log(message);
    this.socket.emit('pizza-drag', message);
  }

  public getPizzaData = () => {
    return Observable.create((observer) => {
      this.socket.on('pizza-data', (message) => {
        observer.next(message);
      });
    });
  }

  public getJoined = () => {
    return Observable.create((observer) => {
      this.socket.on('user-joined', (user) => {
        observer.next(user);
      });
    });
  }

  public endOfGame = () => {
    return Observable.create((observer) => {
      this.socket.on('endgame', (data) => {
        observer.next(data);
      });
    });
  }

  public getUsers = () => {
    return Observable.create((observer) => {
      this.socket.on('users', (user) => {
        observer.next(user);
      });
    });
  }

  public getAllMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('messages', (messages) => {
        observer.next(messages);
      });
    });
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

  public getMessageHotness = () => {
    return Observable.create((observer) => {
      this.socket.on('message-hotness', (message) => {
        observer.next(message);
      });
    });
  }

  public getTime = () => {
    return Observable.create((observer) => {
      this.socket.on('time', (message) => {
        observer.next(message);
      });
    });
  }
}

