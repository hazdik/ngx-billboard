# @samiyev/ngx-billboard - declarative Charting Framework for Angular2 and beyond!

## Installing

* You can grab the latest release from the via npm:

    ```
    $ npm install @samiyev/ngx-billboard --save
    ```

* You will also need to install the peer dependencies of the project:

    ```
    $ npm install billboard.js --save
    ```
    

* If You use angular-cli, you must add it to `.angular-cli.json`:

    ```ts
    "styles": [
           ...
        "../../node_modules/billboard.js/dist/billboard.css"
           ...
    ],
        
    "scripts": [
           ...
        "../node_modules/billboard.js/dist/billboard.js",
        "../node_modules/billboard.js/dist/billboard.pkgd.js"
           ...
    ]
    ```


## Usage

* You must import the following modules and add an imports array.
    * Note: Do not forget you should add it to each modules.

    ```
     import {NgModule} from "@angular/core";
     import {AppComponent} from "./app.component";
     import {AppRoutingModule} from "./app.routing";
     import {DemoPageModule} from "./modules/demo-page.module";
     import {BrowserModule} from "@angular/platform-browser";
     
     import {NgxBillboard} from "@samiyev/ngx-billboard";  
     
     @NgModule({
         imports: [
             BrowserModule,
             DemoPageModule,
             AppRoutingModule,
             
             NgxBillboard             
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
    ```
    
## Thank you for using our library !!!
    


    

