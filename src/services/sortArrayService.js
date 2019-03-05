module.exports = function (data, sortField) {
	const respo = data.sort(function (a, b) {
		var nameA = a[sortField].toUpperCase(); // ignore upper and lowercase
		var nameB = b[sortField].toUpperCase(); // ignore upper and lowercase
		if (nameA < nameB) return -1;
		if (nameA > nameB) return 1;
		return 0;
	});

	return Promise.resolve(respo);
};
