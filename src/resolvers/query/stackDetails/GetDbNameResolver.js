const persistenceLayer = require('../../../data/configuration/Dbnames');
const sortDataArray = require('../../../services/sortArrayService');
module.exports = function () {
	const data = [];
	persistenceLayer.forEach(d => {
		data.push({
			id: d.id,
			layer_name: d.name
		});
	});

	// sort Data array by name
	const response = sortDataArray(data, 'layer_name');
	return response;
};
