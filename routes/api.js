var express = require('express');
var router = express.Router();
var Model = require('../models/model.js');

router.get('/vehicles/:id', function(request, response) {
    console.log('getting a vehicle');
    var id = request.params.id;
    Model.findById(id, function(err, res) {
        if (err) {
            return response.send(err);
        } else {
            var vehicle = res;
            response.json(vehicle);
        }
    });
});


router.get('/vehicle', function(request, response) {
    Model.find({}, function(err, resources) {
        if (err) {
            response.send(err).status(404);
        } else {
            response.send(resources).status(200);
        }
    });
});

router.delete('/vehicles/:id', function(request, response) {
    var id = request.params.id;
    Model.remove({ _id: id }, function(err, resource) {
        if (err) {
            return response.send(err);
        } else {
            response.send(resource);
        }
    })
});

router.post('/vehicle', function(request, response) {
    var vehicle = new Model(request.body);
    vehicle.save(function(err, resource) {
        if (err) {
            response.send(err).status(501);
        } else {
            response.json(resource).status(201);
        }
    });
});


module.exports = router;