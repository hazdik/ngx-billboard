import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {LineChartComponent} from "./components/line-chart.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LineChartComponent
    ],
    exports: [
        LineChartComponent
    ],
    providers: []
})
export class LineChartModule {}