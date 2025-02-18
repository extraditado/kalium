import { createEvent } from "seyfert";

export default createEvent<"messageCreate">({
	data: { once: true, name: "messageCreate" },

	run: async (message, client) => {
		if (message.author.bot) return;
	},
});
