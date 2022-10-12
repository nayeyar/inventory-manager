// Imports
import ItemController from "./itemController.js";

// Initialize a new Object
// const itemObj = new ItemController();

// DOM Section to render added item cards
// const listItems = document.getElementById("list-items");

// Function that create Card Representation of the item and append it to a given element in argument
const addItemCard = (item, element) => {
	// const listItems = document.getElementById("list-items");

	const newItemCol = document.createElement("div");
	newItemCol.setAttribute("class", "col");

	const newItemCard = document.createElement("div");
	newItemCard.setAttribute("class", "card my-1");
	newItemCard.setAttribute("style", "width: 18rem;");

	// Item Image
	const itemCardImg = document.createElement("img");
	itemCardImg.setAttribute("src", `${item.imageUrl}`);

	const itemCardBody = document.createElement("div");
	itemCardBody.setAttribute("class", "card-body");

	// Item Name/Title
	const itemCardTitle = document.createElement("h5");
	itemCardTitle.setAttribute("class", "card-title text-center");
	itemCardTitle.innerHTML = `${item.name}`;

	// Item Description
	const itemCardText = document.createElement("p");
	itemCardText.setAttribute("class", "card-text");
	itemCardText.innerHTML = `<strong>Description:</strong> ${item.description}`;

	// Item Price
	const itemCardPrice = document.createElement("p");
	itemCardPrice.setAttribute("class", "card-text");
	itemCardPrice.innerHTML = `<strong>Price:</strong> $${item.price}`;

	// Item Button
	const itemAnchorButton = document.createElement("a");
	itemAnchorButton.setAttribute("class", "btn btn-indigo");
	itemAnchorButton.setAttribute("href", `${item.imageUrl}`);
	itemAnchorButton.setAttribute("target", "_blank");
	itemAnchorButton.textContent = "View item";

	// Append elements in order
	itemCardBody.append(
		itemCardTitle,
		itemCardText,
		itemCardPrice,
		itemAnchorButton
	);
	newItemCard.append(itemCardImg, itemCardBody);
	newItemCol.appendChild(newItemCard);
	element.appendChild(newItemCol);
};

// Render item cards on the page from the array list
const renderItemCards = (itemList, element) => {
	// console.log(itemList);
	try {
		if (itemList.length > 0) {
			for (let i = 0; i < itemList.length; i++) {
				addItemCard(itemList[i], element);
			}
		} else {
			window.alert(
				"Your shop is empty. Add product to display them on the page."
			);
		}
	} catch (error) {
		console.log(error.message);
	}
};

export { addItemCard, renderItemCards };

// Function that renderItemCards from LocalStorage
// const renderItemCards = () => {
// 	// itemObj.loadItemsFromLocalStorage();
// 	try {
// 		if (itemObj.items.length > 0) {
// 			for (let i = 0; i < itemObj.items.length; i++) {
// 				addItemCard(itemObj.items[i]);
// 			}
// 		} else {
// 			window.alert(
// 				"Your shop is empty. Add product to display them on the page."
// 			);
// 		}
// 	} catch (error) {
// 		console.log(error.message);
// 	}
// };

// Load the card from localStorage on page load
// window.onload = () => {
//     renderItemCards();       // Can either be invoked in item-forms.js or here
// };
