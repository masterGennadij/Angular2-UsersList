import  { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { UserItemService } from './shared/user-item.service';
 import {PaginatePipe,  PaginationService} from 'ng2-pagination';
import { ErrorMessage } from './popup/popup.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    providers: [PaginationService]
})
export class AppComponent implements OnInit {
    users: any;
    usersFiltered: any;
    title:string = 'Random Users';
    male: number = 0;
    female: number = 0;
    percent: number = 0;
    popup: boolean = false;
     toggle = new EventEmitter;
@ViewChild(ErrorMessage) errorMessage: ErrorMessage
    constructor(private userItemService: UserItemService) {    
    }
    ngOnInit() {     
        this.userItemService.getUsers().then(users=>this.users = users).then(users=>this.usersFiltered = users); 
          }
    resetUsers(){
        this.userItemService.getUsers().then(users=>this.users = users).then(users=>this.usersFiltered = users);
    }
    countGender(){      
       this.male= 0;
       this.female = 0;
       let that = this;
        this.users.forEach(function(user: any){
            (user.gender==='male')?that.male++:that.female++;            
        })
        this.percent = (this.male+this.female)/100;        
    }   
    show() {
          this.countGender();
          this.errorMessage.showErrorMessage( this.percent, this.male , this.female);
    }
    filterItem(value: string){
        if(!value) this.usersCopy();  
        this.usersFiltered = Object.assign([], this.users).filter(
         (user:any)  => user.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1)
    }
    usersCopy(){
        this.usersFiltered = Object.assign([], this.users);
    }
    
}