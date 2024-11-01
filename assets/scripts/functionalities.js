import taches from "./data.js";
import TacheComponent from "../components/Tache.js";

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
	// afficher le nombre des taches selon les status
	document.querySelector(".todo-number").textContent = `(${tachesTodo.length})`;
	document.querySelector(".doing-number").textContent = `(${tachesDoing.length})`;
	document.querySelector(".done-number").textContent = `(${tachesDone.length})`;
}

const formContainer = document.querySelector(".form-overlay");
const form = document.querySelector(".form-overlay form");
const submitBtn = document.querySelector(".submit-btn");

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
	document.getElementById("title").value = "";
	document.getElementById("description").value = "";
	document.getElementById("deadline").value = "";
}

export function getFormData() {
	const title = document.getElementById("title").value;
	const description = document.getElementById("description").value;
	const status = document.getElementById("status").value;
	const priority = document.getElementById("priority").value;
	const deadline = document.getElementById("deadline").value;
	const id = submitBtn.textContent.toLocaleLowerCase() == "ajouter" ? taches.length + 1 : Number(form.id);
	return { id, title, description, status, priority, deadline };
}

export function fillFormInputs(tache) {
	document.getElementById("title").value = tache.title;
	document.getElementById("description").value = tache.description;
	document.getElementById("status").value = tache.status;
	document.getElementById("priority").value = tache.priority;
	document.getElementById("deadline").value = tache.deadline;
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
