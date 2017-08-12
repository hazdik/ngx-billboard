import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'demo-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    private data: any;

    constructor() {
        this.data = [
            [
                "data1",
                30,
                200,
                100,
                400,
                150,
                250
            ],
            [
                "data2",
                50,
                20,
                10,
                40,
                15,
                25
            ]
        ]
    }

    ngOnInit() {
        let data = [ ["x", "2013-01-11", "2013-01-21"],
            ["data1", 500, 200],
            ["data2", 100, 300],
            ["data3", 200, 120]];
        setInterval(()=>{
            this.onUpdate(data)
        }, 1500);
    }

    onUpdate(data){
        // this.data = [...data];
    }
}
