import { Component, OnInit, Input, Output, AfterViewInit, OnChanges, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit, AfterViewInit, OnChanges {

    constructor() { }
    @Input() questions: any;
    @Output() answerSheet = new EventEmitter();
    tempQuestionList: any = [];
    startIndex: any = 0;
    EndIndex: any = 2;
    isPrevious: boolean = true;
    isNext: boolean = false;
    isLastPage: boolean = true;

    ngOnInit() {
        if (Boolean(this.questions) && this.questions.length > 0) {
            this.tempQuestionList = this.questions.slice(this.startIndex, this.EndIndex);
        }
    }

    ngAfterViewInit() {
    }

    ngOnChanges() {
        if (Boolean(this.questions) && this.questions.length > 0)
            this.tempQuestionList = this.questions.slice(this.startIndex, this.EndIndex);
    }

    fnPrevious() {
        if ((this.EndIndex) > 2) {
            this.startIndex -= 2;
            this.EndIndex -= 2;
            this.tempQuestionList = this.questions.slice(this.startIndex, this.EndIndex);
            this.isNext = false;
            this.isLastPage = true;
        } else {
            this.isPrevious = true;
            this.isNext = false;
            this.isLastPage = true;
        }
    }

    fnNext() {
        if ((this.questions.length - this.EndIndex) > 0) {
            this.startIndex += 2;
            this.EndIndex += 2;
            this.tempQuestionList = this.questions.slice(this.startIndex, this.EndIndex);
            this.isPrevious = false;

        } else {
            this.isNext = true;
            this.isLastPage = false;
        }
    }

    fnFinish() {
        if (confirm("Do you want to finish the quiz?")) {
            this.answerSheet.emit({ answer: this.questions });
        }
    }
    fnGetItemDetails(question, option) {
        this.questions.forEach(element => {
            if (element.question == question) {
                element.options.forEach(element => {
                    if (element.option == option) {
                        element.isSelected = !element.isSelected;
                    } else {
                        element.isSelected = false;
                    }
                });
            }
        });
    }

    fnGetOption(item) {
        if (item.isSelected)
            return item.option;
        else
            return "";
    }
}
