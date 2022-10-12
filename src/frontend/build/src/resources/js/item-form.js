// Import
import ItemController from "./itemController.js";
import { addItemCard, renderItemCards } from "./items.js";

// Initialize ItemController object to control items
const itemObj = new ItemController(); // itemController object

// DOM Elements
const itemForm = document.querySelector(".itemForm"); // form
const dialogContainer = document.getElementById("dialog-container"); // dialog container
const listAllItems = document.querySelector("#list-all-items"); // list all items
const listItems = document.querySelector("#list-items"); // list items

// Load the card from localStorage on page load
// renderitemCards();    // Can either be invoked in items.js or here

itemForm.onsubmit = (event) => {
	event.preventDefault();

	const itemName = document.getElementById("itemName");
	const itemDescription = document.getElementById("itemDescription");
	const itemPrice = document.getElementById("itemPrice");
	const itemCategory = document.getElementById("itemCategory");
	const itemImg = document.getElementById("itemImg");

	// Run method that create object and push it in Object._items array
	itemObj.addItem(
		itemName.value,
		itemDescription.value,
		itemPrice.value,
		itemCategory.value,
		itemImg.value,
		Date()
	);

	// Upload Database
	// itemObj.save(itemName.value, itemDescription.value, itemImg.value);

	// Create card element and append on both local and db section when the event triggered
	addItemCard(itemObj.items.at(-1), listItems);
	addItemCard(itemObj.items.at(-1), listAllItems);

	// Clear the form on event triggered
	itemName.value = "";
	itemDescription.value = "";
	itemPrice.value = "";
	itemCategory.value = "";
	itemImg.value = "";

	// Logging localStorage when the form event triggered
	console.log(localStorage.getItem("items"));
	console.log(itemObj);
	console.log(itemObj.items);
};

// Bootstrap static backdrop modal dialog structure
// this function takes the container element the modal will be append, and the dialog title and dialog contents
const bootstrapDialogModal = (container, title, body) => {
	const modal = document.createElement("div");
	modal.className = "modal fade";
	modal.setAttribute("id", "clearStaticBackdrop");
	modal.setAttribute("data-bs-backdrop", "static");
	modal.setAttribute("data-bs-keyboard", "false");
	modal.setAttribute("tabindex", "-1");
	modal.setAttribute("aria-labelledby", "clearStaticBackdropLabel");
	modal.setAttribute("aria-hidden", "true");

	const modalDialog = document.createElement("div");
	modalDialog.className = "modal-dialog";

	const modalContent = document.createElement("div");
	modalContent.className = "modal-content";

	const modalHeader = document.createElement("div");
	modalHeader.className = "modal-header";

	const modalTitle = document.createElement("h1");
	modalTitle.className = "modal-title fs-5";
	modalTitle.setAttribute("id", "clearStaticBackdropLabel");
	modalTitle.innerText = `${title}`;

	const modalCloseBtn = document.createElement("button");
	modalCloseBtn.setAttribute("type", "button");
	modalCloseBtn.className = "btn-close";
	modalCloseBtn.setAttribute("data-bs-dismiss", "modal");
	modalCloseBtn.setAttribute("aria-label", "Close");

	const modalBody = document.createElement("div");
	modalBody.className = "modal-body";
	modalBody.textContent = `${body}`;

	const modalFooter = document.createElement("div");
	modalFooter.className = "modal-footer";

	const dialogCancelBtn = document.createElement("button");
	dialogCancelBtn.setAttribute("type", "button");
	dialogCancelBtn.className = "btn btn-secondary";
	dialogCancelBtn.setAttribute("data-bs-dismiss", "modal");
	dialogCancelBtn.innerText = "Cancel";

	const dialogConfirmBtn = document.createElement("button");
	dialogConfirmBtn.setAttribute("type", "button");
	dialogConfirmBtn.className = "btn btn-primary";
	dialogConfirmBtn.innerText = "Confirm";

	modalHeader.append(modalTitle, modalCloseBtn);
	modalFooter.append(dialogCancelBtn, dialogConfirmBtn);
	modalContent.append(modalHeader, modalBody, modalFooter);
	modalDialog.appendChild(modalContent);
	modal.appendChild(modalDialog);

	container.appendChild(modal);

	dialogConfirmBtn.onclick = () => {
		localStorage.removeItem("items");
		location.reload();
	};
};

// Functions to run on page load
window.onload = () => {
	// Load the card with items from localStorage on page load
	renderItemCards(itemObj.items, listItems);

	// Load the card with items from database on page load
	itemObj.getAllItems().then((items) => renderItemCards(items, listAllItems));

	// Function to handle modal loading that create the dialog modal and
	// append it to the dialog-container on page load
	bootstrapDialogModal(
		dialogContainer,
		"Clear",
		"Are you sure you want to clear recent from your local cache?"
	);
};

// Logging localStorage when the page reload
//console.log(localStorage.getItem("items"));
console.log(itemObj);
console.log(itemObj.items);
