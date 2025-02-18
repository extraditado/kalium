import type { ParseClient } from "seyfert";
import type { Kalium } from "./lib/structures/Bot.ts";

declare module "seyfert" {
	interface UsingClient extends ParseClient<Kalium> {}
}
