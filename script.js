// import ConfettiGenerator from "confetti-js";
import {
	updateUI,
	ajouterTache,
	showForm,
	hideForm,
	getFormData,
	fillFormInputs,
	openEditForm,
	modifierTache,
	supprimerTache,
	openTaskDetails,
} from "./assets/scripts/functionalities.js";
import taches from "./assets/scripts/data.js";
import TacheDetails from "./assets/components/TacheDetails.js";

var confettiSettings = { target: "congratulation" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

updateUI(taches);

// implementer la fonctionalité d'ajouter des taches
const submitBtn = document.querySelector(".submit-btn");

const addBtn = document.querySelector(".add-btn");
addBtn.addEventListener("click", () => {
	submitBtn.textContent = "ajouter";
	showForm();
});

const form = document.querySelector(".form-overlay form");
form.addEventListener("submit", function (event) {
	event.preventDefault();
	const submitBtnContent = submitBtn.textContent.toLocaleLowerCase();
	if (submitBtnContent === "ajouter") ajouterTache(event);
	if (submitBtnContent === "modifier") modifierTache(event);
});

const formContainer = document.querySelector(".form-overlay");
formContainer.addEventListener("click", function (event) {
	if (event.target.closest(".close-form-btn")?.classList.contains("close-form-btn") || event.target === this)
		hideForm();
});

const filterBtns = document.querySelectorAll(".filter-sort-btns button");
filterBtns.forEach((btn) =>
	btn.addEventListener("click", function (event) {
		const btnPriority = this.dataset.priority;
		const filteredTaches = taches.filter((tache) => tache.priority === btnPriority);
		if (btnPriority === "all") updateUI(taches);
		else updateUI(filteredTaches);
	})
);
