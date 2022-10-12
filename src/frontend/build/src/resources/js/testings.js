// Old algorithm from addItem function of ItemController before loading localStorage in constructor
// Another way to Add/Update this._items array of objects as items in localStorage
// Check if the localStorage already exists to update, else create one with the current session array.
// this._array is property of the dynamic object of this class initialized in item-form
// const localItemStorage = localStorage.getItem("items");
// if (localItemStorage) {
// 	const storedItems = JSON.parse(localItemStorage);
// 	storedItems.push(itemObj);
// 	localStorage.setItem("items", JSON.stringify(storedItems));
// } else {
// 	localStorage.setItem("items", JSON.stringify(this._items));
// }

// popupDialogModal = () => {
//     const clearConfirmDialog = document.createElement("dialog");

//     const dialogForm = document.createElement("form");
//     dialogForm.setAttribute("method", "dialog");

//     const dialogParagraph = document.createElement("p");
//     dialogParagraph.setAttribute("class", "dialog-paragraph");
//     dialogParagraph.textContent = "Clear all your recent cache.";

//     const dialogButtons = document.createElement("div");
//     dialogButtons.setAttribute("class", "text-center");

//     const dialogCancel = document.createElement("button");
//     dialogCancel.setAttribute("type", "reset");
//     dialogCancel.innerText = "Cancel";

//     const dialogConfirm = document.createElement("button");
//     dialogConfirm.setAttribute("type", "submit");
//     dialogConfirm.innerText = "Confirm";
// };
