const getRequestHandler = async (endpoint) => {
	try {
		const response = await fetch(endpoint);
		if (response.ok) {
			const data = await response.json();
			return data;
		} else {
			throw new Error(response.status);
		}
	} catch (err) {
		console.error("Error:", err);
	}
};

const getFetchRequest = (endpoint) => {
	return fetch(endpoint)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			return data;
		})
		.catch((err) => {
			console.error(err);
		});
};

const promiseHandler = (promise) => {
	promise.then((data) => {
		return data;
	});
};

export { getRequestHandler, getFetchRequest, promiseHandler };
