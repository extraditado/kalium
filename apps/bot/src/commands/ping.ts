import { Declare, Command, type CommandContext } from "seyfert";

@Declare({
	name: "ping",
	description: "",
})
export class PingCommand extends Command {
	public async execute(ctx: CommandContext) {
		await ctx.editOrReply({ content: "Pong!" });
	}
}
