import { createEvent } from "seyfert";

export default createEvent({
	data: { once: true, name: "botReady" },

	run: async (user, client) => {
		client.logger.info(`[${user.username}] is ready.`);
		await client.uploadCommands();
	},
});
