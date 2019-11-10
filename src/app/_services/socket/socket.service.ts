/*@Injectable({
  providedIn: 'root'
})*/
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';


@Injectable()
export class SocketService {
  private url = 'http://localhost';
  //private url ='http://chimzuk.com';
  private socket;

  constructor() {
    this.socket = io(this.url);
  }

  public sendMessage(message) {
    this.socket.emit('new-message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('new-message', (message) => {
        observer.next(message);
      });
    });
  }

  /*send(i, j) {
    this.socket.emit('/socket/keySend', {
      data: {
        token: JSON.parse(localStorage.getItem('currentUser')).token,
        key: {
          i: i,
          j: j
        }
      }
    });
  }

  chat() {
    let observable = new Observable(observer => {

      this.socket.on('online', (data) => {
        observer.next(JSON.stringify(
          {
            id: data.userId,
            type: 'online'
          }
        ));
      });
    });
    return observable;
  }
  connect() {
    console.log("here");
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }*/
}

