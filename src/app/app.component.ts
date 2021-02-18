import { Component } from '@angular/core';
import { SocketdataserviceService } from './socketdataservice.service';
import $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'tericPractical';
  w = window.innerWidth;
  h = window.innerHeight;
  resdata = {type : '',location : { x : 0 , y : 0}};

  constructor(private socketService: SocketdataserviceService) { }

  ngOnInit() {
    this.socketService.setupSocketConnection(this.w,this.h);
    this.displaydata();
  }

  displaydata(){
    const locationsSubscription = this.socketService.shapedata.subscribe({
      next(res) {
        this.resdata = res;
        if(this.resdata.type=="circle"){
          $('#circlediv').css( { 'position': 'absolute', 'left': this.resdata.location.x , 'top':  this.resdata.location.y });
        }else{
          $('#squarediv').css( { 'position': 'absolute', 'left':  this.resdata.location.x , 'top':  this.resdata.location.y });
        }
      },
      error(msg) {
        console.log('Error ', msg);
      }
    });
  }

}
