import { Component, HostBinding } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [DatePipe]
})

export class FooterComponent{
    //Variables
    currentDate : Date = new Date();
}
