import {Component, Input, OnInit} from "@angular/core";
declare const bb: any;

@Component({
    selector: 'ngx-bb-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
    @Input('data')
    private data:any;

    constructor() {
    }

    ngOnInit() {
        var chart = bb.generate({
            "data": {
                "columns": [
                    ["data1", 30, 200, 100, 400, 150, 250],
                    ["data2", 50, 20, 10, 40, 15, 25]
                ]
            },
            "bindto": "#LineChart"
        });
    }
}
