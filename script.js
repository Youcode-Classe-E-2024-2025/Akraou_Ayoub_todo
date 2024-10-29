"use strict";
console.log("hello");
const taches = [
	{
		id: 1,
		title: "Préparer la présentation",
		description: "Créer des diapositives pour la réunion d'équipe.",
		status: "To do",
		dueDate: "2024-11-01",
		priority: "high",
	},
	{
		id: 2,
		title: "Code review",
		description: "Vérifier le code de la nouvelle fonctionnalité.",
		status: "Doing",
		dueDate: "2024-11-03",
		priority: "medium",
	},
	{
		id: 3,
		title: "Envoyer les emails de suivi",
		description: "Envoyer des emails aux clients après la réunion.",
		status: "To do",
		dueDate: "2024-11-05",
		priority: "low",
	},
	{
		id: 4,
		title: "Mettre à jour la documentation",
		description:
			"Ajouter des informations sur les nouvelles fonctionnalités.",
		status: "Done",
		dueDate: "2024-10-28",
		priority: "high",
	},
	{
		id: 5,
		title: "Réunion avec le client",
		description: "Discuter des besoins et des spécifications.",
		status: "To do",
		dueDate: "2024-11-07",
		priority: "high",
	},
	{
		id: 6,
		title: "Tester l'application",
		description:
			"Effectuer des tests de régression pour l'application mobile.",
		status: "Doing",
		dueDate: "2024-11-04",
		priority: "medium",
	},
	{
		id: 7,
		title: "Nettoyage de la base de données",
		description:
			"Supprimer les données obsolètes et vérifier les incohérences.",
		status: "Done",
		dueDate: "2024-10-25",
		priority: "low",
	},
	{
		id: 8,
		title: "Rédiger un rapport",
		description: "Préparer un rapport pour la direction.",
		status: "To do",
		dueDate: "2024-11-08",
		priority: "medium",
	},
	{
		id: 9,
		title: "Mise à jour du site web",
		description: "Ajouter les nouvelles informations au site web.",
		status: "Doing",
		dueDate: "2024-11-06",
		priority: "high",
	},
	{
		id: 10,
		title: "Révision du budget",
		description: "Analyser et mettre à jour le budget du projet.",
		status: "To do",
		dueDate: "2024-11-10",
		priority: "medium",
	},
];

const tachesTodo = taches.filter(
	(tache) => tache.status.toLowerCase() === "to do"
);
const tachesDoing = taches.filter(
	(tache) => tache.status.toLowerCase() === "doing"
);
const tachesDone = taches.filter(
	(tache) => tache.status.toLowerCase() === "done"
);

function ajouterTache(id, title, description, status, dueDate, priority) {
	taches.push({ id, title, description, status, dueDate, priority });
}

function modifierTache(id, property, value) {
	const target = taches.find((tache) => tache.id === id);
	target[property] = value;
}

function supprimerTache(id) {
	const target = taches.findIndex((tache) => tache.id === id);
	taches.splice(target, 1);
}

function obtenirStatistiques() {
	return {
		nTaches: taches.length,
		nTachesTodo: tachesTodo.length,
		nTachesDoing: tachesDoing.length,
		nTachesDone: tachesDone.length,
		nTachesLowPriority: taches.filter(
			(tache) => tache.priority.toLowerCase() === "low"
		).length,
		nTachesMediumPriority: taches.filter(
			(tache) => tache.priority.toLowerCase() === "medium"
		).length,
		nTachesHighPriority: taches.filter(
			(tache) => tache.priority.toLowerCase() === "high"
		).length,
	};
}

console.log(obtenirStatistiques());
