import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'user-item',
    templateUrl: 'user-item.component.html',
    styleUrls: ['user-item.component.css']

})
export class UserItemComponent{
    active: boolean = false;
     @Input() user: string[];

     showDetails(){      
        this.active = !this.active;

     }
}