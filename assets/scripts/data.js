export default [
	{
		id: 2,
		title: "Code review",
		description:
			"Vérifier minutieusement le code de la nouvelle fonctionnalité ajoutée pour s'assurer qu'il respecte les standards de qualité et ne comporte pas de bugs potentiels. Ajouter des commentaires constructifs si nécessaire.",
		status: "doing",
		deadline: { date: "2024-11-03", time: "14:00" },
		priority: "medium",
	},
	{
		id: 7,
		title: "Nettoyage de la base de données",
		description:
			"Analyser la base de données pour identifier et supprimer les données obsolètes, tout en vérifiant l'intégrité des données existantes. Assurer la sécurité et la performance de la base de données.",
		status: "done",
		deadline: { date: "2024-10-25", time: "08:30" },
		priority: "low",
	},
	{
		id: 8,
		title: "Rédiger un rapport",
		description:
			"Préparer un rapport détaillé pour la direction, incluant les performances du trimestre, les budgets utilisés, et les progrès des projets. Fournir des recommandations pour les prochaines étapes.",
		status: "todo",
		deadline: { date: "2024-11-08", time: "17:00" },
		priority: "high",
	},
];
