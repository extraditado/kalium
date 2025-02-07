import type { ParseClient } from "seyfert";
import type { Kalium } from "./lib/structures/Kalium.ts";

declare module "seyfert" {
	interface UsingClient extends ParseClient<Kalium> {
		withPrefix: true;
	}
}

declare global {
	namespace NodeJS {
		interface ProcessEnv {
			NODE_ENV: "development" | "production";
			BOT_TOKEN: string;
		}
	}
}
