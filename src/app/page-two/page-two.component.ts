import { Component, OnInit } from '@angular/core';
import { DataService } from '../common/data.service';

@Component({
    selector: 'app-page-two',
    templateUrl: './page-two.component.html',
    styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {

    constructor(private _dataService: DataService) { }

    questions: any;
    ngOnInit() {
        this._dataService.getQuizData2({}).subscribe(response => {
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
