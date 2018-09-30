import { Component,ViewChild  } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ChatbotPage} from '../../pages/chatbot/chatbot';
import { Nav, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: NavController;
    constructor(public navCtrl: NavController) {

  }  
 
  pushChat(){
    this.navCtrl.push(ChatbotPage);
  } 

}
