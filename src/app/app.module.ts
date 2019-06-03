import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataService } from './common/data.service';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { QuizComponent } from './common/quiz/quiz.component';
@NgModule({
    declarations: [
        AppComponent,
        PageOneComponent,
        PageTwoComponent,
        PageThreeComponent,
        QuizComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
