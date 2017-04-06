import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2PaginationModule} from 'ng2-pagination'; 


import { AppComponent } from './app.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserItemService } from './shared/user-item.service';
import { ErrorMessage } from './popup/popup.component';

@NgModule({
    imports: [
        BrowserModule, 
        FormsModule,
        HttpModule,
        Ng2PaginationModule
         ],
    declarations: [
        AppComponent,
        UserItemComponent,
        ErrorMessage
     ],
    providers: [ UserItemService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {

}
