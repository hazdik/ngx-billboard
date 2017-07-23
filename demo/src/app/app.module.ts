import {NgModule} from "@angular/core";
import {NgxBillboard} from "ngx-billboard";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app.routing";
import {DemoPageModule} from "./modules/demo-page.module";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
    imports: [
        BrowserModule,
        DemoPageModule,
        NgxBillboard,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
    ],
    providers: [],
    entryComponents: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
