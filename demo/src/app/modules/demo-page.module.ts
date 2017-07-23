import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import {NgxBillboard} from "ngx-billboard";
import {Components} from "./components/index";
import {Services} from "./services";

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgxBillboard
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
