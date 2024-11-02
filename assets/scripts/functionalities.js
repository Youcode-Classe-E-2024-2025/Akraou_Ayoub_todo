import taches from "./data.js";
import TacheComponent from "../components/Tache.js";
import TacheDetails from "../components/TacheDetails.js";

export function updateUI(tasks) {
	// creation du ToDoColumn
	const todoContainer = document.querySelector(".todo-tasks");
	const tachesTodo = tasks.filter((tache) => tache.status.toLowerCase() === "todo");
	const tachesToDoAsHtml = tachesTodo.map((tache) => TacheComponent(tache)).join("");
	todoContainer.innerHTML = tachesToDoAsHtml;

	// creation du DoingColumn
	const doingContainer = document.querySelector(".doing-tasks");
	const tachesDoing = tasks.filter((tache) => tache.status.toLowerCase() === "doing");
	const tachesDoingAsHtml = tachesDoing.map((tache) => TacheComponent(tache)).join("");
	doingContainer.innerHTML = tachesDoingAsHtml;

	// creation du DoneColumn
	const doneContainer = document.querySelector(".done-tasks");
	const tachesDone = tasks.filter((tache) => tache.status.toLowerCase() === "done");
	const tachesDoneAsHtml = tachesDone.map((tache) => TacheComponent(tache)).join("");
	doneContainer.innerHTML = tachesDoneAsHtml;

	// afficher le nombre des taches selon les status
	document.querySelector(".general-statistic").textContent = `(${tachesDone.length}/${tasks.length})`;
	document.querySelector(".todo-number").textContent = `(${tachesTodo.length})`;
	document.querySelector(".doing-number").textContent = `(${tachesDoing.length})`;
	document.querySelector(".done-number").textContent = `(${tachesDone.length})`;
}

///////////// form handling functionalities /////////////

const formContainer = document.querySelector(".form-overlay");
const form = document.querySelector(".form-overlay form");
const submitBtn = document.querySelector(".submit-btn");
// select input
const title = document.getElementById("title");
const description = document.getElementById("description");
const status = document.getElementById("status");
const priority = document.getElementById("priority");
const date = document.querySelector("form .date");
const time = document.querySelector("form .time");

export function showForm() {
	formContainer.classList.remove("hidden");
	document.body.style.overflow = "hidden";
}

export function hideForm() {
	formContainer.classList.add("hidden");
	document.body.style.overflow = "auto";
	resetForm();
}

export function resetForm() {
	title.value = "";
	description.value = "";
	date.value = "";
	time.value = "";
}

export function getFormData() {
	const id = submitBtn.textContent.toLocaleLowerCase() == "ajouter" ? Date.now() : Number(form.id);
	const tache = {
		title: title.value,
		description: description.value,
		status: status.value,
		priority: priority.value,
		deadline: { date: date.value, time: time.value },
		id,
	};

	return tache;
}

export function fillFormInputs(tache) {
	title.value = tache.title;
	description.value = tache.description;
	status.value = tache.status;
	priority.value = tache.priority;
	date.value = tache.deadline.date;
	time.value = tache.deadline.time;
	document.querySelector(".form-overlay form").id = tache.id;
}

export function openEditForm(event) {
	const taskId = event.target.closest(".task").id;
	const targetTask = taches.find((tache) => tache.id == taskId);
	fillFormInputs(targetTask);
	submitBtn.textContent = "modifier";
	showForm();
}
window.openEditForm = openEditForm;

///////////// main functionalities (CRUD) /////////////

export function ajouterTache(event) {
	event.preventDefault();
	const tache = getFormData();
	taches.push(tache);
	hideForm();
	updateUI(taches);
}

export function modifierTache(event) {
	const modifiedData = getFormData();
	const tacheIndex = taches.findIndex((tache) => tache.id == modifiedData.id);
	taches[tacheIndex] = modifiedData;
	hideForm();
	updateUI(taches);
}

export function supprimerTache(event) {
	const taskId = event.target.closest(".task").id;
	const tacheIndex = taches.findIndex((tache) => tache.id == taskId);
	taches.splice(tacheIndex, 1);
	updateUI(taches);
}
window.supprimerTache = supprimerTache;

export function openTaskDetails(element, event) {
	const editBtnClicked = Boolean(event.target.closest(".edit-btn"));
	const deleteBtnClicked = Boolean(event.target.closest(".delete-btn"));
	if (editBtnClicked || deleteBtnClicked) return;
	const tacheId = element.id;
	const tache = taches.find((tache) => tache.id == tacheId);
	document.body.insertAdjacentHTML("beforeend", TacheDetails(tache));
	const taskDetailsContainer = document.querySelector(".task-details");
	taskDetailsContainer.addEventListener("click", function (e) {
		if (e.target === this || e.target.classList.contains("delete-icon")) taskDetailsContainer.remove();
	});
}
window.openTaskDetails = openTaskDetails;
