export default {
	template: `
				<li>
				<label class="flex justify-between p-2">
						{{assignment.name}}

						<input v-model="assignment.complete" type="checkbox" class="ml-3" />
				</label>
			</li>
	`,

	props: {
		assignment: Object,
	},
};
