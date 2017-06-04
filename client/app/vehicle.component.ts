import { Component } from '@angular/core';
import { VehicleService } from './app.service';

@Component({
    selector: 'vehicle',
    moduleId: module.id,
    templateUrl: 'vehicle.html',
    providers: [VehicleService]
})
export class VehicleComponent {
    vehicles: Array<any>;
    name: string;
    specificVehicleName: string;

    constructor(private vehicleService: VehicleService) {
       vehicleService.getVehicles().subscribe(response => {
           this.vehicles = response
       })
    }

    viewVehicle(id){
        console.log('vehicle component  with ' + id);
        this.vehicleService.viewVehicle(id).subscribe(data => {
            this.specificVehicleName = data.name;
        });
    }

    addVehicle(){
        var vehicle = {
            name: this.name
        }
        this.vehicleService.addVehicle(vehicle)
            .subscribe(data => {
                console.log('Success adding' + data)
                this.vehicles.push(vehicle);
            })
    }

    removeVehicle(id) {
        this.vehicleService.removeVehicle(id)
            .subscribe(data => {
                console.log('Success deleting ' + data);
                
            })
    }

}