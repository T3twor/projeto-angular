import { Component } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { FloatComponent } from "./float/float.component";

@Component({
    selector: 'app-home',
    template: `
    <app-header></app-header>
    <app-main></app-main>
    <app-float></app-float>
    `,
    standalone:true,
    imports: [
        HeaderComponent,
        MainComponent,
        FloatComponent
    ],

})

export class HomeComponent {}