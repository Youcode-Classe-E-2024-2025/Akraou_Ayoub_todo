export default function TacheDetails(tache) {
	return `
		<div class="task-details fixed top-0 left-0 right-0 bottom-0 text-black text-3xl flex justify-center items-center bg-black/50 p-4">
			<div id="${tache?.id}" class="task rounded-sm px-4 py-2 pt-0 bg-white w-full max-w-96">
				<button class="delete-btn block ml-auto" onclick="">
						<i class="delete-icon fa-solid fa-xmark text-xl "></i>
					</button>
				<h3 class="task-title !leading-none text-base md:text-lg font-semibold mr-auto capitalize">
					${tache?.title}
				</h3>
				<p class="task-description lg:block text-base leading-normal">${tache?.description}</p>
				<p class="deadline text-sm font-medium text-right">${tache?.deadline}</p>
			</div>
		</div>`;
}
