import taches from "./data.js";
import TacheComponent from "../components/Tache.js";

export function updateUI() {
	// creation du ToDoColumn
	const todoContainer = document.querySelector(".todo-tasks");
	const tachesTodo = taches.filter((tache) => tache.status.toLowerCase() === "to do");
	const tachesToDoAsHtml = tachesTodo.map((tache) => TacheComponent(tache)).join("");
	todoContainer.innerHTML = tachesToDoAsHtml;

	// creation du DoingColumn
	const doingContainer = document.querySelector(".doing-tasks");
	const tachesDoing = taches.filter((tache) => tache.status.toLowerCase() === "doing");
	const tachesDoingAsHtml = tachesDoing.map((tache) => TacheComponent(tache)).join("");
	doingContainer.innerHTML = tachesDoingAsHtml;

	// creation du DoneColumn
	const doneContainer = document.querySelector(".done-tasks");
	const tachesDone = taches.filter((tache) => tache.status.toLowerCase() === "done");
	const tachesDoneAsHtml = tachesDone.map((tache) => TacheComponent(tache)).join("");
	doneContainer.innerHTML = tachesDoneAsHtml;

	// afficher le nombre des taches selon les status
	document.querySelector(".general-statistic").textContent = `(${tachesDone.length}/${taches.length})`;
	// afficher le nombre des taches selon les status
	document.querySelector(".todo-number").textContent = `(${tachesTodo.length})`;
	document.querySelector(".doing-number").textContent = `(${tachesDoing.length})`;
	document.querySelector(".done-number").textContent = `(${tachesDone.length})`;
}

const formContainer = document.querySelector(".form-overlay");

export function showForm() {
	formContainer.classList.remove("hidden");
	document.body.style.overflow = "hidden";
}

export function hideForm() {
	formContainer.classList.add("hidden");
	document.body.style.overflow = "auto";
}

export function ajouterTache(event) {
	event.preventDefault();
	const title = document.getElementById("title");
	const description = document.getElementById("description");
	const status = document.getElementById("status");
	const priority = document.getElementById("priority");
	const deadline = document.getElementById("deadline");

	taches.push({
		id: taches.length + 1,
		title: title.value,
		description: description.value,
		status: status.value,
		priority: priority.value,
		deadline: deadline.value,
	});
	hideForm();
	updateUI();
	title.value = "";
	description.value = "";
	status.value = "";
	priority.value = "";
	deadline.value = "";
}

formContainer.addEventListener("click", function (event) {
	if (event.target.closest(".close-form-btn")?.classList.contains("close-form-btn")) {
		hideForm();
	}
});
