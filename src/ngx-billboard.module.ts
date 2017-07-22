import { NgModule } from "@angular/core";
import {LineChartModule} from "./modules/line-chart/line-chart.module";


@NgModule({
    exports: [
        LineChartModule
    ]
})
export class NgxBillboard {}
