export default function Form(status) {
	return `
   <div class="overlay absolute top-0 right-0 bottom-0 left-0 bg-gray-800/50 flex">
			<form class="relative backdrop-blur-sm bg-white m-auto w-96 px-7 py-5">
				<button type="button" class="close-form-btn absolute top-2 right-2">
					<i class="fa-solid fa-xmark text-3xl text-gray-800"></i>
				</button>
				<fieldset class="flex flex-col gap-1">
					<div class="box">
						<label class="text-base font-medium" for="title">titre</label>
						<input
							class="outline-none block border border-gray-400 border-solid rounded-sm px-2 py-1 w-full"
							id="title"
							type="text"
							required />
					</div>
					<div class="box">
						<label class="text-base font-medium" for="description">description</label>
						<input
							class="outline-none block border border-gray-400 border-solid rounded-sm px-2 py-1 w-full"
							id="description"
							type="text"
							required />
					</div>
					<div class="box">
						<label class="text-base font-medium" for="status">statut</label>
						<select
							class="outline-none block border border-gray-400 border-solid rounded-sm px-2 py-1 w-full"
							name=""
							id="status"
							required>
							<option value="todo" ${status === "todo" ? "selected" : ""}>to do</option>
							<option value="doing" ${status === "doing" ? "selected" : ""}>doing</option>
							<option value="done" ${status === "done" ? "selected" : ""}>done</option>
						</select>
					</div>
					<div class="box">
						<label class="text-base font-medium" for="priority">priorité</label>
						<select
							class="outline-none block border border-gray-400 border-solid rounded-sm px-2 py-1 w-full"
							name=""
							id="priority"
							required>
							<option value="low">low</option>
							<option value="medium" selected>medium</option>
							<option value="done">done</option>
						</select>
					</div>
					<div class="box">
						<label class="text-base font-medium" for="deadline">deadline</label>
						<input
							class="outline-none block border border-gray-400 border-solid rounded-sm px-2 py-1 w-full"
							id="description"
							type="date"
							required />
					</div>
					<button class="w-full mt-1 p-2 rounded-sm bg-gray-800 text-white text-center font-bold">Ajouter</button>
				</fieldset>
			</form>
		</div>
   `;
}
