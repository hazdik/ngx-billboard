import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {LineChartComponent} from "./components/line-chart.component";
import {ContextModule} from "../contex";
import {ContextComponent} from "../contex/components/context.component";


@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        LineChartComponent,
        ContextComponent
    ],
    exports: [
        LineChartComponent
    ],
    providers: []
})
export class LineChartModule {}
