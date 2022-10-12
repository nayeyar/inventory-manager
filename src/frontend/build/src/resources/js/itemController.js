import { getFetchRequest, getRequestHandler, promiseHandler } from "./utilities";

class ItemController {
	constructor(currentId = 0) {
		this.currentId = currentId;
		// Load localStorage and store it in this object's property _item's array if alread exists
		this._items = ItemController.loadItemsFromLocalStorage();
	}

	// Function that stores items as objects in a item array
	addItem(name, description, price, category, imageUrl, createdAt) {
		const itemObj = {
			name: name,
			description: description,
			price: price,
			category: category,
			imageUrl: imageUrl,
			createdAt: createdAt,
			id: this.currentId++,
		};
		this._items.push(itemObj);

		// Add and replace with updated array upon adding item
		localStorage.setItem("items", JSON.stringify(this._items));

		// Upload to database thru Dto making HTTP POST request
		this.save(name, description, price, category, imageUrl);
	}

	get items() {
		return this._items;
	}

	// Load localStorage and store it in this object's property _item's array
	static loadItemsFromLocalStorage() {
		const localItemStorage = localStorage.getItem("items");
		if (localItemStorage) {
			const storedItems = JSON.parse(localItemStorage);
			return storedItems;
		} else return [];
	}

	// Load items from database
	getAllItems() {
		const url = `http://localhost`;
		const port = `:8080`;
		const path = `/items`;
		const endpoint = `${url}${port}${path}`;

		return getRequestHandler(endpoint);

	}

	// HTTP request & response handler
	save(name, description, price, category, imageUrl) {
		// const data = { name, description, imageUrl };
		const data = {
			name: name,
			description: description,
			price: price,
			category: category,
			imageUrl: imageUrl,
		};
		console.log(JSON.stringify(data));
		fetch("http://localhost:8080/items", {
			method: "POST", // or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}

	update({ name, description, price, category, imageUrl }) {
		// TODO implement this method
		const data = {
			name: name,
			description: description,
			price: price,
			category: category,
			imageUrl: imageUrl,
		};

		fetch(`http://localhost:8080/items/${id}`, {
			method: "PUT", // 'POST' or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}

	delete(itemId) {
		// TODO implement this method
		const data = { itemId };

		fetch(`http://localhost:8080/items/${itemId}`, {
			method: "DELETE", // 'POST' or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}

	findById(itemId) {
		// TODO implement this method
		const data = { itemId };
		const url = `http://localhost:8080/items/${itemId}`;
		fetch(url, {
			method: "GET", // 'POST' or 'PUT'
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Success:", data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}
}

export default ItemController;
