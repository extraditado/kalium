import { config } from "seyfert";
import { GatewayIntentBits } from "seyfert/lib/types";

export default config.bot({
	token: process.env.BOT_TOKEN ?? "",
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
	locations: {
		base: "src/",
		commands: "commands",
		events: "events",
	},
});
