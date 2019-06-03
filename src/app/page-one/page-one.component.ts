import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
    selector: 'app-page-one',
    templateUrl: './page-one.component.html',
    styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
    constructor(private _dataService: DataService) { }

    questions: any;
    ngOnInit() {
        this._dataService.getQuizData({}).subscribe(response => {
            this.questions = response;
        },
            error => {
                console.log("Get Quiz data :: ", error);
            },
            () => {
                console.log(this.questions);
            });
    }
}
