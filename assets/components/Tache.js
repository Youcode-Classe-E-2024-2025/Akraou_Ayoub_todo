"use strict";
export default function TacheComponent(tache) {
	const backgroundColor =
		tache?.priority == "high" ? "bg-red-500" : tache?.priority == "medium" ? "bg-amber-500" : "bg-green-500";
	return `<div id=${tache?.id}
					class="task ${backgroundColor} hover:scale-105 cursor-pointer transition-all rounded-md px-2 lg:px-4 py-2">
					<div class="task-header flex justify-between items-start gap-3">
						<h3 class="task-title text-base md:text-lg font-semibold mr-auto capitalize">${tache?.title}</h3>
						<button class="edit-btn">
							<i class="edit-icon fa-regular fa-pen-to-square"></i>
						</button>
						<button class="delete">
							<i class="delete-icon fa-solid fa-xmark"></i>
						</button>
					</div>
					<p
						class="task-description hidden lg:block text-base leading-normal max-h-[calc(1.5*16px*2)] text-nowrap overflow-hidden text-ellipsis">
						${tache?.description}
					</p>
					<p class="deadline text-sm font-medium text-gray-50 text-right">12/02/2024</p>
				</div>`;
}
