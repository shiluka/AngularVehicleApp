var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var VehicleSchema = new Schema({
    name: String
});

var Model = mongoose.model('Vehcile', VehicleSchema);

module.exports = Model;