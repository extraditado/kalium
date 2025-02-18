import { createEvent } from "seyfert";

export default createEvent<"botReady">({
	data: { once: true, name: "botReady" },

	run: async (user, client) => {
		await client.uploadCommands();
	},
});
