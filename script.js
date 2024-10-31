"use strict";
import TacheComponent from "./assets/components/Tache.js";
import FormComponent from "./assets/components/Form.js";
import { updateUI, ajouterTache, showForm, hideForm } from "./assets/scripts/functionalities.js";
import taches from "./assets/scripts/data.js";

updateUI();

function modifierTache(id, property, value) {
	const target = taches.find((tache) => tache.id === id);
	target[property] = value;
	updateUI;
}

function supprimerTache(id) {
	const target = taches.findIndex((tache) => tache.id === id);
	taches.splice(target, 1);
	updateUI();
}

// inmplementer la fonctionalité d'ajouter des taches
const addBtn = document.querySelector(".todo-column .add-btn");
addBtn.addEventListener("click", () => showForm());

const form = document.querySelector(".form-overlay form");

form.addEventListener("submit", ajouterTache);
