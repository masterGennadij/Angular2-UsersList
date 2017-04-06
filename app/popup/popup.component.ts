import { Component, Input, Output } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'popup',
    templateUrl: 'popup.component.html',
    styleUrls: ['popup.component.css']
})
export class ErrorMessage {
     private male: number;
      private female: number;
   public ErrorMessageIsVisible: boolean = false;

    showErrorMessage( percent:number, male:number,  female: number) {
        this.female = female;
        this.male = male;
        this.ErrorMessageIsVisible = true;
        setTimeout(()=>this.buildChart(percent, male), 1);
        document.body.style.overflow = 'hidden';
    }
    hideErrorMsg() {
        this.ErrorMessageIsVisible = false; 
        document.body.style.overflow = 'auto';     
    }
   buildChart(percent:number, male:number){            
        let circle = document.querySelector('.circle');       
        let valEl = male/percent;
        valEl = valEl*408/100;
        circle.innerHTML = '<svg width="160" height="160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 408px;" r="65" cx="-80" cy="80" /></svg>';
    }
} 