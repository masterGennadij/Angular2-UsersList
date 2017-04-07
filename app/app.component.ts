import  { Component, OnInit, ViewChild, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { UserItemService } from './shared/user-item.service';
import {PaginatePipe,  PaginationService} from 'ng2-pagination';
import { ErrorMessage } from './popup/popup.component';
import { UserItemComponent } from './user-item/user-item.component';

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
    title:string = 'Get Random Users';
    male: number = 0;
    female: number = 0;
    percent: number = 0;
    popup: boolean = false;
     toggle = new EventEmitter;
     value: boolean = false;
     sortByName:boolean = false;
     sortByNameLast:boolean = false;
@ViewChild(ErrorMessage) errorMessage: ErrorMessage
@ViewChildren(UserItemComponent) userItemComponent: QueryList<UserItemComponent>;

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
    onChanged(event: any){
       this.userItemComponent.forEach(item=>(item.user==event)?'' : item.active = false);     
       
    }
    sortFirstName() {
         if (!this.sortByName) {       
        this.usersFiltered.sort( function(name1: any, name2: any) {
	    if ( name1.name.first < name2.name.first ){
	    	return -1;
	    }else if( name1.name.first > name2.name.first ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
    this.sortByName = !this.sortByName;
    this.sortByNameLast = false;
    
    } else {
          this.usersFiltered.sort( function(name1: any, name2: any) {
	    if ( name1.name.first < name2.name.first ){
	    	return 1;
	    }else if( name1.name.first > name2.name.first ){
	        return -1; 
	    }else{
	    	return 0;	
	    }
	});
  this.sortByName = !this.sortByName;      
    }
}
    sortLastName() {
         if (!this.sortByNameLast) {       
        this.usersFiltered.sort( function(name1: any, name2: any) {
	    if ( name1.name.last < name2.name.last ){
	    	return -1;
	    }else if( name1.name.last > name2.name.last ){
	        return 1;
	    }else{
	    	return 0;	
	    }
	});
    this.sortByNameLast = !this.sortByNameLast;
    this.sortByName = false;
    } else {
          this.usersFiltered.sort( function(name1: any, name2: any) {
	    if ( name1.name.last < name2.name.last ){
	    	return 1;
	    }else if( name1.name.last > name2.name.last ){
	        return -1;
	    }else{
	    	return 0;	
	    }
	});
  this.sortByNameLast = !this.sortByNameLast;      
    }
}
}