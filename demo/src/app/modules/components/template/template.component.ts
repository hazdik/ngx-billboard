import {Component, OnInit} from "@angular/core";
import {TemplateService} from "../../services/template.service";

@Component({
    selector: 'demo-template',
    templateUrl: './template.component.html',
    styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

    constructor(private templateService: TemplateService) {
    }

    ngOnInit() {
    }

}
