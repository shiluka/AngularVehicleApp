import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 

@NgModule({
    imports: [BrowserModule, HttpModule, FormsModule],
    declarations: [AppComponent, VehicleComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}