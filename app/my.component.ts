import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
     selector: 'my-component',
  templateUrl: 'app/my.component.html'
})
export class MyComponent{
    @Input() 
    myString: string;

    @Output()
    myEvent = new EventEmitter();

    onButtonEventClick(){
        this.myEvent.next("hello");
    }
}