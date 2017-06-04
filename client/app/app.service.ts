import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

 @Injectable()
 export class VehicleService {

     constructor(private http: Http) {} 

     getVehicles() {
         return this.http.get('/api/vehicle')
                    .map(response => response.json());
     }

     addVehicle(vehicle) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post("/api/vehicle", JSON.stringify(vehicle), { headers: headers }) .map(response => response.json());
     }

     viewVehicle(id) {
         console.log('in vehicle service' + id);
         return this.http.get('/api/vehicle/'+id)
                    .map(response => response.json());
     }

     removeVehicle(id) {
         return this.http.delete("/api/vehicles/"+ id)
                .map(response => response.json());
     }

 }