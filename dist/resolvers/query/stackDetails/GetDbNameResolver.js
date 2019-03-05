'use strict';

var persistenceLayer = require('../../../data/configuration/Dbnames');
var sortDataArray = require('../../../services/sortArrayService');
module.exports = function () {
	var data = [];
	persistenceLayer.forEach(function (d) {
		data.push({
			id: d.id,
			layer_name: d.name
		});
	});

	// sort Data array by name
	var response = sortDataArray(data, 'layer_name');
	return response;
};