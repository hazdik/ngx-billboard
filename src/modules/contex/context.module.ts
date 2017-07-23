import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {ContextComponent} from "./components/context.component";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ContextComponent
    ],
    exports: [
        ContextComponent
    ],
    providers: []
})
export class ContextModule {
}
