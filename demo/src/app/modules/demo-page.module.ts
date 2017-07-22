import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {LineChartModule} from "ngx-billboard";
import {Components} from "./components/index";
import {Services} from "./services";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        LineChartModule
    ],
    declarations: [
        ...Components
    ],
    exports: [
        ...Components
    ],
    providers: [
        ...Services
    ]
})
export class DemoPageModule {
}
