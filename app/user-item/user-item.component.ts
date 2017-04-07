import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'user-item',
    templateUrl: 'user-item.component.html',
    styleUrls: ['user-item.component.css']

})
export class UserItemComponent{
    @Output() hideAll = new EventEmitter();
    active: boolean = false;
    toggle: boolean = false;
     @Input() user: any;
     @Input() value: boolean;
     showDetails(){      
        this.active = !this.active;
        this.toggle = !this.toggle;
     }
     hide() {
        this.hideAll.emit(this.user);
    }
}