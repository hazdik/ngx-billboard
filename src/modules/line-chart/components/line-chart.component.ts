import {Component, Input, OnInit} from "@angular/core";
declare const bb: any;

@Component({
    selector: 'ngx-bb-line-chart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
    @Input('data') private data: any;
    native: any;

    ngOnInit() {
        this.native = bb.generate({
            data: { columns: this.data && this.data.constructor === Array ? this.data : [] },
            bindto: "#LineChart"
        });

        this.native.categories([
            "Category 1", "Category 2"
        ]);

        this.native.category(1, "Category 3");
        let data = this.native.data();
        setTimeout(() => {
            this.native.focus("data1");
            // this.native.regions([
            //         { axis: "x", start: 5, class: "regionX" },
            //         { axis: "y", end: 50, class: "regionY" }
            //     ])
            // this.native.resize({
            //         width: 640,
            //         height: 480
            //     })
            // this.native.select("data2", 1, true)
            // this.native.xs({
            //         data1: [10, 20, 30, 40,],
            //         data2: [100, 200, 300, 400]
            //     })
            this.native.zoom([1, 4]);
        }, 3000);

    }

    ngAfterViewInit() {

    }

    ngOnChanges(map: any) {
        console.log(map, this.data);
        if (map.data) this.onUpdateData();
    }

    onUpdateData() {
        if (!this.data || this.data && this.data.constructor !== Array) throw new Error('Invalid data type.');
        console.log(this.native);

        if (this.native) {
            this.native.load({ data: { columns: this.data }, });
            this.native.unload({ ids: 'data1' });
        }
    }
}
