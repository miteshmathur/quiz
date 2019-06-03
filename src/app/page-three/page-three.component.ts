import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
    selector: 'app-page-three',
    templateUrl: './page-three.component.html',
    styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

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
