import { Component, OnInit } from '@angular/core';
import { DataService } from './common/data.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private _dataService: DataService) { }

    ngOnInit() {
        
    }
}
