import { createEvent } from "seyfert";

export default createEvent({
	data: { once: true, name: "messageCreate" },

	run: async (message, client) => {
		if (message.author.bot) return;

		const mentionRegex: RegExp = new RegExp(`^<@!?${client.me.id}>$`);
		if (message.content.match(mentionRegex)) message.react("✅");
	},
});
